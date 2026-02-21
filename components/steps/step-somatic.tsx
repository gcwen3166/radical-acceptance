"use client"

import { useI18n } from "@/lib/i18n"
import { Hand, Smile, MapPin, Wind, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepSomaticProps {
  data: {
    willingHands: boolean
    halfSmile: boolean
    locationOfNo: boolean
    breath: boolean
  }
  updateData: (updates: Partial<StepSomaticProps["data"]>) => void
}

export function StepSomatic({ data, updateData }: StepSomaticProps) {
  const { t } = useI18n()

  const cards = [
    {
      key: "willingHands" as const,
      icon: Hand,
      title: t.step3Hands,
      desc: t.step3HandsDesc,
      checked: data.willingHands,
    },
    {
      key: "halfSmile" as const,
      icon: Smile,
      title: t.step3Smile,
      desc: t.step3SmileDesc,
      checked: data.halfSmile,
    },
    {
      key: "locationOfNo" as const,
      icon: MapPin,
      title: t.step3Location,
      desc: t.step3LocationDesc,
      checked: data.locationOfNo,
    },
    {
      key: "breath" as const,
      icon: Wind,
      title: t.step3Breath,
      desc: t.step3BreathDesc,
      checked: data.breath,
    },
  ]

  return (
    <div className="space-y-8 relative">
      {/* Breathing background animation */}
      <div
        className="fixed inset-0 pointer-events-none animate-breathe"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(74, 93, 74, 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="space-y-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
            <Activity className="w-5 h-5 text-accent" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {t.step3Title}
          </h2>
        </div>
        <p className="text-muted-foreground font-sans leading-relaxed text-pretty">
          {t.step3Desc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <button
              key={card.key}
              onClick={() => updateData({ [card.key]: !card.checked })}
              className={cn(
                "group text-left p-5 rounded-xl border-2 transition-all duration-300",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                card.checked
                  ? "border-accent bg-accent/10 shadow-sm"
                  : "border-border bg-card hover:border-muted-foreground/30 hover:shadow-sm"
              )}
              role="checkbox"
              aria-checked={card.checked}
              aria-label={card.title}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    card.checked
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={cn(
                      "font-sans font-medium text-sm transition-colors",
                      card.checked ? "text-foreground" : "text-foreground"
                    )}
                  >
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Check indicator */}
              <div
                className={cn(
                  "mt-3 flex items-center justify-center w-full py-1.5 rounded-md text-xs font-sans font-medium transition-all",
                  card.checked
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary/50 text-muted-foreground"
                )}
              >
                {card.checked ? "Done" : "Tap to complete"}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
