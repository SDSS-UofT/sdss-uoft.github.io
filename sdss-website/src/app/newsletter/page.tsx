"use client"

import { type ReactNode, useState } from "react"
import { ChevronDown } from "lucide-react"
import JanuaryNewsletter from "./january"

interface Newsletter {
  month: string
  id: string
  content: ReactNode
}

const newsletters: Newsletter[] = [
  {
    month: "January 2026",
    id: "january-2026",
    content: <JanuaryNewsletter />,
  },
  {
    month: "February 2026",
    id: "february-2026",
    content: (
      <p className="px-4 pb-6 text-muted-foreground">
        Stay tuned for the February newsletter!
      </p>
    ),
  },
  {
    month: "March 2026",
    id: "march-2026",
    content: (
      <p className="px-4 pb-6 text-muted-foreground">
        Stay tuned for the March newsletter!
      </p>
    ),
  },
]

export default function NewsletterPage() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleNewsletter = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Newsletters
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse our monthly newsletters to stay up to date with the latest news and updates.
          </p>
        </header>

        <div className="w-full divide-y divide-border rounded-lg border border-border">
          {newsletters.map((newsletter) => {
            const isOpen = openId === newsletter.id
            return (
              <div key={newsletter.id}>
                <button
                  type="button"
                  onClick={() => toggleNewsletter(newsletter.id)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left transition-colors hover:bg-muted/50"
                  aria-expanded={isOpen}
                  aria-controls={`content-${newsletter.id}`}
                >
                  <span className="text-lg font-semibold text-foreground">
                    {newsletter.month}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`content-${newsletter.id}`}
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {newsletter.content}
                </div>
              </div>
            )
          })}
        </div>

        {newsletters.length === 0 && (
          <p className="text-center text-muted-foreground">
            No newsletters available yet. Check back soon!
          </p>
        )}
      </div>
    </main>
  )
}
