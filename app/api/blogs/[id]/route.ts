import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { auth } from "@/lib/auth";
import { blogPostSchema } from "@/lib/schemas/blog";
import { generateSlug, generateExcerpt } from "@/lib/utils/blog";

export const runtime = "nodejs";

// GET /api/blogs/[id] - Get single blog
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Get blog with related data
    const blog = await prismadb.blog.findUnique({
      where: { id },
      include: {
        category: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const blogWithTags = {
      id: blog.id,
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      slug: blog.slug,
      status: blog.status,
      publishedAt: blog.publishedAt?.toISOString() || null,
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
      category: blog.category
        ? {
            id: blog.category.id,
            name: blog.category.name,
          }
        : null,
      featuredImage: blog.featuredImage,
      author: {
        id: blog.author.id,
        name: blog.author.name || blog.author.email,
      },
      tags: blog.tags.map((bt) => ({
        id: bt.tag.id,
        name: bt.tag.name,
      })),
    };

    return NextResponse.json(blogWithTags);
  } catch (error) {
    console.error("Blog fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[id] - Update blog
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    // Check if blog exists and user has permission
    const existingBlog = await prismadb.blog.findUnique({
      where: { id },
      select: { authorId: true },
    });

    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Check if user is the author (or admin - you can add admin check here)
    if (existingBlog.authorId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    // Validate with the full schema
    const validatedData = blogPostSchema.parse(body);

    // Handle category as text (name)
    let categoryId: string | null = null;
    if (
      body.category &&
      typeof body.category === "string" &&
      body.category.trim() !== ""
    ) {
      const categoryName = body.category.trim();
      // Try to find the category by name first
      let categoryRecord = await prismadb.blogCategory.findFirst({
        where: { name: categoryName },
      });
      if (categoryRecord) {
        categoryId = categoryRecord.id;
      } else {
        // Create new category with auto-generated slug
        const categorySlug = generateSlug(categoryName);
        const newCategory = await prismadb.blogCategory.create({
          data: {
            name: categoryName,
            slug: categorySlug,
          },
        });
        categoryId = newCategory.id;
      }
    } else if (validatedData.categoryId) {
      categoryId = validatedData.categoryId;
    }

    // Generate excerpt if not provided
    let excerpt = validatedData.excerpt;
    if (!excerpt && validatedData.content) {
      excerpt = generateExcerpt(validatedData.content);
    }

    // Check if slug is unique (excluding current blog)
    if (validatedData.slug) {
      const existingSlugBlog = await prismadb.blog.findFirst({
        where: {
          slug: validatedData.slug,
          NOT: { id },
        },
      });

      if (existingSlugBlog) {
        return NextResponse.json(
          { error: "Slug already exists" },
          { status: 400 }
        );
      }
    }

    // Set published date if status is being changed to published
    let publishedAt: Date | null = null;
    if (validatedData.status === "published") {
      if (validatedData.publishedAt) {
        publishedAt = new Date(validatedData.publishedAt);
      } else if (!existingBlog) {
        publishedAt = new Date();
      }
    }

    // Update blog post
    try {
      const updatedBlog = await prismadb.blog.update({
        where: { id },
        data: {
          title: validatedData.title,
          content: validatedData.content,
          excerpt: excerpt || null,
          slug: validatedData.slug,
          categoryId: categoryId,
          featuredImage: validatedData.featuredImage || null,
          status: validatedData.status,
          publishedAt: publishedAt,
          updatedAt: new Date(),
        },
      });

      // Handle tags - remove existing and add new
      await prismadb.blogPostTag.deleteMany({
        where: { blogId: id },
      });

      if (validatedData.tags && validatedData.tags.length > 0) {
        for (const tagName of validatedData.tags) {
          // Find or create tag
          let tag;
          const existingTag = await prismadb.blogTag.findFirst({
            where: { name: tagName },
          });

          if (existingTag) {
            tag = existingTag;
          } else {
            tag = await prismadb.blogTag.create({
              data: {
                name: tagName,
              },
            });
          }

          // Link tag to blog
          await prismadb.blogPostTag.create({
            data: {
              blogId: id,
              tagId: tag.id,
            },
          });
        }
      }

      return NextResponse.json(updatedBlog);
    } catch (error) {
      console.error("Blog update error:", error);
      return NextResponse.json(
        { error: "Failed to update blog" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Blog update error:", error);
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation error", details: error },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[id] - Delete blog
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    // Check if blog exists and user has permission
    const existingBlog = await prismadb.blog.findUnique({
      where: { id },
      select: { authorId: true },
    });

    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Check if user is the author (or admin - you can add admin check here)
    if (existingBlog.authorId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Delete blog (tags will be deleted automatically due to cascade)
    await prismadb.blog.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Blog deletion error:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
