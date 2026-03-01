"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, DollarSign, Users, ClipboardList, TrendingUp } from "lucide-react";
import { mockBookings, mockCleaners, monthlyRevenue, serviceRevenue } from "@/lib/mock-data";
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";

const stats = [
  { label: "Total Bookings", value: "48", icon: CalendarDays, change: "+12%" },
  { label: "Revenue (Feb)", value: "KES 278,000", icon: DollarSign, change: "+13%" },
  { label: "Active Cleaners", value: String(mockCleaners.filter((c) => c.status === "active").length), icon: Users, change: "" },
  { label: "Pending Quotes", value: String(mockBookings.filter((b) => b.status === "pending").length), icon: ClipboardList, change: "" },
];

const COLORS = ["#4d7c0f", "#65a30d", "#84cc16", "#a3e635", "#d9f99d"];

export default function AdminOverview() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Overview of your business performance.</p>
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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                    {stat.change && (
                      <p className="flex items-center gap-1 text-xs text-primary mt-1">
                        <TrendingUp className="w-3 h-3" />
                        {stat.change} from last month
                      </p>
                    )}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={monthlyRevenue}>
                <XAxis dataKey="month" tickLine={false} axisLine={false} className="text-xs" />
                <YAxis tickLine={false} axisLine={false} className="text-xs" tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value: number) => [`KES ${value.toLocaleString()}`, "Revenue"]} />
                <Bar dataKey="revenue" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Revenue by Service</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={serviceRevenue}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="revenue"
                  nameKey="service"
                  label={({ service, percentage }) => `${service} ${percentage}%`}
                >
                  {serviceRevenue.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`KES ${value.toLocaleString()}`, "Revenue"]} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">ID</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Client</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Service</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Price</th>
                </tr>
              </thead>
              <tbody>
                {mockBookings.slice(0, 5).map((booking) => (
                  <tr key={booking.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-2 font-mono text-xs text-muted-foreground">{booking.id}</td>
                    <td className="py-3 px-2 font-medium text-foreground">{booking.clientName}</td>
                    <td className="py-3 px-2 text-muted-foreground">{booking.service}</td>
                    <td className="py-3 px-2 text-muted-foreground">{booking.date}</td>
                    <td className="py-3 px-2">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="py-3 px-2 text-right font-medium text-foreground">KES {booking.price.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
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
