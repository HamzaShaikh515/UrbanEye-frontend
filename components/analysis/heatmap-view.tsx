"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers } from "lucide-react"

export function HeatmapView() {
  return (
    <Card className="p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Layers className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Encroachment Heatmap</h3>
            <p className="text-sm text-muted-foreground">Geographic density distribution</p>
          </div>
        </div>
        <Badge variant="outline">Live</Badge>
      </div>

      <div className="flex-1 relative rounded-lg border border-border/50 overflow-hidden bg-gradient-to-br from-background to-card/50 min-h-64">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

        {/* Heatmap gradient representation */}
        <div className="absolute inset-0">
          {/* Hot zones */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-radial from-red-500/30 via-orange-500/20 to-transparent blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-radial from-orange-500/20 via-yellow-500/10 to-transparent blur-2xl" />
          <div className="absolute bottom-1/3 left-1/3 w-28 h-28 rounded-radial from-yellow-500/15 via-transparent to-transparent blur-2xl" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="flex gap-2 justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
            </div>
            <p className="text-xs text-muted-foreground max-w-xs font-medium">High to Low Encroachment Density</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 pt-4 border-t border-border/50">
        <div className="text-center">
          <div className="w-6 h-6 rounded-full bg-red-500/80 mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">Critical</p>
        </div>
        <div className="text-center">
          <div className="w-6 h-6 rounded-full bg-orange-500/80 mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">High</p>
        </div>
        <div className="text-center">
          <div className="w-6 h-6 rounded-full bg-yellow-500/80 mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">Medium</p>
        </div>
      </div>
    </Card>
  )
}
