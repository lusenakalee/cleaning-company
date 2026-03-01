"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { clientBookings } from "@/lib/mock-data";
import { Plus, MapPin, Clock, Calendar } from "lucide-react";

export default function ClientBookingsPage() {
  const upcoming = clientBookings.filter((b) => b.status === "upcoming");
  const completed = clientBookings.filter((b) => b.status === "completed");

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Bookings</h1>
          <p className="text-sm text-muted-foreground mt-1">View all your past and upcoming bookings.</p>
        </div>
        <Button asChild>
          <Link href="/booking">
            <Plus className="mr-2 w-4 h-4" />
            Book New Service
          </Link>
        </Button>
      </div>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {upcoming.map((booking) => (
                <div key={booking.id} className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{booking.service}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{booking.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{booking.time}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{booking.address}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-foreground">KES {booking.price.toLocaleString()}</p>
                      <Badge className="mt-1">Upcoming</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Completed */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Completed ({completed.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {completed.map((booking) => (
              <div key={booking.id} className="p-4 rounded-lg border border-border">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{booking.service}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{booking.date}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{booking.address}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">KES {booking.price.toLocaleString()}</p>
                    <Badge variant="secondary" className="mt-1">Completed</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
