import { blogPosts } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { BlogPostContent } from "./blog-post-content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <BlogPostContent post={post} />;
}
