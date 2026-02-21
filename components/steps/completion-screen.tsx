"use client"

import { useI18n } from "@/lib/i18n"
import { RotateCcw, Home } from "lucide-react"

interface CompletionScreenProps {
  onRestart: () => void
  onExit: () => void
}

export function CompletionScreen({ onRestart, onExit }: CompletionScreenProps) {
  const { t } = useI18n()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg space-y-8">
        {/* Checkmark circle */}
        <div className="mx-auto w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent-foreground"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {t.completedTitle}
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed text-pretty">
            {t.completedDesc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRestart}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-sans font-medium tracking-wide hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <RotateCcw className="w-4 h-4" />
            {t.restart}
          </button>
          <button
            onClick={onExit}
            className="flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg text-sm font-sans font-medium tracking-wide hover:bg-secondary transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
        </div>
      </div>
    </div>
  )
}
