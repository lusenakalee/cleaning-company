"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("en-KE", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8 text-balance">
            {post.title}
          </h1>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </motion.div>
      </div>
    </article>
  );
}
