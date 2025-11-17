import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { auth } from "@/lib/auth";
import { blogPostSchema, blogQuerySchema } from "@/lib/schemas/blog";
import { generateSlug, generateExcerpt } from "@/lib/utils/blog";

export const runtime = "nodejs";

// GET /api/blogs - List blogs with filtering and pagination
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const queryParams = blogQuerySchema.parse({
      page: searchParams.get("page") || "1",
      limit: searchParams.get("limit") || "10",
      search: searchParams.get("search") || undefined,
      category: searchParams.get("category") || undefined,
      tag: searchParams.get("tag") || undefined,
      status: searchParams.get("status") || undefined,
      authorId: searchParams.get("authorId") || undefined,
      sortBy: searchParams.get("sortBy") || "createdAt",
      sortOrder: searchParams.get("sortOrder") || "desc",
    });

    const {
      page,
      limit,
      search,
      category,
      tag,
      status,
      authorId,
      sortBy,
      sortOrder,
    } = queryParams;
    const skip = (page - 1) * limit;

    // Build where conditions
    const where: any = {};

    if (status) {
      where.status = status;
    }

    if (authorId) {
      where.authorId = authorId;
    }

    if (category) {
      const categoryRecord = await prismadb.blogCategory.findFirst({
        where: { name: category },
      });
      if (categoryRecord) {
        where.categoryId = categoryRecord.id;
      } else {
        // No blogs found with this category
        return NextResponse.json({
          data: [],
          pagination: {
            currentPage: page,
            totalPages: 0,
            totalCount: 0,
            hasNextPage: false,
            hasPrevPage: false,
          },
        });
      }
    }

    // Handle tag filtering
    if (tag) {
      const tagRecord = await prismadb.blogTag.findFirst({
        where: { name: tag },
        include: {
          blogs: {
            select: {
              blogId: true,
            },
          },
        },
      });

      if (tagRecord && tagRecord.blogs.length > 0) {
        const blogIds = tagRecord.blogs.map((b) => b.blogId);
        where.id = { in: blogIds };
      } else {
        // No blogs found with this tag
        return NextResponse.json({
          data: [],
          pagination: {
            currentPage: page,
            totalPages: 0,
            totalCount: 0,
            hasNextPage: false,
            hasPrevPage: false,
          },
        });
      }
    }

    // Handle search - For MongoDB, we'll use contains (case-sensitive)
    // For case-insensitive, you'd need to handle it in application code
    if (search) {
      where.OR = [
        { title: { contains: search } },
        { content: { contains: search } },
        { excerpt: { contains: search } },
      ];
    }

    // Build order by
    const orderBy: any = {};
    orderBy[sortBy] = sortOrder;

    // Get total count
    const totalCount = await prismadb.blog.count({ where });

    const totalPages = Math.ceil(totalCount / limit);

    // Get blogs with related data
    const blogs = await prismadb.blog.findMany({
      where,
      skip,
      take: limit,
      orderBy,
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

    // Format the response
    const blogsWithTags = blogs.map((blog) => ({
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
    }));

    return NextResponse.json({
      data: blogsWithTags,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Blogs fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST /api/blogs - Create new blog
export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    // Generate slug from title if not provided
    if (!body.slug && body.title) {
      body.slug = generateSlug(body.title);
    }

    // Generate excerpt if not provided
    if (!body.excerpt && body.content) {
      body.excerpt = generateExcerpt(body.content);
    }

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

    // Check if slug is unique
    try {
      const existingBlog = await prismadb.blog.findFirst({
        where: { slug: validatedData.slug },
      });

      if (existingBlog) {
        // Make slug unique by appending timestamp
        validatedData.slug = `${validatedData.slug}-${Date.now()}`;
      }
    } catch (error) {
      console.error("Error checking slug uniqueness:", error);
      // Continue with creation even if slug check fails
    }

    // Set published date if status is published
    let publishedAt: Date | null = null;
    if (validatedData.status === "published") {
      if (validatedData.publishedAt) {
        publishedAt = new Date(validatedData.publishedAt);
      } else {
        publishedAt = new Date();
      }
    }

    // Create blog post
    let createdBlog;
    try {
      createdBlog = await prismadb.blog.create({
        data: {
          title: validatedData.title,
          content: validatedData.content,
          excerpt: validatedData.excerpt || null,
          slug: validatedData.slug,
          categoryId: categoryId,
          featuredImage: validatedData.featuredImage || null,
          authorId: session.user.id,
          status: validatedData.status,
          publishedAt: publishedAt,
        },
      });

      // Handle tags
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
              blogId: createdBlog.id,
              tagId: tag.id,
            },
          });
        }
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      return NextResponse.json(
        { error: "Failed to create blog post" },
        { status: 500 }
      );
    }

    return NextResponse.json(createdBlog, { status: 201 });
  } catch (error) {
    console.error("Blog creation error:", error);
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation error", details: error },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
