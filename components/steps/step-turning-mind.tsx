"use client"

import { useRef, useState } from "react"
import { useI18n } from "@/lib/i18n"
import { CheckCircle2, RotateCw } from "lucide-react"

interface StepTurningMindProps {
  data: {
    costOfResistance: string
    benefitOfAcceptance: string
  }
  updateData: (updates: Partial<StepTurningMindProps["data"]>) => void
}

export function StepTurningMind({ data, updateData }: StepTurningMindProps) {
  const { t } = useI18n()
  const [showTypingArea, setShowTypingArea] = useState(false)
  const [typedSentence, setTypedSentence] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const isMatched = typedSentence.trim() === t.step5Quote.trim()

  function handlePromptClick() {
    setShowTypingArea(true)
    setTimeout(() => textareaRef.current?.focus(), 0)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <RotateCw className="w-5 h-5 text-secondary-foreground" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {t.step5Title}
          </h2>
        </div>
        <p className="text-muted-foreground font-sans leading-relaxed text-pretty">
          {t.step5Desc}
        </p>
      </div>

      {/* Commitment blockquote */}
      <blockquote className="border-l-4 border-accent bg-primary text-primary-foreground p-6 rounded-r-lg">
        <p className="font-serif text-lg md:text-xl leading-relaxed italic">
          {t.step5Quote}
        </p>
      </blockquote>

      {/* Type-the-sentence area */}
      {!showTypingArea ? (
        <button
          onClick={handlePromptClick}
          className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors cursor-pointer underline-offset-2 hover:underline"
        >
          {t.step5TypePrompt}
        </button>
      ) : (
        <div className="space-y-2">
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={typedSentence}
              onChange={(e) => setTypedSentence(e.target.value)}
              placeholder={t.step5TypePlaceholder}
              rows={4}
              className={`w-full bg-card text-card-foreground border rounded-lg px-4 py-3 font-serif italic text-base leading-relaxed placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:border-transparent resize-none transition-all ${
                isMatched
                  ? "border-green-500/60 focus:ring-green-500/40"
                  : "border-border focus:ring-ring"
              }`}
            />
          </div>
          {isMatched && (
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-sans">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.step5TypeComplete}</span>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="cost-resistance"
            className="block text-sm font-sans font-medium text-foreground uppercase tracking-wider"
          >
            {t.step5CostLabel}
          </label>
          <textarea
            id="cost-resistance"
            value={data.costOfResistance}
            onChange={(e) =>
              updateData({ costOfResistance: e.target.value })
            }
            placeholder={t.step5CostPlaceholder}
            rows={4}
            className="w-full bg-card text-card-foreground border border-border rounded-lg px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="benefit-acceptance"
            className="block text-sm font-sans font-medium text-foreground uppercase tracking-wider"
          >
            {t.step5BenefitLabel}
          </label>
          <textarea
            id="benefit-acceptance"
            value={data.benefitOfAcceptance}
            onChange={(e) =>
              updateData({ benefitOfAcceptance: e.target.value })
            }
            placeholder={t.step5BenefitPlaceholder}
            rows={4}
            className="w-full bg-card text-card-foreground border border-border rounded-lg px-4 py-3 font-sans text-base leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-shadow"
          />
        </div>
      </div>
    </div>
  )
}
