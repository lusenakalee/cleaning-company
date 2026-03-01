"use client";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { LayoutDashboard, CalendarDays, Users, FileText, DollarSign, Package } from "lucide-react";

const navItems = [
  { href: "/dashboard/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/admin/bookings", label: "Bookings", icon: CalendarDays },
  { href: "/dashboard/admin/users", label: "User Management", icon: Users },
  { href: "/dashboard/admin/content", label: "Content", icon: FileText },
  { href: "/dashboard/admin/finance", label: "Finance", icon: DollarSign },
  { href: "/dashboard/admin/inventory", label: "Inventory", icon: Package },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="admin" navItems={navItems}>
      {children}
    </DashboardShell>
  );
}
