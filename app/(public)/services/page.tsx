"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Home, Building2, HardHat, Truck, PartyPopper, CheckCircle2, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, HardHat, Truck, PartyPopper,
};

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We offer comprehensive cleaning solutions tailored to residential and commercial clients across Nairobi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Home;
              const isReversed = i % 2 === 1;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid grid-cols-1 gap-10 lg:grid-cols-2 items-center ${isReversed ? "lg:direction-rtl" : ""}`}
                >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-lg font-semibold text-primary">{service.price}</span>
                    </div>
                    <Button asChild>
                      <Link href="/booking">
                        Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={`bg-card rounded-xl border border-border p-8 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">What&apos;s Included</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Ideal For</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((item) => (
                          <span key={item} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Need a Custom Cleaning Solution?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Contact us for a tailored cleaning plan that fits your specific needs and budget.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
