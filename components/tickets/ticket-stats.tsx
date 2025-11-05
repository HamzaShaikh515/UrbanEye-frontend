"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, Clock, CheckCircle, AlertTriangle } from "lucide-react"

export function TicketStats() {
  const stats = [
    {
      label: "New Tickets",
      value: 24,
      icon: AlertCircle,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "In Progress",
      value: 12,
      icon: Clock,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      label: "Resolved",
      value: 145,
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      label: "Escalated",
      value: 5,
      icon: AlertTriangle,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </Card>
        )
      })}
    </div>
  )
}
