"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { mockBookings, mockCleaners, type BookingStatus } from "@/lib/mock-data";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState(mockBookings);
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  const updateStatus = (id: string, status: BookingStatus) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  };

  const assignCleaner = (id: string, cleaner: string) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, assignedCleaner: cleaner } : b)));
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Booking Management</h1>
          <p className="text-sm text-muted-foreground mt-1">View and manage all bookings.</p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((booking) => (
          <Card key={booking.id}>
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">{booking.id}</span>
                  {booking.clientName}
                </CardTitle>
                <StatusBadge status={booking.status} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-4">
                <div>
                  <span className="text-muted-foreground block text-xs">Service</span>
                  <span className="text-foreground font-medium">{booking.service}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs">Date</span>
                  <span className="text-foreground font-medium">{booking.date} at {booking.time}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs">Location</span>
                  <span className="text-foreground font-medium">{booking.address}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs">Price</span>
                  <span className="text-foreground font-bold">KES {booking.price.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Assign Cleaner:</span>
                  <Select value={booking.assignedCleaner || ""} onValueChange={(v) => assignCleaner(booking.id, v)}>
                    <SelectTrigger className="w-40 h-8 text-xs">
                      <SelectValue placeholder="Unassigned" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockCleaners.filter((c) => c.status === "active").map((c) => (
                        <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2 sm:ml-auto">
                  {booking.status !== "completed" && booking.status !== "cancelled" && (
                    <>
                      {booking.status === "pending" && (
                        <Button size="sm" variant="outline" onClick={() => updateStatus(booking.id, "confirmed")} className="text-xs h-8">
                          Confirm
                        </Button>
                      )}
                      {booking.status === "confirmed" && (
                        <Button size="sm" variant="outline" onClick={() => updateStatus(booking.id, "in-progress")} className="text-xs h-8">
                          Start
                        </Button>
                      )}
                      {booking.status === "in-progress" && (
                        <Button size="sm" onClick={() => updateStatus(booking.id, "completed")} className="text-xs h-8">
                          Complete
                        </Button>
                      )}
                      <Button size="sm" variant="destructive" onClick={() => updateStatus(booking.id, "cancelled")} className="text-xs h-8">
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const variant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
    pending: "secondary",
    confirmed: "outline",
    "in-progress": "default",
    completed: "default",
    cancelled: "destructive",
  };

  return <Badge variant={variant[status] || "secondary"}>{status}</Badge>;
}
