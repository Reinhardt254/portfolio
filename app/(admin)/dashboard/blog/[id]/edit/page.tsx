"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogPostFormSchema, BlogPostFormData } from "@/lib/schemas/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useMemo } from "react";
import { TiptapEditor } from "@/components/dashboard/editor/TiptapEditor";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Image as ImageIcon, Loader2 } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { generateSlug } from "@/lib/utils/blog";
import Image from "next/image";

const CATEGORY_SUGGESTIONS = [
  "Technology",
  "Web Development",
  "Programming",
  "Design",
  "Tutorials",
  "Projects",
  "Career",
  "Tips & Tricks",
];

const TAG_SUGGESTIONS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "CSS",
  "HTML",
  "Node.js",
  "Full Stack",
  "Frontend",
  "Backend",
  "UI/UX",
  "Design",
];

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const { data: session } = authClient.useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [customCategory, setCustomCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [showTagDropdown, setShowTagDropdown] = useState(false);

  const form = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostFormSchema),
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      slug: "",
      status: "draft",
      category: "",
      tags: [],
      featuredImage: null,
    },
  });

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/blogs/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }
      const blog = await response.json();

      form.reset({
        title: blog.title,
        content: blog.content,
        excerpt: blog.excerpt || "",
        slug: blog.slug,
        status: blog.status,
        category: blog.category?.name || "",
        tags: blog.tags?.map((t: any) => t.name) || [],
        featuredImage: blog.featuredImage || null,
      });

      setFeaturedImageUrl(blog.featuredImage || "");
      setTags(blog.tags?.map((t: any) => t.name) || []);
      setCustomCategory(blog.category?.name || "");
    } catch (error) {
      console.error("Error fetching blog:", error);
      toast.error("Failed to load blog post");
      router.push("/dashboard/blog");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: BlogPostFormData) => {
    if (!session?.user) {
      toast.error("You must be logged in to edit blog posts");
      return;
    }

    setIsSubmitting(true);
    try {
      const cleanData = {
        ...data,
        tags: tags,
        featuredImage: featuredImageUrl || null,
      };

      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update blog post");
      }

      toast.success("Blog post updated successfully!");
      router.push("/dashboard/blog");
    } catch (error) {
      console.error("Error updating blog post:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to update blog post"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCategorySelect = (category: string) => {
    form.setValue("category", category);
    setShowCategoryDropdown(false);
  };

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
      setTagInput("");
    }
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(tagInput);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const filteredCategorySuggestions = useMemo(() => {
    const currentCategory = form.getValues("category");
    return CATEGORY_SUGGESTIONS.filter(
      (category) =>
        category.toLowerCase().includes(customCategory.toLowerCase()) &&
        category !== currentCategory
    );
  }, [customCategory, form]);

  const filteredTagSuggestions = useMemo(() => {
    return TAG_SUGGESTIONS.filter(
      (tag) =>
        tag.toLowerCase().includes(tagInput.toLowerCase()) &&
        !tags.includes(tag)
    );
  }, [tagInput, tags]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Access Denied</h2>
          <p className="text-gray-300">
            You must be logged in to edit blog posts.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Edit Blog Post</h1>
          <p className="mt-2 text-gray-300">Update your blog post</p>
        </div>
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard/blog")}
        >
          Back to Blog List
        </Button>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Same form structure as create page */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                placeholder="Enter your blog post title"
                {...form.register("title")}
                className="mt-1"
              />
              {form.formState.errors.title && (
                <p className="mt-1 text-sm text-red-500">
                  {form.formState.errors.title.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                placeholder="Enter URL slug (e.g., my-blog-post)"
                {...form.register("slug")}
                className="mt-1"
              />
              {form.formState.errors.slug && (
                <p className="mt-1 text-sm text-red-500">
                  {form.formState.errors.slug.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                placeholder="Brief description of your blog post"
                {...form.register("excerpt")}
                className="mt-1"
                rows={3}
              />
              {form.formState.errors.excerpt && (
                <p className="mt-1 text-sm text-red-500">
                  {form.formState.errors.excerpt.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                {...form.register("status")}
                className="mt-1 flex h-9 w-full rounded-md border border-slate-700 bg-slate-800 text-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Featured Image */}
        <Card>
          <CardHeader>
            <CardTitle>Featured Image</CardTitle>
          </CardHeader>
          <CardContent>
            {featuredImageUrl ? (
              <div className="space-y-4">
                <div className="relative">
                  <Image
                    src={featuredImageUrl}
                    width={1000}
                    height={1000}
                    alt="Featured"
                    className="object-cover w-full h-48 rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => setFeaturedImageUrl("")}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center rounded-lg border-2 border-slate-700 border-dashed">
                <ImageIcon className="mx-auto mb-4 w-12 h-12 text-gray-400" />
                <p className="mb-4 text-gray-400">No featured image selected</p>
              </div>
            )}
            <div className="mt-4">
              <Label htmlFor="featuredImageUrl">Image URL</Label>
              <Input
                id="featuredImageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={featuredImageUrl}
                onChange={(e) => setFeaturedImageUrl(e.target.value)}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Category and Tags */}
        <Card>
          <CardHeader>
            <CardTitle>Category & Tags</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Label htmlFor="category">Category</Label>
              <div className="relative mt-1">
                <Input
                  id="category"
                  placeholder="Select or enter a category"
                  value={form.watch("category")}
                  onChange={(e) => {
                    form.setValue("category", e.target.value);
                    setCustomCategory(e.target.value);
                  }}
                  onFocus={() => setShowCategoryDropdown(true)}
                  className="pr-10"
                />
              </div>
              {showCategoryDropdown && customCategory && (
                <div className="overflow-y-auto absolute z-10 mt-1 w-full max-h-60 bg-slate-800 rounded-md border border-slate-700 shadow-lg">
                  {filteredCategorySuggestions.map((category) => (
                    <button
                      key={category}
                      type="button"
                      className="px-4 py-2 w-full text-left hover:bg-gray-100"
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="tags">Tags</Label>
              <div className="mt-1 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex gap-1 items-center"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="relative">
                  <Input
                    id="tags"
                    placeholder="Add tags..."
                    value={tagInput}
                    onChange={(e) => {
                      setTagInput(e.target.value);
                      setShowTagDropdown(true);
                    }}
                    onKeyDown={handleTagInputKeyDown}
                    onFocus={() => setShowTagDropdown(true)}
                  />
                  {showTagDropdown && tagInput && (
                    <div className="overflow-y-auto absolute z-10 mt-1 w-full max-h-60 bg-slate-800 rounded-md border border-slate-700 shadow-lg">
                      {filteredTagSuggestions.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className="px-4 py-2 w-full text-left text-white hover:bg-slate-700"
                          onClick={() => {
                            addTag(tag);
                            setShowTagDropdown(false);
                          }}
                        >
                          {tag}
                        </button>
                      ))}
                      {tagInput &&
                        !filteredTagSuggestions.includes(tagInput) && (
                          <button
                            type="button"
                            className="px-4 py-2 w-full text-left text-blue-400 hover:bg-slate-700"
                            onClick={() => {
                              addTag(tagInput);
                              setShowTagDropdown(false);
                            }}
                          >
                            Add &quot;{tagInput}&quot;
                          </button>
                        )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Editor */}
        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
          </CardHeader>
          <CardContent>
            <TiptapEditor
              content={form.watch("content")}
              onChange={(content) => form.setValue("content", content)}
              placeholder="Start writing your blog post..."
            />
            {form.formState.errors.content && (
              <p className="mt-2 text-sm text-red-500">
                {form.formState.errors.content.message}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Submit Buttons */}
        <div className="flex gap-4 justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/dashboard/blog")}
          >
            Cancel
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update Blog Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
