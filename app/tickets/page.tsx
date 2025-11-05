"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { TicketBoard } from "@/components/tickets/ticket-board"
import { TicketStats } from "@/components/tickets/ticket-stats"
import { Plus, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TicketsPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Ticket className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold">Enforcement Tickets</h1>
            </div>
            <p className="text-lg text-muted-foreground">Kanban-style ticket management for encroachment enforcement</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Ticket
          </Button>
        </div>

        {/* Stats section */}
        <TicketStats />

        {/* Kanban board section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Workflow Pipeline</h2>
          <TicketBoard />
        </div>
      </div>
    </DashboardLayout>
  )
}
