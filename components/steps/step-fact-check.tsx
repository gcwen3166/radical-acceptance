"use client"

import { useI18n } from "@/lib/i18n"
import { ScanEye } from "lucide-react"

interface StepFactCheckProps {
  data: { objectiveReality: string }
  updateData: (updates: { objectiveReality: string }) => void
}

export function StepFactCheck({ data, updateData }: StepFactCheckProps) {
  const { t } = useI18n()

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <ScanEye className="w-5 h-5 text-secondary-foreground" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {t.step1Title}
          </h2>
        </div>
        <p className="text-muted-foreground font-sans leading-relaxed text-pretty">
          {t.step1Desc}
        </p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="objective-reality"
          className="block text-sm font-sans font-medium text-foreground uppercase tracking-wider"
        >
          {t.step1Label}
        </label>
        <textarea
          id="objective-reality"
          value={data.objectiveReality}
          onChange={(e) => updateData({ objectiveReality: e.target.value })}
          placeholder={t.step1Placeholder}
          rows={6}
          className="w-full bg-card text-card-foreground border border-border rounded-lg px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
        />
      </div>
    </div>
  )
}
