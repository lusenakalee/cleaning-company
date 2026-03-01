"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockInventory, type InventoryItem } from "@/lib/mock-data";
import { AlertTriangle, Package, CheckCircle2 } from "lucide-react";

export default function ManagerInventoryPage() {
  const [inventory] = useState<InventoryItem[]>(mockInventory);

  const lowStock = inventory.filter((i) => i.status === "low-stock" || i.status === "out-of-stock");
  const inStock = inventory.filter((i) => i.status === "in-stock");

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Inventory Overview</h1>
        <p className="text-sm text-muted-foreground mt-1">Track supplies and request restocking.</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Items</p>
              <p className="text-xl font-bold text-foreground">{inventory.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">In Stock</p>
              <p className="text-xl font-bold text-foreground">{inStock.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Needs Restocking</p>
              <p className="text-xl font-bold text-foreground">{lowStock.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">All Items</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Item</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Qty</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4 font-medium text-foreground">{item.name}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">{item.category}</Badge>
                    </td>
                    <td className="py-3 px-4 text-foreground">{item.quantity} {item.unit}</td>
                    <td className="py-3 px-4">
                      <StockBadge status={item.status} />
                    </td>
                    <td className="py-3 px-4 text-right">
                      {(item.status === "low-stock" || item.status === "out-of-stock") && (
                        <Button size="sm" variant="outline" className="text-xs h-7">
                          Request Restock
                        </Button>
                      )}
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

function StockBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "in-stock": "bg-emerald-100 text-emerald-700",
    "low-stock": "bg-amber-100 text-amber-700",
    "out-of-stock": "bg-red-100 text-red-700",
  };
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-secondary text-secondary-foreground"}`}>
      {status}
    </span>
  );
}
