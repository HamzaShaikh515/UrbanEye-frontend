"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cable as Cube, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapView3D() {
  return (
    <Card className="p-6 flex flex-col h-full">
      <div className="mb-4 pb-4 border-b border-border/50 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-1">3D Terrain View</h3>
          <p className="text-sm text-muted-foreground">Development altitude analysis</p>
        </div>
        <Badge className="gap-1">
          <Cube className="w-3 h-3" />
          3D
        </Badge>
      </div>

      <div className="flex-1 relative rounded-lg border border-border/50 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 mb-4">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(74,222,128,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(74,222,128,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {/* Isometric cube representation */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Front face */}
                <polygon
                  points="30,30 70,30 70,70 30,70"
                  fill="rgba(74,222,128,0.2)"
                  stroke="rgba(74,222,128,0.5)"
                  strokeWidth="2"
                />
                {/* Top face */}
                <polygon
                  points="30,30 50,10 90,30 70,30"
                  fill="rgba(74,222,128,0.3)"
                  stroke="rgba(74,222,128,0.5)"
                  strokeWidth="2"
                />
                {/* Right face */}
                <polygon
                  points="70,30 90,30 90,70 70,70"
                  fill="rgba(74,222,128,0.15)"
                  stroke="rgba(74,222,128,0.5)"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              3D terrain elevation with detected encroachment height analysis
            </p>
          </div>
        </div>
      </div>

      <Button variant="outline" className="w-full gap-2 bg-transparent" size="sm">
        <RotateCcw className="w-4 h-4" />
        Reset View
      </Button>
    </Card>
  )
}
