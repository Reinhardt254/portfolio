"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const POSTS_PER_PAGE = 10;

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

interface Blog {
  id: string;
  title: string;
  excerpt: string | null;
  slug: string;
  createdAt: string;
  tags: Array<{ id: string; name: string }>;
}

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Filtered blogs by search
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;
    if (search.trim()) {
      filtered = filtered.filter(
        (b) =>
          b.title.toLowerCase().includes(search.toLowerCase()) ||
          (b.excerpt &&
            b.excerpt.toLowerCase().includes(search.toLowerCase())) ||
          (b.tags &&
            b.tags.some((tag) =>
              tag.name.toLowerCase().includes(search.toLowerCase())
            ))
      );
    }
    return filtered;
  }, [blogs, search]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredBlogs.length / POSTS_PER_PAGE)
  );

  // Reset to first page when search changes
  useEffect(() => {
    setPage(1);
  }, [search]);

  const paginatedBlogs = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return filteredBlogs.slice(start, start + POSTS_PER_PAGE);
  }, [filteredBlogs, page]);

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Search */}
        <div className="mb-7">
          <Input
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md bg-slate-900 border-slate-700 text-white placeholder:text-gray-500"
          />
        </div>

        {/* Blog Posts List */}
        <div className="space-y-8">
          {paginatedBlogs.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-400">
                {search
                  ? "No blog posts found matching your search."
                  : "No blog posts yet."}
              </p>
            </div>
          ) : (
            paginatedBlogs.map((post, index) => (
              <div key={post.id}>
                <article
                  className="cursor-pointer group"
                  onClick={() => router.push(`/blog/${post.slug}/${post.id}`)}
                >
                  {/* Title with dotted underline */}
                  <h2 className="text-2xl font-bold text-blue-400 mb-3 pb-2 border-b-2 border-dotted border-blue-400 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h2>

                  {/* Tags and Date */}
                  <div className="flex items-center gap-4 mb-3 flex-wrap">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap">
                        {post.tags.map((tag) => (
                          <span key={tag.id} className="text-gray-300 text-sm">
                            #{tag.name.toLowerCase().replace(/\s+/g, "-")}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* Date */}
                    <span className="text-blue-300/70 text-sm">
                      {formatDate(post.createdAt)}
                    </span>
                  </div>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-white mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read more link */}
                  <div className="text-white group-hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </article>

                {/* Separator (except for last item) */}
                {index < paginatedBlogs.length - 1 && (
                  <div className="mt-8 border-t border-slate-800" />
                )}
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 text-white border border-slate-700 rounded hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-400">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 text-white border border-slate-700 rounded hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
