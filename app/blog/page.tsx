import prismadb from "@/lib/prismadb";
import BlogList from "./BlogList";

export default async function BlogPage() {
  // Fetch all published blogs, sorted by date (newest first) using SSR
  const blogs = await prismadb.blog.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
    take: 100, // Limit to 100 blogs for performance
  });

  // Format the blogs data
  const formattedBlogs = blogs.map((blog) => ({
    id: blog.id,
    title: blog.title,
    excerpt: blog.excerpt,
    slug: blog.slug,
    createdAt: blog.createdAt.toISOString(),
    tags: blog.tags.map((bt) => ({
      id: bt.tag.id,
      name: bt.tag.name,
    })),
  }));

  return <BlogList blogs={formattedBlogs} />;
}
