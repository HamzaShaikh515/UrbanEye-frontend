"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Activity, FileDown, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    aoi?: { lat_min: number; lon_min: number; lat_max: number; lon_max: number }
    sensitivity?: number
    image_url?: string
    report_url?: string
  } | null
}

export function LivePreview({ result }: LivePreviewProps) {
  const [downloading, setDownloading] = useState(false)
  const [error, setError] = useState("")

  if (!result) {
    return (
      <Card className="p-6 flex flex-col items-center justify-center text-center text-sm text-muted-foreground">
        <AlertCircle className="w-6 h-6 mb-2 text-primary/70" />
        No recent detections. Run analysis to view live results.
      </Card>
    )
  }

  const handleDownloadReport = async () => {
    try {
      setDownloading(true)
      setError("")

      const payload = {
        aoi: `${result.aoi?.lat_min},${result.aoi?.lon_min} → ${result.aoi?.lat_max},${result.aoi?.lon_max}`,
        start_date: result.date_range?.start || "",
        end_date: result.date_range?.end || "",
        summary: `${result.classification || "Unknown classification"} - ${result.reason || ""}`,
        statistics: result.statistics || {},
        image_url: `http://127.0.0.1:5000${result.image_url || ""}`,

      }

      const res = await fetch("http://127.0.0.1:5000/download-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Failed to generate report")

      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "UrbanEye_Report.pdf"
      link.click()
      window.URL.revokeObjectURL(url)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setDownloading(false)
    }
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
          <Activity className="w-2 h-2 animate-pulse" /> Live
        </Badge>
      </div>

      <div className="space-y-4">
        {/* Detection Summary */}
        <div className="p-3 rounded-lg border text-sm">
          <div className="flex items-start justify-between mb-1">
            <div className="font-medium">{result.classification}</div>
            <Badge variant="outline">{result.severity}</Badge>
          </div>
          <div className="text-xs text-muted-foreground">
            Confidence:{" "}
            <span className="font-semibold text-primary">{(result.confidence || 0) * 100}%</span>
          </div>
          <p className="text-xs mt-2 text-muted-foreground">{result.reason}</p>
        </div>

        {/* AOI & Stats */}
        {result.aoi && (
          <div className="p-2 rounded-lg border text-xs text-muted-foreground">
            <div>AOI:</div>
            <div className="font-semibold text-primary">
              {result.aoi.lat_min}, {result.aoi.lon_min} → {result.aoi.lat_max}, {result.aoi.lon_max}
            </div>
          </div>
        )}

        {/* Download Report Button */}
        <Button onClick={handleDownloadReport} disabled={downloading} size="sm" className="w-full mt-2 gap-2">
          {downloading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Generating Report...
            </>
          ) : (
            <>
              <FileDown className="w-4 h-4" /> Download Report
            </>
          )}
        </Button>

        {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      </div>
    </Card>
  )
}
