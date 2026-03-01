"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, CheckCircle2, Clock, Download } from "lucide-react";

const payments = [
  { id: "PAY-001", booking: "BK-001", service: "Residential Cleaning", amount: 5500, date: "2026-03-05", method: "M-Pesa", status: "pending" as const },
  { id: "PAY-002", booking: "BK-004", service: "Post Construction Cleaning", amount: 25000, date: "2026-02-20", method: "M-Pesa", status: "paid" as const },
  { id: "PAY-003", booking: "BK-008", service: "Residential Cleaning", amount: 8500, date: "2026-02-10", method: "Bank Transfer", status: "paid" as const },
];

const totalPaid = payments.filter((p) => p.status === "paid").reduce((sum, p) => sum + p.amount, 0);
const totalPending = payments.filter((p) => p.status === "pending").reduce((sum, p) => sum + p.amount, 0);

export default function ClientPaymentsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Payments</h1>
        <p className="text-sm text-muted-foreground mt-1">View your payment history and pending invoices.</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Paid</p>
              <p className="text-xl font-bold text-foreground">KES {totalPaid.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Pending</p>
              <p className="text-xl font-bold text-foreground">KES {totalPending.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Transactions</p>
              <p className="text-xl font-bold text-foreground">{payments.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Payment History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">ID</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Service</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Method</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Amount</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4 font-mono text-xs text-muted-foreground">{payment.id}</td>
                    <td className="py-3 px-4 font-medium text-foreground">{payment.service}</td>
                    <td className="py-3 px-4 text-muted-foreground">{payment.date}</td>
                    <td className="py-3 px-4 text-muted-foreground">{payment.method}</td>
                    <td className="py-3 px-4">
                      <Badge variant={payment.status === "paid" ? "default" : "secondary"}>
                        {payment.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-foreground">KES {payment.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pending Payment CTA */}
      {totalPending > 0 && (
        <Card className="mt-6 border-amber-200 bg-amber-50">
          <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-amber-800">You have a pending payment</p>
              <p className="text-xs text-amber-700 mt-0.5">KES {totalPending.toLocaleString()} due for your upcoming service.</p>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Pay Now via M-Pesa
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
