"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Activity } from "lucide-react"

interface LivePreviewProps {
  result?: {
    classification?: string
    severity?: string
    confidence?: number
    reason?: string
    statistics?: {
      change_percentage?: number
      building_density_per_km2?: number
      area_km2?: number
    }
    date_range?: { start: string; end: string }
    image_url?: string
    report_url?: string
  } | null
}

export function LivePreview({ result }: LivePreviewProps) {
  if (!result) {
    return (
      <Card className="p-6 flex flex-col items-center justify-center text-center text-sm text-muted-foreground">
        <AlertCircle className="w-6 h-6 mb-2 text-primary/70" />
        No recent detections. Run analysis to view live results.
      </Card>
    )
  }

  const severityColors: Record<string, string> = {
    HIGH: "bg-red-500/20 text-red-700 border-red-500/40",
    MEDIUM: "bg-orange-500/20 text-orange-700 border-orange-500/40",
    LOW: "bg-green-500/20 text-green-700 border-green-500/40",
  }

  return (
    <Card className="p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <AlertCircle className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-semibold text-sm">Recent Detection Summary</h4>
        </div>
        <Badge className="gap-1" variant="outline">
          <Activity className="w-2 h-2 animate-pulse" />
          Live
        </Badge>
      </div>

      <div className="space-y-4">
        <div
          className={`p-3 rounded-lg border text-sm ${severityColors[result.severity || "LOW"] || ""}`}
        >
          <div className="flex items-start justify-between mb-1">
            <div className="font-medium">{result.classification}</div>
            <Badge
              variant="outline"
              className={`text-xs font-semibold ${
                result.severity === "HIGH"
                  ? "text-red-600 border-red-500"
                  : result.severity === "MEDIUM"
                  ? "text-orange-600 border-orange-500"
                  : "text-green-600 border-green-500"
              }`}
            >
              {result.severity}
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground">
            Confidence: <span className="font-semibold text-primary">{(result.confidence || 0) * 100}%</span>
          </div>
          <p className="text-xs mt-2 text-muted-foreground leading-snug">{result.reason}</p>
        </div>

        {result.statistics && (
          <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
            <div className="p-2 rounded-lg bg-background/50 border border-border/40">
              <div>Change Area</div>
              <div className="font-semibold text-primary">
                {result.statistics.change_percentage?.toFixed(2)}%
              </div>
            </div>
            <div className="p-2 rounded-lg bg-background/50 border border-border/40">
              <div>Building Density</div>
              <div className="font-semibold text-primary">
                {result.statistics.building_density_per_km2?.toFixed(1)} /km²
              </div>
            </div>
            <div className="p-2 rounded-lg bg-background/50 border border-border/40">
              <div>Area</div>
              <div className="font-semibold text-primary">
                {result.statistics.area_km2?.toFixed(2)} km²
              </div>
            </div>
            {result.date_range && (
              <div className="p-2 rounded-lg bg-background/50 border border-border/40 col-span-2">
                <div>Date Range</div>
                <div className="font-semibold text-primary">
                  {result.date_range.start} → {result.date_range.end}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Links to view/download */}
        <div className="flex gap-2 mt-4">
          {result.image_url && (
            <a
              href={`http://127.0.0.1:5000${result.image_url}`}
              target="_blank"
              className="text-xs text-blue-500 underline"
            >
              View Map
            </a>
          )}
          {result.report_url && (
            <a
              href={`http://127.0.0.1:5000${result.report_url}`}
              target="_blank"
              className="text-xs text-blue-500 underline"
            >
              Download Report
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
