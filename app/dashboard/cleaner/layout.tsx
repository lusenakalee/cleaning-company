"use client";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { LayoutDashboard, CalendarDays, Clock, Star } from "lucide-react";

const navItems = [
  { href: "/dashboard/cleaner", label: "My Jobs", icon: LayoutDashboard },
  { href: "/dashboard/cleaner/schedule", label: "Schedule", icon: CalendarDays },
  { href: "/dashboard/cleaner/history", label: "Job History", icon: Clock },
  { href: "/dashboard/cleaner/ratings", label: "My Ratings", icon: Star },
];

export default function CleanerLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="cleaner" navItems={navItems}>
      {children}
    </DashboardShell>
  );
}
