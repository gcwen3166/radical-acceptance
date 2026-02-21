"use client"

import { useI18n } from "@/lib/i18n"
import { ShieldAlert } from "lucide-react"

interface StepResistanceProps {
  data: { thought: string; judgment: string; why: string }
  updateData: (updates: Partial<StepResistanceProps["data"]>) => void
}

export function StepResistance({ data, updateData }: StepResistanceProps) {
  const { t } = useI18n()

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <ShieldAlert className="w-5 h-5 text-secondary-foreground" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {t.step2Title}
          </h2>
        </div>
        <p className="text-muted-foreground font-sans leading-relaxed text-pretty">
          {t.step2Desc}
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="thought"
            className="block text-sm font-sans font-medium text-foreground uppercase tracking-wider"
          >
            {t.step2ThoughtLabel}
          </label>
          <textarea
            id="thought"
            value={data.thought}
            onChange={(e) => updateData({ thought: e.target.value })}
            placeholder={t.step2ThoughtPlaceholder}
            rows={3}
            className="w-full bg-card text-card-foreground border border-border rounded-lg px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="judgment"
            className="block text-sm font-sans font-medium text-foreground uppercase tracking-wider"
          >
            {t.step2JudgmentLabel}
          </label>
          <textarea
            id="judgment"
            value={data.judgment}
            onChange={(e) => updateData({ judgment: e.target.value })}
            placeholder={t.step2JudgmentPlaceholder}
            rows={3}
            className="w-full bg-card text-card-foreground border border-border rounded-lg px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="why"
            className="block text-sm font-sans font-medium text-foreground uppercase tracking-wider"
          >
            {t.step2WhyLabel}
          </label>
          <textarea
            id="why"
            value={data.why}
            onChange={(e) => updateData({ why: e.target.value })}
            placeholder={t.step2WhyPlaceholder}
            rows={3}
            className="w-full bg-card text-card-foreground border border-border rounded-lg px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
          />
        </div>
      </div>
    </div>
  )
}
