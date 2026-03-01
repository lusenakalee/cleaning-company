"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { clientBookings } from "@/lib/mock-data";
import { Calendar, MapPin, DollarSign } from "lucide-react";

const totalSpent = clientBookings.reduce((sum, b) => sum + b.price, 0);

export default function ClientHistoryPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Service History</h1>
        <p className="text-sm text-muted-foreground mt-1">A complete record of all your cleaning services.</p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total Amount Spent</p>
            <p className="text-xl font-bold text-foreground">KES {totalSpent.toLocaleString()}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">All Services ({clientBookings.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Service</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Location</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Amount</th>
                </tr>
              </thead>
              <tbody>
                {clientBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4 font-medium text-foreground">{booking.service}</td>
                    <td className="py-3 px-4 text-muted-foreground">{booking.date}</td>
                    <td className="py-3 px-4 text-muted-foreground">{booking.address}</td>
                    <td className="py-3 px-4">
                      <Badge variant={booking.status === "upcoming" ? "default" : "secondary"}>
                        {booking.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-foreground">KES {booking.price.toLocaleString()}</td>
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
