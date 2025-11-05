"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AnalyticsCharts } from "@/components/analysis/analytics-charts"
import { HeatmapView } from "@/components/analysis/heatmap-view"
import { TrendAnalysis } from "@/components/analysis/trend-analysis"
import { BarChart3, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AnalysisPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
            </div>
            <p className="text-lg text-muted-foreground">Comprehensive data analysis and trend visualization</p>
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>

        {/* Charts section */}
        <AnalyticsCharts />

        {/* Heatmap and trends section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HeatmapView />
          <TrendAnalysis />
        </div>
      </div>
    </DashboardLayout>
  )
}
