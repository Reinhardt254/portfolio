// Utility functions for blog operations

/**
 * Generate a URL-friendly slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Generate an excerpt from HTML content
 */
export function generateExcerpt(
  htmlContent: string,
  maxLength: number = 200
): string {
  // Strip HTML tags
  const textContent = htmlContent.replace(/<[^>]*>/g, "");

  // Trim and truncate
  const trimmed = textContent.trim();

  if (trimmed.length <= maxLength) {
    return trimmed;
  }

  // Find the last complete word within the limit
  const truncated = trimmed.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + "...";
  }

  return truncated + "...";
}

/**
 * Validate and ensure unique slug
 */
export function validateSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}

/**
 * Format blog status for display
 */
export function formatBlogStatus(status: string): string {
  switch (status) {
    case "draft":
      return "Draft";
    case "published":
      return "Published";
    case "archived":
      return "Archived";
    default:
      return status;
  }
}

/**
 * Get status color for UI
 */
export function getStatusColor(status: string): string {
  switch (status) {
    case "draft":
      return "text-yellow-600 bg-yellow-50";
    case "published":
      return "text-green-600 bg-green-50";
    case "archived":
      return "text-gray-600 bg-gray-50";
    default:
      return "text-gray-600 bg-gray-50";
  }
}

/**
 * Calculate reading time estimate
 */
export function calculateReadingTime(htmlContent: string): number {
  const textContent = htmlContent.replace(/<[^>]*>/g, "");
  const words = textContent.trim().split(/\s+/).length;
  const wordsPerMinute = 200; // Average reading speed
  return Math.ceil(words / wordsPerMinute);
}
