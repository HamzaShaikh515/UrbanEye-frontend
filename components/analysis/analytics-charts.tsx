"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"

export function AnalyticsCharts() {
  const detectionData = [
    { date: "Jan", detections: 45, accuracy: 96 },
    { date: "Feb", detections: 52, accuracy: 97 },
    { date: "Mar", detections: 78, accuracy: 98 },
    { date: "Apr", detections: 92, accuracy: 98.5 },
    { date: "May", detections: 145, accuracy: 98.2 },
    { date: "Jun", detections: 187, accuracy: 98.7 },
    { date: "Jul", detections: 234, accuracy: 98.9 },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Detection Trends</h3>
            <p className="text-sm text-muted-foreground">Monthly detections and accuracy metrics</p>
          </div>
        </div>
        <Badge variant="outline">7 months</Badge>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium mb-3 text-muted-foreground">Detections Over Time</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={detectionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="date" stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="detections" fill="var(--primary)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <p className="text-sm font-medium mb-3 text-muted-foreground">Detection Accuracy Trend</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={detectionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="date" stroke="var(--muted-foreground)" />
            <YAxis domain={[95, 100]} stroke="var(--muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
              formatter={(value) => `${value}%`}
            />
            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="var(--accent)"
              strokeWidth={2}
              dot={{ fill: "var(--accent)", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
