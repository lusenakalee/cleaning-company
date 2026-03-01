"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services, blogPosts } from "@/lib/mock-data";
import { Plus, Edit, Trash2, Calendar, Clock } from "lucide-react";

export default function AdminContentPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Content Management</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage services and blog posts.</p>
      </div>

      {/* Services */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Services</CardTitle>
            <Button size="sm">
              <Plus className="mr-2 w-4 h-4" />
              Add Service
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {services.map((service) => (
              <div key={service.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{service.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{service.shortDesc.slice(0, 80)}...</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{service.price}</Badge>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Edit className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
                    <Trash2 className="w-4 h-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Blog Posts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Blog Posts</CardTitle>
            <Button size="sm">
              <Plus className="mr-2 w-4 h-4" />
              New Post
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground truncate">{post.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Edit className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
                    <Trash2 className="w-4 h-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
