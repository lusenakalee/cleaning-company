"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockCleaners, monthlyRevenue, serviceRevenue } from "@/lib/mock-data";
import { Download, DollarSign, TrendingUp, Users } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const totalRevenue = monthlyRevenue.reduce((sum, m) => sum + m.revenue, 0);
const totalSalaries = mockCleaners.reduce((sum, c) => sum + c.salary, 0);

export default function AdminFinancePage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Financial Reports</h1>
          <p className="text-sm text-muted-foreground mt-1">Revenue, salaries, and financial overview.</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="mr-2 w-4 h-4" />
          Export CSV
        </Button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">6-Month Revenue</p>
                <p className="text-xl font-bold text-foreground">KES {totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Monthly Salaries</p>
                <p className="text-xl font-bold text-foreground">KES {totalSalaries.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Net Profit (Est.)</p>
                <p className="text-xl font-bold text-foreground">KES {(totalRevenue - totalSalaries * 6).toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-base">Monthly Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyRevenue}>
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
              <Tooltip formatter={(value: number) => [`KES ${value.toLocaleString()}`, "Revenue"]} />
              <Bar dataKey="revenue" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Service Breakdown */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-base">Revenue by Service</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {serviceRevenue.map((s) => (
              <div key={s.service} className="flex items-center gap-4">
                <span className="text-sm text-foreground w-32 shrink-0">{s.service}</span>
                <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${s.percentage}%` }} />
                </div>
                <span className="text-sm font-medium text-foreground w-28 text-right">KES {s.revenue.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground w-10 text-right">{s.percentage}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Salary Management */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Salary Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Cleaner</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Jobs Done</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Monthly Salary</th>
                </tr>
              </thead>
              <tbody>
                {mockCleaners.map((c) => (
                  <tr key={c.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-2 font-medium text-foreground">{c.name}</td>
                    <td className="py-3 px-2">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${c.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-foreground">{c.completedJobs}</td>
                    <td className="py-3 px-2 text-right font-bold text-foreground">KES {c.salary.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="bg-accent/50">
                  <td colSpan={3} className="py-3 px-2 font-semibold text-foreground">Total Monthly Payroll</td>
                  <td className="py-3 px-2 text-right font-bold text-primary">KES {totalSalaries.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
