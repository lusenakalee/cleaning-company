"use client";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { CalendarDays, ClipboardCheck, LayoutDashboard, Package, Users } from "lucide-react";

const navItems = [
  { href: "/dashboard/manager", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/manager/bookings", label: "Bookings", icon: CalendarDays },
  { href: "/dashboard/manager/cleaners", label: "Cleaners", icon: Users },
  { href: "/dashboard/manager/quality", label: "Quality Control", icon: ClipboardCheck },
  { href: "/dashboard/manager/inventory", label: "Inventory", icon: Package },
];

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="manager" navItems={navItems}>
      {children}
    </DashboardShell>
  );
}
