"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Leaf, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    href: "/services",
    children: [
      { href: "/services#residential", label: "Residential Cleaning" },
      { href: "/services#commercial", label: "Commercial Cleaning" },
      { href: "/services#post-construction", label: "Post Construction" },
      { href: "/services#moving", label: "Moving In/Out" },
      { href: "/services#events", label: "Event Cleaning" },
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Cleaning Co.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-colors"
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg border border-border shadow-lg p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent rounded-md transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <RoleSwitcher />
          <Button asChild>
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    <div className="ml-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary rounded-md"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-2 pt-2 border-t border-border">
                <RoleSwitcher />
              </div>
              <Button asChild className="mt-2">
                <Link href="/booking" onClick={() => setMobileOpen(false)}>Book Now</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ===================== ROLE SWITCHER =====================
const roles = [
  { label: "Admin", href: "/dashboard/admin" },
  { label: "Manager", href: "/dashboard/manager" },
  { label: "Cleaner", href: "/dashboard/cleaner" },
  { label: "Client", href: "/dashboard/client" },
];

function RoleSwitcher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(!open)}
        className="text-xs gap-1"
      >
        Dashboards
        <ChevronDown className="w-3 h-3" />
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 top-full mt-1 w-40 bg-card border border-border rounded-lg shadow-lg p-1 z-50"
          >
            {roles.map((role) => (
              <Link
                key={role.href}
                href={role.href}
                className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                {role.label} Dashboard
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
