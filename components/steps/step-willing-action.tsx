"use client"

import { useI18n } from "@/lib/i18n"
import { Footprints } from "lucide-react"

interface StepWillingActionProps {
  data: { willingAction: string }
  updateData: (updates: { willingAction: string }) => void
}

export function StepWillingAction({
  data,
  updateData,
}: StepWillingActionProps) {
  const { t } = useI18n()

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Footprints className="w-5 h-5 text-secondary-foreground" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {t.step6Title}
          </h2>
        </div>
        <p className="text-muted-foreground font-sans leading-relaxed text-pretty">
          {t.step6Desc}
        </p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="willing-action"
          className="block text-sm font-sans font-medium text-foreground uppercase tracking-wider"
        >
          {t.step6Label}
        </label>
        <textarea
          id="willing-action"
          value={data.willingAction}
          onChange={(e) => updateData({ willingAction: e.target.value })}
          placeholder={t.step6Placeholder}
          rows={5}
          className="w-full bg-card text-card-foreground border border-border rounded-lg px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
        />
      </div>
    </div>
  )
}
