"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Ready for a Spotless Space?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl leading-relaxed">
            Book your cleaning today and experience the Cleaning Co. difference. Professional results, every time.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-background text-foreground hover:bg-background/90 text-base px-8"
          >
            <Link href="/booking">
              Book Your Cleaning Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
