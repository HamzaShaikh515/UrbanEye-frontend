"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Zap, SettingsIcon, Loader2, Calendar } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar as CalendarPicker } from "@/components/ui/calendar"
import { format } from "date-fns"

const PRESET_LOCATIONS = {
  "ap-shah": { name: "A.P. Shah College", lat_min: 19.2665, lon_min: 72.9725, lat_max: 19.2695, lon_max: 72.9755 },
  "godbunder": { name: "Godbunder Road", lat_min: 19.252, lon_min: 72.961, lat_max: 19.256, lon_max: 72.966 },
  "thane-station": { name: "Thane Station", lat_min: 19.186, lon_min: 72.972, lat_max: 19.191, lon_max: 72.978 },
  "thane-police": { name: "Thane Police Station", lat_min: 19.191, lon_min: 72.973, lat_max: 19.193, lon_max: 72.976 },
  "BKC": { name: "Bandra Kurla Complex", lat_min: 19.05, lon_min: 72.85, lat_max: 19.15, lon_max: 72.90 },
}

type PresetLocationKey = keyof typeof PRESET_LOCATIONS | "custom"

interface ControlPanelProps {
  onResult?: (data: any) => void
}

export function ControlPanel({ onResult }: ControlPanelProps) {
  const [sensitivity, setSensitivity] = useState([25])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState(null)
  const [locationType, setLocationType] = useState<PresetLocationKey>("BKC")

  const [latMin, setLatMin] = useState(19.199)
  const [lonMin, setLonMin] = useState(72.973)
  const [latMax, setLatMax] = useState(19.202)
  const [lonMax, setLonMax] = useState(72.976)

  const [startDate, setStartDate] = useState<Date | undefined>(new Date("2018-01-01"))
  const [endDate, setEndDate] = useState<Date | undefined>(new Date("2019-01-01"))

  const handleRunDetection = async () => {
    if (!startDate || !endDate) {
      setError("Please select a valid start and end date.")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      let coords
      if (locationType === "custom") {
        coords = { lat_min: latMin, lon_min: lonMin, lat_max: latMax, lon_max: lonMax }
      } else {
        coords = PRESET_LOCATIONS[locationType]
      }

      const payload = {
        lat_min: coords.lat_min,
        lon_min: coords.lon_min,
        lat_max: coords.lat_max,
        lon_max: coords.lon_max,
        start_date: format(startDate, "yyyy-MM-dd"),
        end_date: format(endDate, "yyyy-MM-dd"),
      }

      const res = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Pipeline failed")

      // ✅ Merge AOI + date range into result object
      const fullResult = {
        ...data,
        aoi: coords,
        date_range: {
          start: format(startDate, "yyyy-MM-dd"),
          end: format(endDate, "yyyy-MM-dd"),
        },
        sensitivity: sensitivity[0],
      }

      setResult(fullResult)
      onResult?.(fullResult)
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

      <div className="space-y-5">
        {/* Location Dropdown */}
        <div>
          <Label className="text-sm font-medium">Select Location</Label>
          <Select value={locationType} onValueChange={(v: string) => setLocationType(v as PresetLocationKey)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Choose a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ap-shah">A.P. Shah College</SelectItem>
              <SelectItem value="godbunder">Godbunder Road</SelectItem>
              <SelectItem value="thane-station">Thane Station</SelectItem>
              <SelectItem value="thane-police">Thane Police Station</SelectItem>
              <SelectItem value="BKC">Bandra Kurla Complex</SelectItem>
              <SelectItem value="custom">Custom Coordinates</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Custom AOI Inputs */}
        {locationType === "custom" && (
          <div>
            <Label className="text-sm font-medium">Custom AOI Coordinates</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Input type="number" step="0.0001" value={latMin} onChange={(e) => setLatMin(parseFloat(e.target.value))} placeholder="Lat Min" />
              <Input type="number" step="0.0001" value={lonMin} onChange={(e) => setLonMin(parseFloat(e.target.value))} placeholder="Lon Min" />
              <Input type="number" step="0.0001" value={latMax} onChange={(e) => setLatMax(parseFloat(e.target.value))} placeholder="Lat Max" />
              <Input type="number" step="0.0001" value={lonMax} onChange={(e) => setLonMax(parseFloat(e.target.value))} placeholder="Lon Max" />
            </div>
          </div>
        )}

        {/* Date Pickers */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-sm font-medium">Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                  <Calendar className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "MMM dd, yyyy") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2" align="start">
                <CalendarPicker
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  captionLayout="dropdown"
                  fromYear={2015}
                  toYear={2025}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label className="text-sm font-medium">End Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                  <Calendar className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "MMM dd, yyyy") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2" align="start">
                <CalendarPicker
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  captionLayout="dropdown"
                  fromYear={2015}
                  toYear={2025}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Sensitivity Slider */}
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sensitivity" className="text-sm font-medium">
              Detection Sensitivity
            </Label>
            <span className="text-sm font-semibold text-primary">{sensitivity[0]}%</span>
          </div>
          <Slider id="sensitivity" min={0} max={100} step={5} value={sensitivity} onValueChange={setSensitivity} />
        </div>

        {/* Run Detection Button */}
        <Button onClick={handleRunDetection} disabled={loading} className="w-full gap-2 mt-4">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
          {loading ? "Running Detection..." : "Run Detection"}
        </Button>

        {error && <p className="text-sm text-red-500">{error}</p>}
        {result && <p className="text-sm text-green-600">✅ Detection complete! Check map and preview.</p>}
      </div>
    </Card>
  )
}
