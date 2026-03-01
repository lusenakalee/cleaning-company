"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockBookings, mockCleaners } from "@/lib/mock-data";
import { CheckCircle2, Star, ThumbsUp, AlertCircle } from "lucide-react";

const completedJobs = mockBookings.filter((b) => b.status === "completed");

const qualityChecks = [
  { id: "QC-001", booking: "BK-004", cleaner: "Mary Njeri", client: "Peter Kamau", score: 95, notes: "Excellent post-construction clean. All debris removed.", date: "2026-02-20", passed: true },
  { id: "QC-002", booking: "BK-007", cleaner: "Mary Njeri", client: "Diana Chebet", score: 88, notes: "Good office cleaning. Minor dust on window sills.", date: "2026-03-04", passed: true },
  { id: "QC-003", booking: "BK-008", cleaner: "John Kamau", client: "Kevin Maina", score: 92, notes: "Thorough residential cleaning with fumigation.", date: "2026-03-03", passed: true },
];

export default function ManagerQualityPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Quality Control</h1>
        <p className="text-sm text-muted-foreground mt-1">Inspect completed jobs and monitor service quality.</p>
      </div>

      {/* Quality Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">QC Pass Rate</p>
              <p className="text-xl font-bold text-foreground">100%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Avg Quality Score</p>
              <p className="text-xl font-bold text-foreground">91.7%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <ThumbsUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Client Satisfaction</p>
              <p className="text-xl font-bold text-foreground">4.8/5</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quality Inspections */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Quality Inspections</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {qualityChecks.map((qc) => (
              <div key={qc.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-border gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-muted-foreground">{qc.id}</span>
                    <Badge variant={qc.passed ? "default" : "destructive"}>
                      {qc.passed ? "Passed" : "Failed"}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-foreground">{qc.client} - Cleaned by {qc.cleaner}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{qc.notes}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{qc.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{qc.score}%</div>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cleaner Performance */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-base">Cleaner Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Cleaner</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Jobs Done</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Rating</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockCleaners.map((c) => (
                  <tr key={c.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-2 font-medium text-foreground">{c.name}</td>
                    <td className="py-3 px-2 text-foreground">{c.completedJobs}</td>
                    <td className="py-3 px-2">
                      <span className="flex items-center gap-1 text-foreground">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        {c.rating}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant={c.status === "active" ? "default" : "secondary"}>{c.status}</Badge>
                    </td>
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
