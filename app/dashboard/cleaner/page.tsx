"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cleanerJobs } from "@/lib/mock-data";
import { MapPin, Phone, Clock, CheckCircle2, Navigation } from "lucide-react";

const todayJobs = cleanerJobs.filter((j) => j.status === "today");
const upcomingJobs = cleanerJobs.filter((j) => j.status === "upcoming");

export default function CleanerOverview() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">My Jobs</h1>
        <p className="text-sm text-muted-foreground mt-1">{"Welcome back, Mary. Here's your schedule for today."}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">{todayJobs.length}</p>
            <p className="text-xs text-muted-foreground mt-1">{"Today's Jobs"}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{upcomingJobs.length}</p>
            <p className="text-xs text-muted-foreground mt-1">Upcoming</p>
          </CardContent>
        </Card>
        <Card className="col-span-2 sm:col-span-1">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">156</p>
            <p className="text-xs text-muted-foreground mt-1">Total Completed</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Jobs */}
      <h2 className="text-lg font-semibold text-foreground mb-4">{"Today's Jobs"}</h2>
      <div className="flex flex-col gap-4 mb-8">
        {todayJobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary/10 text-primary border-0">Today</Badge>
                      <span className="font-mono text-xs text-muted-foreground">{job.id}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{job.client}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{job.service}</p>

                    <div className="flex flex-col gap-1.5 mt-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{job.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{job.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{job.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button size="sm" className="gap-1.5">
                      <Navigation className="w-3.5 h-3.5" />
                      Navigate
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Complete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Jobs */}
      <h2 className="text-lg font-semibold text-foreground mb-4">Upcoming Jobs</h2>
      <div className="flex flex-col gap-3">
        {upcomingJobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{job.client} - {job.service}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{job.date} at {job.time} - {job.address}</p>
                </div>
                <Badge variant="outline">Upcoming</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
