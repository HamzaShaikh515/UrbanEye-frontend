"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Zap, SettingsIcon, Loader2 } from "lucide-react"
import { useState } from "react"

export function ControlPanel({ onResult }: { onResult?: (data: any) => void }) {
  const [sensitivity, setSensitivity] = useState([25])
  const [region, setRegion] = useState("north")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ image_url?: string; report_url?: string } | null>(null)
  const [error, setError] = useState("")

  const handleRunDetection = async () => {
    setLoading(true)
    setError("")
    setResult(null)

    try {
      const payload = {
        lat_min: 19.199,
        lon_min: 72.973,
        lat_max: 19.202,
        lon_max: 72.976,
        start_date: "2017-11-05",
        end_date: "2018-11-05"
      }

      const res = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Pipeline failed")

      setResult(data)
      onResult?.(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
        <SettingsIcon className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Detection Settings</h3>
      </div>

      <div className="space-y-6">
        {/* Region */}
        <div className="space-y-2">
          <Label htmlFor="region" className="text-sm font-medium">
            Select Region
          </Label>
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger id="region">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="north">North District</SelectItem>
              <SelectItem value="central">Central District</SelectItem>
              <SelectItem value="south">South District</SelectItem>
              <SelectItem value="east">East District</SelectItem>
              <SelectItem value="west">West District</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sensitivity */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="sensitivity" className="text-sm font-medium">
              Detection Sensitivity
            </Label>
            <span className="text-sm font-semibold text-primary">{sensitivity[0]}%</span>
          </div>
          <Slider id="sensitivity" min={0} max={100} step={5} value={sensitivity} onValueChange={setSensitivity} />
        </div>

        {/* Run Button */}
        <Button onClick={handleRunDetection} disabled={loading} className="w-full gap-2 mt-4">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
          {loading ? "Running Detection..." : "Run Detection"}
        </Button>

        {/* Error or Result */}
        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        {result && (
          <div className="mt-4 space-y-2 text-sm">
            <p className="font-medium text-green-600">✅ Detection Complete</p>
            <a href={`http://127.0.0.1:5000${result.image_url}`} target="_blank" className="underline text-blue-500">
              View Change Map
            </a>
            <a href={`http://127.0.0.1:5000${result.report_url}`} target="_blank" className="underline text-blue-500">
              Download Report
            </a>
          </div>
        )}
      </div>
    </Card>
  )
}
