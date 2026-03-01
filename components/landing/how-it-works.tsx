"use client";

import { motion } from "motion/react"
import { CalendarCheck, MessageSquare, SprayCan, Smile } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book Online", desc: "Select your service, date, and time through our easy booking form." },
  { icon: MessageSquare, title: "Confirm Schedule", desc: "We confirm your booking and assign a trained cleaning professional." },
  { icon: SprayCan, title: "We Clean", desc: "Our team arrives on time with professional equipment and eco-friendly products." },
  { icon: Smile, title: "You Relax", desc: "Enjoy your spotless space. Leave a review and book again with ease." },
];

export function HowItWorks() {
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
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Getting your space cleaned is as easy as 1-2-3-4.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>

              {/* Connector line (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
