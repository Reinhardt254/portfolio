import { notFound } from "next/navigation";
import prismadb from "@/lib/prismadb";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

interface PageProps {
  params: Promise<{ id: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const blog = await prismadb.blog.findUnique({
    where: { id },
    include: {
      category: true,
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  if (!blog || blog.status !== "published") {
    return {
      title: "Blog Post Not Found",
    };
  }

  const description =
    blog.excerpt || blog.content.replace(/<[^>]*>/g, "").slice(0, 160);
  const imageUrl = blog.featuredImage || "";

  return {
    title: blog.title,
    description: description,
    openGraph: {
      title: blog.title,
      description: description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;

  // Fetch blog post data
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

  if (!blog || blog.status !== "published") {
    notFound();
  }

  const post = {
    ...blog,
    publishedAt: blog.publishedAt?.toISOString() || null,
    createdAt: blog.createdAt.toISOString(),
    updatedAt: blog.updatedAt.toISOString(),
    tags: blog.tags.map((bt) => ({
      id: bt.tag.id,
      name: bt.tag.name,
    })),
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/blog">
          <button className="mb-8 text-white hover:text-blue-400 transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog List
          </button>
        </Link>

        {/* Blog Post */}
        <article>
          {/* Header */}
          <header className="mb-8 max-sm:mb-4">
            <h1 className="mb-4 text-4xl font-bold text-blue-400 pb-2 border-b-2 border-dotted border-blue-400">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mt-4">
              {/* Author */}
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-slate-800 rounded-full border border-slate-700">
                  <span className="text-blue-400">
                    {post.author.name?.charAt(0) || post.author.email.charAt(0)}
                  </span>
                </div>
                <span>{post.author.name || post.author.email}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-blue-300/70" />
                <time
                  dateTime={post.publishedAt || post.createdAt}
                  className="text-blue-300/70"
                >
                  {formatDate(post.publishedAt || post.createdAt)}
                </time>
              </div>

              {/* Category */}
              {post.category && (
                <span className="text-gray-300">
                  #{post.category.name.toLowerCase().replace(/\s+/g, "-")}
                </span>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8">
              <Image
                src={post.featuredImage}
                width={1000}
                height={1000}
                alt={post.title}
                className="object-cover w-full rounded-lg max-h-96"
              />
            </div>
          )}

          {/* Content */}
          <div className="mb-8">
            <div
              className="prose prose-md prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-code:text-blue-400 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700 post-content"     
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-800">
              {post.tags.map((tag) => (
                <span key={tag.id} className="text-gray-300 text-sm">
                  #{tag.name.toLowerCase().replace(/\s+/g, "-")}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
