"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { StepFactCheck } from "./steps/step-fact-check"
import { StepResistance } from "./steps/step-resistance"
import { StepSomatic } from "./steps/step-somatic"
import { StepDialectical } from "./steps/step-dialectical"
import { StepTurningMind } from "./steps/step-turning-mind"
import { StepWillingAction } from "./steps/step-willing-action"
import { CompletionScreen } from "./steps/completion-screen"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

const TOTAL_STEPS = 6

export function Wizard({ onExit }: { onExit: () => void }) {
  const { t } = useI18n()
  const [currentStep, setCurrentStep] = useState(1)
  const [completed, setCompleted] = useState(false)

  const [data, setData] = useState({
    objectiveReality: "",
    thought: "",
    judgment: "",
    why: "",
    willingHands: false,
    halfSmile: false,
    locationOfNo: false,
    breath: false,
    synthesisPart1: "",
    synthesisPart2: "",
    causality: "",
    costOfResistance: "",
    benefitOfAcceptance: "",
    willingAction: "",
  })

  const updateData = (updates: Partial<typeof data>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((s) => s + 1)
    } else {
      setCompleted(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1)
    }
  }

  const handleRestart = () => {
    setCurrentStep(1)
    setCompleted(false)
    setData({
      objectiveReality: "",
      thought: "",
      judgment: "",
      why: "",
      willingHands: false,
      halfSmile: false,
      locationOfNo: false,
      breath: false,
      synthesisPart1: "",
      synthesisPart2: "",
      causality: "",
      costOfResistance: "",
      benefitOfAcceptance: "",
      willingAction: "",
    })
  }

  if (completed) {
    return (
      <CompletionScreen onRestart={handleRestart} onExit={onExit} />
    )
  }

  const stepContent = () => {
    switch (currentStep) {
      case 1:
        return <StepFactCheck data={data} updateData={updateData} />
      case 2:
        return <StepResistance data={data} updateData={updateData} />
      case 3:
        return <StepSomatic data={data} updateData={updateData} />
      case 4:
        return <StepDialectical data={data} updateData={updateData} />
      case 5:
        return <StepTurningMind data={data} updateData={updateData} />
      case 6:
        return <StepWillingAction data={data} updateData={updateData} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12">
        <button
          onClick={onExit}
          className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Exit wizard"
        >
          <ArrowLeft className="w-4 h-4 inline mr-1" />
          <span className="sr-only">Exit</span>
        </button>
        <div className="text-sm font-sans tracking-widest text-muted-foreground uppercase">
          {t.step} {currentStep} {t.of} {TOTAL_STEPS}
        </div>
      </header>

      {/* Progress bar */}
      <div className="px-6 md:px-12">
        <div className="w-full h-0.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500 ease-out rounded-full"
            style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      <main className="flex-1 flex flex-col items-center justify-start px-6 py-10 md:py-16">
        <div className="w-full max-w-xl">
          {stepContent()}
        </div>
      </main>

      {/* Navigation */}
      <footer className="px-6 md:px-12 pb-8 pt-4">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed px-4 py-2.5"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-sans font-medium tracking-wide hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {currentStep === TOTAL_STEPS ? (
              <>
                {t.finish}
                <Check className="w-4 h-4" />
              </>
            ) : (
              <>
                {t.next}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </footer>
    </div>
  )
}
