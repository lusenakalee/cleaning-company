"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react"
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/cleaning.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 py-20 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Trusted by 500+ homes and businesses in Nairobi
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl max-w-4xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Professional Cleaning Services in Nairobi{" "}
            <span className="text-primary" style={{ color: "oklch(0.72 0.19 142.5)" }}>
              You Can Trust
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed"
          >
            Residential &bull; Commercial &bull; Post-Construction &bull; Event &bull; Moving Cleaning
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="text-base px-8 h-12">
              <Link href="/booking">
                Book Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-base px-8 h-12 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link href="/booking">Get Instant Quote</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            {[
              { label: "Happy Clients", value: "500+" },
              { label: "Jobs Completed", value: "2,000+" },
              { label: "Years Experience", value: "7+" },
              { label: "Active Cleaners", value: "25+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white lg:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
