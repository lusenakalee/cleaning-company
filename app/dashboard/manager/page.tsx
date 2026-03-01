"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import { mockBookings, mockCleaners, mockInventory } from "@/lib/mock-data";

const todayBookings = mockBookings.filter((b) => b.status === "confirmed" || b.status === "in-progress");
const activeCleaners = mockCleaners.filter((c) => c.status === "active");
const lowStockItems = mockInventory.filter((i) => i.status === "low-stock" || i.status === "out-of-stock");

const stats = [
  { label: "Today's Jobs", value: String(todayBookings.length), icon: CalendarDays, color: "text-blue-600 bg-blue-100" },
  { label: "Active Cleaners", value: String(activeCleaners.length), icon: Users, color: "text-primary bg-primary/10" },
  { label: "Completed This Month", value: String(mockBookings.filter((b) => b.status === "completed").length), icon: CheckCircle2, color: "text-emerald-600 bg-emerald-100" },
  { label: "Low Stock Alerts", value: String(lowStockItems.length), icon: AlertTriangle, color: "text-amber-600 bg-amber-100" },
];

export default function ManagerOverview() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Manager Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Oversee daily operations and cleaner assignments.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Today's Schedule */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              {"Today's Assignments"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {todayBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{booking.clientName}</p>
                    <p className="text-xs text-muted-foreground">{booking.service} - {booking.address}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{booking.time}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 ml-4">
                    <StatusBadge status={booking.status} />
                    <span className="text-xs text-muted-foreground">
                      {booking.assignedCleaner || "Unassigned"}
                    </span>
                  </div>
                </div>
              ))}
              {todayBookings.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-6">No jobs scheduled for today.</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              Cleaner Availability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {mockCleaners.map((cleaner) => (
                <div key={cleaner.id} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                      {cleaner.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{cleaner.name}</p>
                      <p className="text-xs text-muted-foreground">{cleaner.completedJobs} jobs completed</p>
                    </div>
                  </div>
                  <Badge variant={cleaner.status === "active" ? "default" : "secondary"}>
                    {cleaner.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: "bg-amber-100 text-amber-700",
    confirmed: "bg-blue-100 text-blue-700",
    "in-progress": "bg-primary/10 text-primary",
    completed: "bg-emerald-100 text-emerald-700",
    cancelled: "bg-red-100 text-red-700",
  };
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-secondary text-secondary-foreground"}`}>
      {status}
    </span>
  );
}
