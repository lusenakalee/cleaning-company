"use client";

import { testimonials } from "@/lib/mock-data";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from homeowners and businesses who trust Cleaning Co..
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative p-6 rounded-xl border border-border bg-card"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                {`"${t.content}"`}
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 ${idx < t.rating ? "fill-primary text-primary" : "text-border"}`}
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
