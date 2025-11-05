"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { BeforeAfterComparison } from "@/components/results/before-after-comparison"
import { ResultsMetrics } from "@/components/results/results-metrics"
import { MapView3D } from "@/components/results/map-view-3d"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResultsPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Detection Results</h1>
            <p className="text-lg text-muted-foreground">
              Analysis of detected encroachments with before/after imagery and 3D visualization
            </p>
          </div>
          <Button asChild className="gap-2">
            <Link href="/tickets">
              Create Ticket
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-96">
          <BeforeAfterComparison />
          <MapView3D />
        </div>

        <ResultsMetrics />
      </div>
    </DashboardLayout>
  )
}
