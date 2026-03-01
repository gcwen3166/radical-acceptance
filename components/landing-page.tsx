"use client"

import { useState } from "react"
import { useI18n, type Language } from "@/lib/i18n"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Heart, Phone, ExternalLink } from "lucide-react"

const languageLabels: Record<Language, string> = {
  en: "EN",
  es: "ES",
  zh: "\u4e2d",
}

export function LandingPage({ onStart }: { onStart: () => void }) {
  const { lang, setLang, t } = useI18n()
  const [helpOpen, setHelpOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="text-sm font-sans tracking-widest uppercase text-muted-foreground">
          RA
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border border-border rounded-lg px-3 py-1.5 bg-card text-card-foreground">
            {(["en", "es", "zh"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded text-sm font-sans transition-colors ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={`Switch to ${l === "en" ? "English" : l === "es" ? "Spanish" : "Mandarin"}`}
              >
                {languageLabels[l]}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.buymeacoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-border rounded-lg px-3 py-1.5 bg-card text-card-foreground text-sm font-sans hover:bg-secondary transition-colors"
            >
              <Heart className="w-3.5 h-3.5" />
              {t.donate}
            </a>
            <button
              onClick={() => setHelpOpen(true)}
              className="flex items-center gap-1.5 border border-accent bg-accent text-accent-foreground rounded-lg px-3 py-1.5 text-sm font-sans font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              {t.getHelp}
            </button>
          </div>
        </div>
      </header>

      {/* Get Help Dialog */}
      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{t.helpModalTitle}</DialogTitle>
            <DialogDescription>{t.helpModalDesc}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <a
              href="tel:988"
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-secondary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans font-medium text-foreground">{t.help988}</p>
                <p className="text-sm text-muted-foreground">{t.help988Desc}</p>
              </div>
            </a>
            <a
              href="tel:8778704673"
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-secondary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans font-medium text-foreground">{t.helpSamaritans}</p>
                <p className="text-sm text-muted-foreground">{t.helpSamaritansDesc}</p>
              </div>
            </a>
            <a
              href="https://www.mysafetyplan.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-secondary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans font-medium text-foreground">{t.helpSafetyPlan}</p>
                <p className="text-sm text-muted-foreground">{t.helpSafetyPlanDesc}</p>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground text-balance leading-tight">
            {t.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-lg mx-auto text-pretty">
            {t.subtitle}
          </p>
          <button
            onClick={onStart}
            className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-sans font-medium tracking-wide hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t.cta}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-1"
              aria-hidden="true"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </main>

      {/* FAQ */}
      <section className="px-6 md:px-12 pb-16 pt-8 max-w-2xl mx-auto w-full">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">
          {t.faqTitle}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {t.faq.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="text-left font-sans text-foreground py-5 text-base hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans leading-relaxed pb-5">
                <p>{item.a}</p>
                {"bullets" in item && item.bullets && (
                  <ul className="mt-3 space-y-2 list-disc pl-5">
                    {(item.bullets as string[]).map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
