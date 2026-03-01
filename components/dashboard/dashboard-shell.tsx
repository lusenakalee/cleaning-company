"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Home, Leaf, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

interface DashboardShellProps {
  children: React.ReactNode;
  role: string;
  navItems: NavItem[];
}

const roleColors: Record<string, string> = {
  admin: "bg-primary",
  manager: "bg-blue-600",
  cleaner: "bg-amber-600",
  client: "bg-indigo-600",
};

export function DashboardShell({ children, role, navItems }: DashboardShellProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 border-r border-border bg-card">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-bold text-foreground">Cleaning Co.</span>
          </Link>
        </div>
        <div className="px-4 py-3">
          <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-background", roleColors[role] || "bg-primary")}>
            {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
          </div>
        </div>
        <nav className="flex-1 px-3 py-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-0.5",
                  isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-3 py-4 border-t border-border">
          <RoleSwitcherDropdown currentRole={role} />
          <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors mt-1">
            <Home className="w-4 h-4" />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Mobile Header + Sidebar Overlay */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-card">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-bold text-foreground">Cleaning Co.</span>
          </Link>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-md text-foreground" aria-label="Toggle menu">
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-40 bg-foreground/50"
              onClick={() => setSidebarOpen(false)}
            >
              <motion.div
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="w-64 h-full bg-card border-r border-border overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-4 py-4">
                  <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-background", roleColors[role] || "bg-primary")}>
                    {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
                  </div>
                </div>
                <nav className="px-3 py-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-0.5",
                          isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="px-3 py-4 border-t border-border">
                  <RoleSwitcherDropdown currentRole={role} />
                  <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors mt-1" onClick={() => setSidebarOpen(false)}>
                    <Home className="w-4 h-4" />
                    Back to Website
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

// Role Switcher Dropdown
const roles = [
  { label: "Admin", href: "/dashboard/admin" },
  { label: "Manager", href: "/dashboard/manager" },
  { label: "Cleaner", href: "/dashboard/cleaner" },
  { label: "Client", href: "/dashboard/client" },
];

function RoleSwitcherDropdown({ currentRole }: { currentRole: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
      >
        <span>Switch Dashboard</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute bottom-full left-0 right-0 mb-1 bg-card border border-border rounded-lg shadow-lg p-1 z-50"
          >
            {roles.filter((r) => r.label.toLowerCase() !== currentRole).map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                {r.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
