"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react"

export function TrendAnalysis() {
  const trends = [
    {
      period: "Last 7 days",
      detections: 145,
      trend: "+23%",
      direction: "up",
      color: "text-green-500",
    },
    {
      period: "Last 30 days",
      detections: 512,
      trend: "+45%",
      direction: "up",
      color: "text-green-500",
    },
    {
      period: "Last 90 days",
      detections: 1847,
      trend: "+67%",
      direction: "up",
      color: "text-green-500",
    },
    {
      period: "Last Year",
      detections: 5234,
      trend: "-12%",
      direction: "down",
      color: "text-orange-500",
    },
  ]

  return (
    <Card className="p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Trend Analysis</h3>
            <p className="text-sm text-muted-foreground">Period-over-period comparison</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 flex-1">
        {trends.map((item, index) => (
          <div
            key={item.period}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-background/50 transition-colors border border-transparent hover:border-border/50"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm">{item.period}</p>
                <Badge variant="secondary" className="text-xs">
                  {item.detections.toLocaleString()}
                </Badge>
              </div>
              <div className="w-full bg-background rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                  style={{ width: `${Math.min((index + 1) * 25, 100)}%` }}
                />
              </div>
            </div>
            <div className={`flex items-center gap-1 ml-4 font-semibold text-sm ${item.color}`}>
              {item.direction === "up" ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              {item.trend}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
