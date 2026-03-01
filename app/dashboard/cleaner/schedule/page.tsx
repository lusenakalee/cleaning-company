"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cleanerJobs } from "@/lib/mock-data";
import { Calendar, MapPin, Clock } from "lucide-react";

const weekDays = [
  { day: "Mon", date: "Mar 3", jobs: [] as typeof cleanerJobs },
  { day: "Tue", date: "Mar 4", jobs: [] as typeof cleanerJobs },
  { day: "Wed", date: "Mar 5", jobs: cleanerJobs.filter((j) => j.status === "today") },
  { day: "Thu", date: "Mar 6", jobs: cleanerJobs.filter((j) => j.status === "upcoming") },
  { day: "Fri", date: "Mar 7", jobs: [] as typeof cleanerJobs },
];

export default function CleanerSchedulePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">My Schedule</h1>
        <p className="text-sm text-muted-foreground mt-1">Week of March 3 - March 7, 2026</p>
      </div>

      <div className="flex flex-col gap-4">
        {weekDays.map((wd) => (
          <Card key={wd.day} className={wd.jobs.length > 0 ? "border-primary/20" : ""}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                {wd.day}, {wd.date}
                {wd.jobs.length > 0 && (
                  <Badge className="ml-2">{wd.jobs.length} job{wd.jobs.length > 1 ? "s" : ""}</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {wd.jobs.length === 0 ? (
                <p className="text-sm text-muted-foreground py-2">No jobs scheduled.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {wd.jobs.map((job) => (
                    <div key={job.id} className="flex items-start gap-4 p-3 rounded-lg bg-accent/50">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{job.client}</p>
                        <p className="text-xs text-muted-foreground">{job.service}</p>
                        <div className="flex items-center gap-4 mt-1.5 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {job.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
