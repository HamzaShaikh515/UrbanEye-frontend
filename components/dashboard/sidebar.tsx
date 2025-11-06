"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutGrid, Map, TrendingUp, Ticket, HelpCircle, BookOpen, LogOut } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { href: "/dashboard", label: "Workspace", icon: LayoutGrid },
    { href: "/results", label: "Results", icon: Map },
    { href: "/analysis", label: "Analytics", icon: TrendingUp },
    { href: "/tickets", label: "Tickets", icon: Ticket },
  ]

  const bottomItems = [
    { href: "/about", label: "About", icon: HelpCircle },
    { href: "/docs", label: "Documentation", icon: BookOpen },
  ]

  return (
    <aside className="w-64 border-r border-border/50 bg-card/50 backdrop-blur-sm flex flex-col">
      <div className="p-6 border-b border-border/50">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-lg">UrbanEye</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <Button variant={isActive ? "default" : "ghost"} className="w-full justify-start gap-3 text-sm">
                <Icon className="w-4 h-4" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-border/50 space-y-2">
        {bottomItems.map((item) => {
          const Icon = item.icon
          return (
            <Link key={item.href} href={item.href}>
              <Button variant="ghost" className="w-full justify-start gap-3 text-sm text-muted-foreground">
                <Icon className="w-4 h-4" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
