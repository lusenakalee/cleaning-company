"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin, Calendar } from "lucide-react";

const pastJobs = [
  { id: "BK-004", client: "Peter Kamau", service: "Post Construction Cleaning", address: "Kilimani, Nairobi", date: "2026-02-20", rating: 5 },
  { id: "BK-007", client: "Diana Chebet", service: "Commercial Cleaning", address: "Upper Hill, Nairobi", date: "2026-03-04", rating: 4 },
  { id: "BK-012", client: "Grace Otieno", service: "Event Cleaning", address: "Industrial Area, Nairobi", date: "2026-02-28", rating: 5 },
  { id: "BK-015", client: "Tom Odhiambo", service: "Residential Cleaning", address: "South B, Nairobi", date: "2026-02-15", rating: 5 },
  { id: "BK-018", client: "Ann Njeri", service: "Moving In/Out Cleaning", address: "Lavington, Nairobi", date: "2026-02-10", rating: 4 },
];

export default function CleanerHistoryPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Job History</h1>
        <p className="text-sm text-muted-foreground mt-1">Your completed jobs and client feedback.</p>
      </div>

      <div className="flex flex-col gap-3">
        {pastJobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{job.client}</p>
                    <p className="text-xs text-muted-foreground">{job.service}</p>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {job.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.address}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="default">Completed</Badge>
                  <div className="flex items-center gap-0.5 mt-1.5 justify-end">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${i < job.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
