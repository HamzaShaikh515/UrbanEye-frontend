"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Satellite, Brain, Zap, ArrowRight, CheckCircle, Globe, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const processSteps = [
    {
      step: 1,
      icon: Satellite,
      title: "Satellite Collection",
      description: "Real-time satellite imagery feeds continuously monitored and processed for changes",
      details: ["Multi-spectral imaging", "Real-time updates", "Global coverage"],
    },
    {
      step: 2,
      icon: Brain,
      title: "AI Detection",
      description: "Advanced algorithms identify changes and unauthorized development patterns",
      details: ["Computer vision", "98.9% accuracy", "Sub-second processing"],
    },
    {
      step: 3,
      icon: Zap,
      title: "Enforcement",
      description: "Automated ticketing and alerts for rapid enforcement action",
      details: ["Instant alerts", "Auto-ticketing", "Workflow management"],
    },
  ]

  const technologies = [
    {
      title: "Satellite & Mapping",
      icon: Satellite,
      items: ["Sentinel Hub feeds", "Mapbox GL integration", "Geospatial analysis"],
    },
    {
      title: "AI & Analytics",
      icon: Brain,
      items: ["Computer vision", "Machine learning", "Statistical analysis"],
    },
    {
      title: "Visualization",
      icon: Lightbulb,
      items: ["3D rendering", "Real-time dashboards", "Interactive maps"],
    },
    {
      title: "Platform",
      icon: Globe,
      items: ["Next.js 15", "WebSocket updates", "Cloud infrastructure"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(74,222,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,222,128,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4">About UrbanEye</Badge>
              <h1 className="text-6xl font-bold mb-6 text-balance">Protecting Cities Through Satellite Intelligence</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We empower government agencies and environmental organizations with cutting-edge satellite technology
                for real-time detection and enforcement of unauthorized urban development.
              </p>
            </div>
          </div>
        </section>

        {/* Mission section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  UrbanEye is dedicated to providing intelligent monitoring solutions that help cities grow sustainably.
                  We believe that urban development can be managed responsibly through real-time satellite intelligence
                  and data-driven decision making.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our platform enables rapid detection and enforcement of unauthorized development, protecting urban
                  green spaces and infrastructure integrity.
                </p>
                <div className="space-y-3">
                  {["Real-time monitoring", "Sustainable growth", "Data transparency"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 rounded-2xl border border-primary/30 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(74,222,128,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(74,222,128,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-24 h-24 text-primary/60 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Global satellite monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section className="py-20 bg-card/50 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Three-step process for detecting and managing urban encroachment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-32 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary via-accent to-primary pointer-events-none" />

              {processSteps.map((step) => {
                const Icon = step.icon
                return (
                  <Card key={step.step} className="p-8 relative hover:border-primary/50 transition-colors group">
                    {/* Step number badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-6 mt-4">
                      <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                    <p className="text-muted-foreground text-center mb-4">{step.description}</p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technology stack section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with cutting-edge tools and platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech) => {
                const Icon = tech.icon
                return (
                  <Card key={tech.title} className="p-6 hover:border-primary/50 hover:bg-card/80 transition-all group">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">{tech.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {tech.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-t border-border/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join government agencies and environmental organizations leveraging satellite intelligence for urban
              management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2 group">
                <Link href="/dashboard">
                  Start Monitoring
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
