"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card } from "@/components/ui/card"

export default function DocsPage() {
  const docs = [
    { title: "Getting Started", sections: ["Installation", "Authentication", "First Detection"] },
    { title: "API Reference", sections: ["Endpoints", "Authentication", "Rate Limits"] },
    { title: "Integration Guide", sections: ["Webhooks", "Custom Integrations", "Examples"] },
    { title: "Troubleshooting", sections: ["Common Issues", "FAQs", "Support"] },
  ]

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Documentation</h1>
          <p className="text-muted-foreground">Complete guide to UrbanEye features and API</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docs.map((doc) => (
            <Card key={doc.title} className="p-6 hover:border-primary/50 cursor-pointer transition-colors">
              <h3 className="font-bold text-lg mb-4">{doc.title}</h3>
              <ul className="space-y-2">
                {doc.sections.map((section) => (
                  <li key={section} className="text-muted-foreground hover:text-foreground cursor-pointer">
                    - {section}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <h3 className="font-bold text-lg mb-2">API Documentation</h3>
          <p className="text-muted-foreground mb-4">
            Comprehensive API reference with code examples and detailed endpoint documentation
          </p>
          <div className="bg-card/50 p-4 rounded-lg border border-border/50 font-mono text-sm">
            <p>GET /api/v1/detections</p>
            <p>POST /api/v1/tickets</p>
            <p>GET /api/v1/analytics/trends</p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
