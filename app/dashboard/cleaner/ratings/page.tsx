"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp, Award, ThumbsUp } from "lucide-react";

const reviews = [
  { id: 1, client: "Sarah Wanjiku", rating: 5, comment: "Fantastic job! My house has never been this clean.", date: "2026-02-28" },
  { id: 2, client: "Peter Kamau", rating: 5, comment: "Post-construction mess completely handled. Very impressed.", date: "2026-02-20" },
  { id: 3, client: "Diana Chebet", rating: 4, comment: "Good work overall. Minor spots missed on windows.", date: "2026-03-04" },
  { id: 4, client: "Kevin Maina", rating: 5, comment: "Thorough and professional. Would recommend.", date: "2026-03-03" },
  { id: 5, client: "Grace Otieno", rating: 5, comment: "Event venue was spotless after cleanup!", date: "2026-02-28" },
];

export default function CleanerRatingsPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">My Ratings & Reviews</h1>
        <p className="text-sm text-muted-foreground mt-1">See what clients say about your work.</p>
      </div>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-primary fill-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Average Rating</p>
              <p className="text-2xl font-bold text-foreground">{avgRating}/5.0</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Reviews</p>
              <p className="text-2xl font-bold text-foreground">{reviews.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">5-Star Reviews</p>
              <p className="text-2xl font-bold text-foreground">{reviews.filter((r) => r.rating === 5).length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reviews */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Client Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                      {review.client.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{review.client}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
