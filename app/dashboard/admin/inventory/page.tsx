"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockInventory, type InventoryItem } from "@/lib/mock-data";
import { Plus, AlertTriangle, Package, Wrench } from "lucide-react";

export default function AdminInventoryPage() {
  const [inventory] = useState<InventoryItem[]>(mockInventory);

  const equipment = inventory.filter((i) => i.category === "equipment");
  const consumables = inventory.filter((i) => i.category === "consumable");
  const lowStock = inventory.filter((i) => i.status === "low-stock" || i.status === "out-of-stock");

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Inventory Management</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage equipment and consumables.</p>
        </div>
        <Button size="sm">
          <Plus className="mr-2 w-4 h-4" />
          Add Item
        </Button>
      </div>

      {/* Alerts */}
      {lowStock.length > 0 && (
        <Card className="mb-6 border-amber-200 bg-amber-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-amber-700">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-medium">{lowStock.length} item(s) need restocking</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {lowStock.map((item) => (
                <Badge key={item.id} variant="outline" className="text-amber-700 border-amber-300">
                  {item.name} ({item.status})
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="equipment">
        <TabsList>
          <TabsTrigger value="equipment" className="gap-1.5">
            <Wrench className="w-4 h-4" />
            Equipment ({equipment.length})
          </TabsTrigger>
          <TabsTrigger value="consumables" className="gap-1.5">
            <Package className="w-4 h-4" />
            Consumables ({consumables.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="equipment">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Item</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Qty</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Warranty Expiry</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Service Due</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipment.map((item) => (
                      <tr key={item.id} className="border-b border-border last:border-0">
                        <td className="py-3 px-4 font-medium text-foreground">{item.name}</td>
                        <td className="py-3 px-4 text-foreground">{item.quantity} {item.unit}</td>
                        <td className="py-3 px-4 text-muted-foreground">{item.warrantyExpiry || "-"}</td>
                        <td className="py-3 px-4 text-muted-foreground">{item.serviceDue || "-"}</td>
                        <td className="py-3 px-4">
                          <StockBadge status={item.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consumables">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Item</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Qty</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Unit</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {consumables.map((item) => (
                      <tr key={item.id} className="border-b border-border last:border-0">
                        <td className="py-3 px-4 font-medium text-foreground">{item.name}</td>
                        <td className="py-3 px-4 text-foreground">{item.quantity}</td>
                        <td className="py-3 px-4 text-muted-foreground">{item.unit}</td>
                        <td className="py-3 px-4">
                          <StockBadge status={item.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
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
