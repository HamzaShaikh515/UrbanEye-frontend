"use client"

import { Card } from "@/components/ui/card"
import { Globe, AlertTriangle, CheckCircle, Zap } from "lucide-react"

export function ResultsMetrics() {
  const metrics = [
    {
      label: "Total Area Analyzed",
      value: "2,450 km²",
      icon: Globe,
      color: "text-blue-500",
    },
    {
      label: "Encroachments Detected",
      value: "347",
      icon: AlertTriangle,
      color: "text-orange-500",
    },
    {
      label: "Confidence Level",
      value: "98.2%",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      label: "Analysis Speed",
      value: "2.4s",
      icon: Zap,
      color: "text-primary",
    },
  ]

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Analysis Metrics</h3>
        <p className="text-sm text-muted-foreground">Summary of detection results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.label} className="p-6 hover:border-primary/50 transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors ${metric.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
              <p className="text-3xl font-bold text-primary">{metric.value}</p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
