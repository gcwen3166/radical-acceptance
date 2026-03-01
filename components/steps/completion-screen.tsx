"use client"

import { useRef } from "react"
import { useI18n } from "@/lib/i18n"
import { RotateCcw, Home, Download, ShieldCheck } from "lucide-react"

interface SessionData {
  objectiveReality: string
  thought: string
  judgment: string
  why: string
  willingHands: boolean
  halfSmile: boolean
  locationOfNo: boolean
  breath: boolean
  synthesisStatements: string[]
  causality: string
  costOfResistance: string
  benefitOfAcceptance: string
  willingAction: string
}

interface CompletionScreenProps {
  data: SessionData
  onRestart: () => void
  onExit: () => void
}

export function CompletionScreen({
  data,
  onRestart,
  onExit,
}: CompletionScreenProps) {
  const { t } = useI18n()
  const reviewRef = useRef<HTMLDivElement>(null)

  const handleDownloadPdf = () => {
    window.print()
  }

  const somaticItems = [
    { label: t.step3Hands, done: data.willingHands },
    { label: t.step3Smile, done: data.halfSmile },
    { label: t.step3Location, done: data.locationOfNo },
    { label: t.step3Breath, done: data.breath },
  ]

  const sections = [
    {
      title: t.reviewFactCheck,
      items: [{ label: t.step1Label, value: data.objectiveReality }],
    },
    {
      title: t.reviewResistance,
      items: [
        { label: t.step2ThoughtLabel, value: data.thought },
        { label: t.step2JudgmentLabel, value: data.judgment },
        { label: t.step2WhyLabel, value: data.why },
      ],
    },
    {
      title: t.reviewDialectical,
      items: [
        ...data.synthesisStatements
          .filter((s) => s.trim())
          .map((s, i) => ({
            label: `${t.step4SynthesisLabel} ${i + 1}`,
            value: s,
          })),
        { label: t.step4CausalityLabel, value: data.causality },
      ],
    },
    {
      title: t.reviewTurningMind,
      items: [
        { label: t.step5CostLabel, value: data.costOfResistance },
        { label: t.step5BenefitLabel, value: data.benefitOfAcceptance },
      ],
    },
    {
      title: t.reviewWillingAction,
      items: [{ label: t.step6Label, value: data.willingAction }],
    },
  ]

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #session-review, #session-review * { visibility: visible; }
          #session-review { position: absolute; left: 0; top: 0; width: 100%; padding: 2rem; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="min-h-screen flex flex-col">
        {/* Top bar - no print */}
        <header className="flex items-center justify-between px-6 py-4 md:px-12 no-print">
          <button
            onClick={onExit}
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Go home"
          >
            <Home className="w-4 h-4 inline mr-1" />
          </button>
          <div className="text-sm font-sans tracking-widest text-muted-foreground uppercase">
            {t.sessionReviewTitle}
          </div>
        </header>

        <main className="flex-1 px-6 py-8 md:py-12">
          <div
            id="session-review"
            ref={reviewRef}
            className="max-w-2xl mx-auto space-y-8"
          >
            {/* Title */}
            <div className="space-y-2 text-center">
              <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                {t.sessionReviewTitle}
              </h1>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {t.sessionReviewDesc}
              </p>
            </div>

            {/* Sections */}
            {sections.map((section) => {
              const hasContent = section.items.some(
                (item) => item.value && item.value.trim()
              )
              if (!hasContent) return null

              return (
                <div key={section.title} className="space-y-3">
                  <h2 className="font-serif text-xl text-foreground border-b border-border pb-2">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.items.map(
                      (item) =>
                        item.value &&
                        item.value.trim() && (
                          <div key={item.label} className="space-y-1">
                            <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-wider">
                              {item.label}
                            </p>
                            <p className="font-sans text-foreground leading-relaxed bg-card border border-border rounded-lg px-4 py-3">
                              {item.value}
                            </p>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )
            })}

            {/* Somatic section */}
            {somaticItems.some((item) => item.done) && (
              <div className="space-y-3">
                <h2 className="font-serif text-xl text-foreground border-b border-border pb-2">
                  {t.reviewSomatic}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {somaticItems.map((item) => (
                    <span
                      key={item.label}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-sans ${
                        item.done
                          ? "bg-accent/15 text-accent border border-accent/30"
                          : "bg-secondary text-muted-foreground border border-border"
                      }`}
                    >
                      {item.done ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-40"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      )}
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Privacy disclaimer */}
            <div className="flex items-start gap-3 bg-secondary/60 border border-border rounded-lg p-4">
              <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                {t.privacyDisclaimer}
              </p>
            </div>
          </div>
        </main>

        {/* Footer actions */}
        <footer className="px-6 md:px-12 pb-8 pt-4 no-print">
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-sans font-medium tracking-wide hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Download className="w-4 h-4" />
              {t.downloadPdf}
            </button>
            <button
              onClick={onRestart}
              className="flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg text-sm font-sans font-medium tracking-wide hover:bg-secondary transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
        </footer>
      </div>
    </>
  )
}
