"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, Activity } from "lucide-react"

interface MapSectionProps {
  result?: { image_url?: string; report_url?: string } | null
}

export function MapSection({ result }: MapSectionProps) {
  return (
    <Card className="h-full flex flex-col p-6 bg-gradient-to-br from-card/80 to-card/40">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Satellite className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Satellite Map Viewer</h3>
            <p className="text-xs text-muted-foreground">Real-time detection overlay</p>
          </div>
        </div>
        <Badge className="gap-1">
          <Activity className="w-3 h-3 animate-pulse" />
          Live
        </Badge>
      </div>

      <div className="flex-1 relative rounded-lg border border-border/50 overflow-hidden bg-background/50">
        {result?.image_url ? (
          <img
            src={`http://127.0.0.1:5000${result.image_url}`}
            alt="Change Detection Result"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
            No detection results yet
          </div>
        )}
      </div>
    </Card>
  )
}
