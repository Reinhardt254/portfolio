import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Portfolio",
  description:
    "Read our blog for insights, tutorials, and updates on web development, programming, and technology.",
  keywords: [
    "blog",
    "web development",
    "programming",
    "tutorials",
    "technology",
    "coding",
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
