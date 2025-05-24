import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-4 grid gap-4">
      <h1 className="text-2xl font-bold">Great Vision Investment Dashboard</h1>
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-4">
          <p>Total Investment: GHS 0.00</p>
          <p>Total Profit: GHS 0.00</p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        <Button>Add Investment</Button>
        <Button>Add Profit</Button>
        <Button variant="outline">View Reports</Button>
        <Button variant="outline">Settings</Button>
      </div>
    </main>
  );
}
