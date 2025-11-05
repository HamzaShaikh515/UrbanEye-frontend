"use client"

import { Card } from "@/components/ui/card"
import { Satellite, Map, Bell, Cable as Cube, TicketCheck, TrendingUp } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Real-Time Detection",
      description: "AI-powered satellite imagery analysis detects unauthorized development instantly.",
      icon: Satellite,
    },
    {
      title: "Interactive Maps",
      description: "Explore detailed before/after satellite imagery with interactive map controls.",
      icon: Map,
    },
    {
      title: "Automated Alerts",
      description: "Get instant notifications when encroachment is detected in your areas.",
      icon: Bell,
    },
    {
      title: "3D Visualization",
      description: "View terrain models and development changes in immersive 3D.",
      icon: Cube,
    },
    {
      title: "Ticketing System",
      description: "Streamlined enforcement workflow with Kanban-style ticket management.",
      icon: TicketCheck,
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive metrics and heatmaps for data-driven decision making.",
      icon: TrendingUp,
    },
  ]

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for effective urban encroachment monitoring and enforcement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
