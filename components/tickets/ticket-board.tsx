"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, User, ArrowRight } from "lucide-react"
import { useState } from "react"

export function TicketBoard() {
  const [tickets, setTickets] = useState({
    new: [
      { id: 1001, location: "Zone A-5", area: "0.8 km²", priority: "High", date: "2024-01-15" },
      { id: 1002, location: "Zone B-3", area: "1.2 km²", priority: "Critical", date: "2024-01-14" },
      { id: 1003, location: "Zone C-2", area: "0.5 km²", priority: "Medium", date: "2024-01-13" },
    ],
    progress: [
      { id: 1004, location: "Zone D-1", area: "0.9 km²", priority: "High", date: "2024-01-12", assignee: "Sarah M." },
      { id: 1005, location: "Zone E-4", area: "1.1 km²", priority: "Medium", date: "2024-01-11", assignee: "John L." },
    ],
    review: [
      { id: 1006, location: "Zone F-2", area: "0.7 km²", priority: "Low", date: "2024-01-10", assignee: "Mike P." },
      { id: 1007, location: "Zone G-3", area: "0.6 km²", priority: "Medium", date: "2024-01-09", assignee: "Lisa K." },
    ],
    resolved: [
      { id: 1008, location: "Zone H-1", area: "0.4 km²", priority: "High", date: "2024-01-08", assignee: "Tom R." },
      { id: 1009, location: "Zone I-5", area: "0.8 km²", priority: "Medium", date: "2024-01-07", assignee: "Emma S." },
    ],
  })

  const columns = [
    { key: "new", label: "New", color: "bg-blue-500/10", borderColor: "border-blue-500/30" },
    { key: "progress", label: "In Progress", color: "bg-yellow-500/10", borderColor: "border-yellow-500/30" },
    { key: "review", label: "Review", color: "bg-purple-500/10", borderColor: "border-purple-500/30" },
    { key: "resolved", label: "Resolved", color: "bg-green-500/10", borderColor: "border-green-500/30" },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-500/20 text-red-700"
      case "High":
        return "bg-orange-500/20 text-orange-700"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-700"
      case "Low":
        return "bg-green-500/20 text-green-700"
      default:
        return "bg-gray-500/20 text-gray-700"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {columns.map((column) => (
        <div
          key={column.key}
          className={`${column.color} rounded-lg border-2 ${column.borderColor} p-4 bg-gradient-to-b from-card/80 to-card/40`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">{column.label}</h3>
            <Badge variant="secondary" className="text-xs">
              {tickets[column.key as keyof typeof tickets].length}
            </Badge>
          </div>

          <div className="space-y-3">
            {tickets[column.key as keyof typeof tickets].map((ticket: any) => (
              <Card
                key={ticket.id}
                className="p-4 cursor-move hover:shadow-md hover:border-primary/50 transition-all group"
              >
                {/* Ticket header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-primary">#{ticket.id}</p>
                    <p className="text-xs text-muted-foreground">{ticket.location}</p>
                  </div>
                  <Badge className={`text-xs ${getPriorityColor(ticket.priority)}`}>{ticket.priority}</Badge>
                </div>

                {/* Ticket details */}
                <div className="space-y-2 mb-3 pb-3 border-b border-border/50">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    Area: {ticket.area}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {ticket.date}
                  </div>
                  {ticket.assignee && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {ticket.assignee}
                    </div>
                  )}
                </div>

                {/* Action button */}
                <Button
                  size="sm"
                  variant="ghost"
                  className="w-full justify-center gap-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View Details
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
