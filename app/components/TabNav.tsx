"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TabNav() {
  const pathname = usePathname()

  const tabs = [
    { href: "/", label: "Photos" },
    { href: "/messages", label: "Voice Messages" },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-pastel-lavender/40 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <span className="text-xl font-bold text-primary tracking-tight">Our Gallery</span>
        <nav className="flex gap-1">
          {tabs.map((tab) => {
            const isActive = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href)
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={[
                  "px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-pastel-pink/30 hover:text-foreground",
                ].join(" ")}
              >
                {tab.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
