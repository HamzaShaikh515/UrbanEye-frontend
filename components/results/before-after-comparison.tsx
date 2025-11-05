"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { useState } from "react"

export function BeforeAfterComparison() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [selectedImage, setSelectedImage] = useState<"before" | "after">("before")

  return (
    <Card className="p-6 flex flex-col h-full">
      <div className="mb-6 pb-4 border-b border-border/50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">Before/After Comparison</h3>
          <Badge variant="outline" className="gap-1">
            <ZoomIn className="w-3 h-3" />
            Interactive
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">Drag the slider to compare satellite imagery</p>
      </div>

      <div className="flex-1 relative rounded-lg overflow-hidden border border-border/50 mb-4 group cursor-col-resize">
        {/* Before image */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-primary/10 flex items-center justify-center overflow-hidden">
          <img src="/satellite-imagery-before.jpg" alt="Before" className="w-full h-full object-cover opacity-70" />
          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium">
            Before
          </div>
        </div>

        {/* After image with clip */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <img
              src="/satellite-imagery-after-development.jpg"
              alt="After"
              className="w-screen h-full object-cover opacity-70"
              style={{ width: "100vw", marginLeft: `-${sliderPosition}%` }}
            />
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium">
              After
            </div>
          </div>
        </div>

        {/* Slider handle */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
        />

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-primary/80 group-hover:bg-primary transition-colors"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-lg shadow-lg">
            <div className="flex gap-1">
              <ChevronLeft className="w-4 h-4" />
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant={selectedImage === "before" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedImage("before")}
        >
          View Before
        </Button>
        <Button
          variant={selectedImage === "after" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedImage("after")}
        >
          View After
        </Button>
      </div>
    </Card>
  )
}
