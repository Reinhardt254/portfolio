import prismadb from "@/lib/prismadb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

async function getStats() {
  const [messageCount, blogCount, publishedBlogCount] = await Promise.all([
    prismadb.message.count(),
    prismadb.blog.count(),
    prismadb.blog.count({ where: { status: "published" } }),
  ]);

  return {
    messageCount,
    blogCount,
    publishedBlogCount,
  };
}

export default async function DashboardPage() {
  const stats = await getStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="mt-2 text-gray-300">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Total Messages
            </CardTitle>
            <MessageCircle className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {stats.messageCount}
            </div>
            <p className="text-xs text-gray-400">
              <Link
                href="/dashboard/messages"
                className="text-blue-400 hover:text-blue-300 hover:underline"
              >
                View all messages
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Total Blog Posts
            </CardTitle>
            <BookOpen className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {stats.blogCount}
            </div>
            <p className="text-xs text-gray-400">
              {stats.publishedBlogCount} published
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Quick Actions
            </CardTitle>
            <FileText className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Link
                href="/dashboard/blog/create"
                className="block text-sm text-blue-400 hover:text-blue-300 hover:underline"
              >
                Create new blog post
              </Link>
              <Link
                href="/dashboard/blog"
                className="block text-sm text-blue-400 hover:text-blue-300 hover:underline"
              >
                Manage blog posts
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-white">Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/dashboard/messages"
              className="flex items-center gap-3 p-4 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <div>
                <p className="font-medium text-white">Messages</p>
                <p className="text-sm text-gray-400">
                  View and manage contact messages
                </p>
              </div>
            </Link>
            <Link
              href="/dashboard/blog"
              className="flex items-center gap-3 p-4 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              <BookOpen className="w-5 h-5 text-blue-400" />
              <div>
                <p className="font-medium text-white">Blog Posts</p>
                <p className="text-sm text-gray-400">
                  Create and manage blog posts
                </p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
