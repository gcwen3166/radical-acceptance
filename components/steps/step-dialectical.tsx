"use client"

import { useI18n } from "@/lib/i18n"
import { Merge, Plus, X } from "lucide-react"

interface StepDialecticalProps {
  data: {
    synthesisStatements: string[]
    causality: string
  }
  updateData: (updates: Partial<StepDialecticalProps["data"]>) => void
}

export function StepDialectical({ data, updateData }: StepDialecticalProps) {
  const { t } = useI18n()

  const handleStatementChange = (index: number, value: string) => {
    const updated = [...data.synthesisStatements]
    updated[index] = value
    updateData({ synthesisStatements: updated })
  }

  const addStatement = () => {
    updateData({ synthesisStatements: [...data.synthesisStatements, ""] })
  }

  const removeStatement = (index: number) => {
    if (data.synthesisStatements.length <= 1) return
    const updated = data.synthesisStatements.filter((_, i) => i !== index)
    updateData({ synthesisStatements: updated })
  }

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

      <div className="space-y-3">
        <label className="block text-sm font-sans font-medium text-foreground uppercase tracking-wider">
          {t.step4SynthesisLabel}
        </label>
        <div className="space-y-3">
          {data.synthesisStatements.map((statement, index) => (
            <div key={index} className="flex items-start gap-2">
              <textarea
                value={statement}
                onChange={(e) => handleStatementChange(index, e.target.value)}
                placeholder={t.step4SynthesisPlaceholder}
                rows={2}
                className="flex-1 bg-card text-card-foreground border border-border rounded-lg px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
                aria-label={`${t.step4SynthesisLabel} ${index + 1}`}
              />
              {data.synthesisStatements.length > 1 && (
                <button
                  onClick={() => removeStatement(index)}
                  className="mt-3 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                  aria-label={`Remove statement ${index + 1}`}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={addStatement}
          className="flex items-center gap-1.5 text-sm font-sans font-medium text-accent hover:text-accent/80 transition-colors px-1 py-1"
        >
          <Plus className="w-4 h-4" />
          {t.step4AddAnother}
        </button>
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
