"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockBookings, mockCleaners, type BookingStatus } from "@/lib/mock-data";
import { MapPin, Phone, Calendar } from "lucide-react";

export default function ManagerBookingsPage() {
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
          <h1 className="text-2xl font-bold text-foreground">Manage Bookings</h1>
          <p className="text-sm text-muted-foreground mt-1">Assign cleaners and update booking statuses.</p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Bookings</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{booking.date} at {booking.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{booking.address}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{booking.clientPhone}</span>
                </div>
              </div>
              <p className="text-sm text-foreground font-medium mb-4">{booking.service} - {booking.size}</p>

              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Assign:</span>
                  <Select value={booking.assignedCleaner || ""} onValueChange={(v) => assignCleaner(booking.id, v)}>
                    <SelectTrigger className="w-40 h-8 text-xs">
                      <SelectValue placeholder="Select cleaner" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockCleaners.filter((c) => c.status === "active").map((c) => (
                        <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2 sm:ml-auto">
                  {booking.status === "pending" && (
                    <Button size="sm" onClick={() => updateStatus(booking.id, "confirmed")} className="text-xs h-8">
                      Confirm
                    </Button>
                  )}
                  {booking.status === "confirmed" && (
                    <Button size="sm" onClick={() => updateStatus(booking.id, "in-progress")} className="text-xs h-8">
                      Start Job
                    </Button>
                  )}
                  {booking.status === "in-progress" && (
                    <Button size="sm" onClick={() => updateStatus(booking.id, "completed")} className="text-xs h-8">
                      Mark Complete
                    </Button>
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
