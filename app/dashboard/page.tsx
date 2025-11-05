"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { MapSection } from "@/components/dashboard/map-section"
import { ControlPanel } from "@/components/dashboard/control-panel"
import { LivePreview } from "@/components/dashboard/live-preview"
import { useState } from "react"

export default function DashboardPage() {
  const [result, setResult] = useState(null)

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
          <div className="lg:col-span-2">
            {/* ✅ Pass result here */}
            <MapSection result={result} />
          </div>
          <div className="flex flex-col gap-6">
            {/* ✅ Send the setter so ControlPanel can update result */}
            <ControlPanel onResult={setResult} />
            <LivePreview result={result} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
