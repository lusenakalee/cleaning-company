"use client";

import { BadgeDollarSign, Clock, Leaf, ShieldCheck, ThumbsUp } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  { icon: ShieldCheck, title: "Trained & Vetted Cleaners", desc: "Every cleaner is background-checked and professionally trained." },
  { icon: Leaf, title: "Eco-Friendly Products", desc: "We use biodegradable, non-toxic cleaning products that are safe for your family." },
  { icon: Clock, title: "Same-Day Service Available", desc: "Need cleaning urgently? We offer same-day service across Nairobi." },
  { icon: BadgeDollarSign, title: "Affordable Transparent Pricing", desc: "No hidden fees. Get an instant quote before you book." },
  { icon: ThumbsUp, title: "100% Satisfaction Guarantee", desc: "Not satisfied? We'll re-clean at no extra cost." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Choose Cleaning Co.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We go above and beyond to deliver cleaning services that exceed your expectations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
