"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(74,222,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,222,128,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 text-sm text-primary animate-glow">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Advanced Satellite Intelligence
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Detect Urban Encroachment in <span className="text-primary">Real-Time</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-xl">
              Harness satellite imagery and AI-powered detection to monitor, identify, and enforce against unauthorized
              urban development instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/dashboard" className="flex items-center gap-2">
                  Start Monitoring
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold">45K+</p>
                <p className="text-sm text-muted-foreground">Encroachments Detected</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-2xl font-bold">98.5%</p>
                <p className="text-sm text-muted-foreground">Detection Accuracy</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/30 overflow-hidden">
              <div className="absolute inset-0 bg-[url('/satellite-earth-map.jpg')] bg-cover bg-center opacity-20" />

              {/* Animated scan line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-scan" />

              {/* Central visualization element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-2 border-primary/50 animate-pulse" />
                  <div
                    className="absolute inset-0 w-32 h-32 rounded-full border border-primary/30 animate-spin"
                    style={{ animationDuration: "4s" }}
                  />
                  <div className="absolute inset-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/50" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full border border-accent/30 animate-float" />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border border-primary/20 animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
