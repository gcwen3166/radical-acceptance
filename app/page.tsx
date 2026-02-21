"use client"

import { useState } from "react"
import { I18nProvider } from "@/lib/i18n"
import { LandingPage } from "@/components/landing-page"
import { Wizard } from "@/components/wizard"

export default function Page() {
  const [view, setView] = useState<"landing" | "wizard">("landing")

  return (
    <I18nProvider>
      {view === "landing" ? (
        <LandingPage onStart={() => setView("wizard")} />
      ) : (
        <Wizard onExit={() => setView("landing")} />
      )}
    </I18nProvider>
  )
}
