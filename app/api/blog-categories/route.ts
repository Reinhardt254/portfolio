import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { auth } from "@/lib/auth";
import { blogCategorySchema } from "@/lib/schemas/blog";
import { generateSlug } from "@/lib/utils/blog";

export const runtime = "nodejs";

// GET /api/blog-categories - List all categories
export async function GET(req: NextRequest) {
  try {
    const categories = await prismadb.blogCategory.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Categories fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

// POST /api/blog-categories - Create new category
export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const validatedData = blogCategorySchema.parse(body);

    // Generate slug if not provided
    const slug = validatedData.slug || generateSlug(validatedData.name);

    // Check if name or slug already exists
    const existingCategory = await prismadb.blogCategory.findFirst({
      where: {
        OR: [{ name: validatedData.name }, { slug }],
      },
    });

    if (existingCategory) {
      return NextResponse.json(
        { error: "Category name or slug already exists" },
        { status: 400 }
      );
    }

    const createdCategory = await prismadb.blogCategory.create({
      data: {
        name: validatedData.name,
        slug: slug,
        description: validatedData.description || null,
      },
    });

    return NextResponse.json(createdCategory, { status: 201 });
  } catch (error) {
    console.error("Category creation error:", error);
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation error", details: error },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}
