"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { mockCleaners, type Cleaner } from "@/lib/mock-data";
import { Star, Plus, Search } from "lucide-react";

const mockManagers = [
  { id: "MG-001", name: "David Ochieng", email: "david@clover.co.ke", phone: "+254712000111", status: "active" as const },
  { id: "MG-002", name: "Lucy Wambui", email: "lucy@clover.co.ke", phone: "+254723000222", status: "active" as const },
];

export default function AdminUsersPage() {
  const [cleaners] = useState<Cleaner[]>(mockCleaners);
  const [search, setSearch] = useState("");

  const filteredCleaners = cleaners.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">User Management</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage managers and cleaners.</p>
        </div>
        <Button size="sm">
          <Plus className="mr-2 w-4 h-4" />
          Add User
        </Button>
      </div>

      {/* Managers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-base">Managers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">ID</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Email</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Phone</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockManagers.map((m) => (
                  <tr key={m.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-2 font-mono text-xs text-muted-foreground">{m.id}</td>
                    <td className="py-3 px-2 font-medium text-foreground">{m.name}</td>
                    <td className="py-3 px-2 text-muted-foreground">{m.email}</td>
                    <td className="py-3 px-2 text-muted-foreground">{m.phone}</td>
                    <td className="py-3 px-2">
                      <Badge variant="default">Active</Badge>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <Button size="sm" variant="ghost" className="text-xs h-7">Edit</Button>
                      <Button size="sm" variant="ghost" className="text-xs h-7 text-destructive">Suspend</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Cleaners */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <CardTitle className="text-base">Cleaners</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search cleaners..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9 text-sm" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">ID</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Email</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Jobs</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Rating</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Salary</th>
                </tr>
              </thead>
              <tbody>
                {filteredCleaners.map((c) => (
                  <tr key={c.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-2 font-mono text-xs text-muted-foreground">{c.id}</td>
                    <td className="py-3 px-2 font-medium text-foreground">{c.name}</td>
                    <td className="py-3 px-2 text-muted-foreground">{c.email}</td>
                    <td className="py-3 px-2">
                      <Badge variant={c.status === "active" ? "default" : c.status === "on-leave" ? "secondary" : "destructive"}>
                        {c.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-foreground">{c.completedJobs}</td>
                    <td className="py-3 px-2">
                      <span className="flex items-center gap-1 text-foreground">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        {c.rating}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right font-medium text-foreground">KES {c.salary.toLocaleString()}</td>
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
