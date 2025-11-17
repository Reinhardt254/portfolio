import { z } from "zod";

// Blog post creation/update schema
export const blogPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be less than 255 characters"),
  content: z
    .string()
    .min(1, "Content is required")
    .min(50, "Content must be at least 50 characters"),
  excerpt: z
    .string()
    .max(500, "Excerpt must be less than 500 characters")
    .optional(),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(255, "Slug must be less than 255 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase letters, numbers, and hyphens only"
    ),
  categoryId: z.string().nullable().optional(),
  featuredImage: z.string().url().nullable().optional(),
  status: z.enum(["draft", "published", "archived"]).default("draft"),
  tags: z.array(z.string()).default([]),
  publishedAt: z.string().datetime().optional().nullable(),
});

// Blog post form data (for frontend forms)
export const blogPostFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be less than 255 characters"),
  content: z
    .string()
    .min(1, "Content is required")
    .min(50, "Content must be at least 50 characters"),
  excerpt: z
    .string()
    .max(500, "Excerpt must be less than 500 characters")
    .optional(),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(255, "Slug must be less than 255 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase letters, numbers, and hyphens only"
    ),
  category: z.string().optional(),
  categoryId: z.string().nullable().optional(),
  featuredImage: z.string().url().optional().nullable(),
  status: z.enum(["draft", "published", "archived"]),
  tags: z.array(z.string()),
  publishedAt: z.string().datetime().optional().nullable(),
});

// Blog category schema
export const blogCategorySchema = z.object({
  name: z
    .string()
    .min(1, "Category name is required")
    .max(100, "Category name must be less than 100 characters"),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(100, "Slug must be less than 100 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase letters, numbers, and hyphens only"
    )
    .optional(),
});

// Blog tag schema
export const blogTagSchema = z.object({
  name: z
    .string()
    .min(1, "Tag name is required")
    .max(50, "Tag name must be less than 50 characters"),
});

// Blog query parameters schema
export const blogQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().nullable().optional(),
  category: z.string().nullable().optional(),
  tag: z.string().nullable().optional(),
  status: z.enum(["draft", "published", "archived"]).nullable().optional(),
  authorId: z.string().nullable().optional(),
  sortBy: z
    .enum(["createdAt", "updatedAt", "publishedAt", "title"])
    .default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

// Type exports
export type BlogPostFormData = z.infer<typeof blogPostFormSchema>;
export type BlogPostData = z.infer<typeof blogPostSchema>;
export type BlogCategoryData = z.infer<typeof blogCategorySchema>;
export type BlogTagData = z.infer<typeof blogTagSchema>;
export type BlogQueryParams = z.infer<typeof blogQuerySchema>;
