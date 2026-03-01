"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockCleaners } from "@/lib/mock-data";
import { Star, Phone, Mail } from "lucide-react";

export default function ManagerCleanersPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Cleaner Management</h1>
        <p className="text-sm text-muted-foreground mt-1">View cleaner profiles, status, and performance.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockCleaners.map((cleaner) => (
          <Card key={cleaner.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                  {cleaner.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{cleaner.name}</h3>
                  <Badge variant={cleaner.status === "active" ? "default" : cleaner.status === "on-leave" ? "secondary" : "destructive"} className="mt-1">
                    {cleaner.status}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{cleaner.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{cleaner.email}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Jobs Done</p>
                  <p className="text-lg font-bold text-foreground">{cleaner.completedJobs}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <p className="flex items-center gap-1 text-lg font-bold text-foreground">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    {cleaner.rating}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
