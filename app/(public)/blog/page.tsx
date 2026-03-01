"use client";

import { blogPosts } from "@/lib/mock-data";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const categories = ["All", "Home Cleaning Tips", "Office Hygiene", "Construction Cleaning", "Eco-Friendly Practices"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Cleaning Tips & Insights
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expert advice, industry insights, and cleaning guides from the Cleaning Co. team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-KE", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
