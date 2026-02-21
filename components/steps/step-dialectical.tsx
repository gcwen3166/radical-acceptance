"use client"

import { useI18n } from "@/lib/i18n"
import { Merge } from "lucide-react"

interface StepDialecticalProps {
  data: {
    synthesisPart1: string
    synthesisPart2: string
    causality: string
  }
  updateData: (updates: Partial<StepDialecticalProps["data"]>) => void
}

export function StepDialectical({ data, updateData }: StepDialecticalProps) {
  const { t } = useI18n()

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Merge className="w-5 h-5 text-secondary-foreground" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {t.step4Title}
          </h2>
        </div>
        <p className="text-muted-foreground font-sans leading-relaxed text-pretty">
          {t.step4Desc}
        </p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-sans font-medium text-foreground uppercase tracking-wider">
          {t.step4SynthesisLabel}
        </label>
        <div className="space-y-0">
          <textarea
            value={data.synthesisPart1}
            onChange={(e) => updateData({ synthesisPart1: e.target.value })}
            placeholder={t.step4SynthesisPlaceholder1}
            rows={3}
            className="w-full bg-card text-card-foreground border border-border rounded-t-lg rounded-b-none px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
            aria-label={t.step4SynthesisPlaceholder1}
          />

          {/* AND bridge */}
          <div className="flex items-center justify-center bg-accent text-accent-foreground py-2 font-serif text-lg font-semibold tracking-widest">
            {t.step4And}
          </div>

          <textarea
            value={data.synthesisPart2}
            onChange={(e) => updateData({ synthesisPart2: e.target.value })}
            placeholder={t.step4SynthesisPlaceholder2}
            rows={3}
            className="w-full bg-card text-card-foreground border border-border rounded-b-lg rounded-t-none px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
            aria-label={t.step4SynthesisPlaceholder2}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="causality"
          className="block text-sm font-sans font-medium text-foreground uppercase tracking-wider"
        >
          {t.step4CausalityLabel}
        </label>
        <textarea
          id="causality"
          value={data.causality}
          onChange={(e) => updateData({ causality: e.target.value })}
          placeholder={t.step4CausalityPlaceholder}
          rows={4}
          className="w-full bg-card text-card-foreground border border-border rounded-lg px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
        />
      </div>
    </div>
  )
}
