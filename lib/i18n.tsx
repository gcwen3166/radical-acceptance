"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Language = "en" | "es" | "zh"

const translations = {
  en: {
    title: "Radical Acceptance",
    subtitle: "Learning to live a life that is not the life you want.",
    cta: "Let's Practice Acceptance",
    faqTitle: "Frequently Asked Questions",
    faq: [
      {
        q: "What is Radical Acceptance?",
        a: "Radical Acceptance is a DBT (Dialectical Behavior Therapy) skill that involves fully accepting reality as it is, stopping the fighting of reality because it is not the way you want it and letting go of bitterness. It is used when you cannot keep painful events and emotions from coming your way. It does not mean approval - it means acknowledging what is true.",
      },
      {
        q: "What Has to be Accepted?",
        a: "What has to be accepted?",
        bullets: [
          "Reality is as it is: facts about the past and present are facts, even if you don't like them.",
          "Realistic limitations: There are limits on the future for everyone.",
          "Everything has a cause: including events that cause you pain and suffering.",
          "Meaning in pain: Life can be worth living even with painful events in it.",
        ],
      },
      {
        q: "Does acceptance mean giving up?",
        a: "Absolutely not. Acceptance is the prerequisite for meaningful change. You cannot change what you refuse to acknowledge. Acceptance is the foundation upon which action is built.",
      },
      {
        q: "How does this tool work?",
        a: "This tool guides you through 6 evidence-based steps derived from DBT. Each step builds on the last, moving you from observation to embodied acceptance to committed action.",
      },
      {
        q: "Can I use this during a crisis?",
        a: "This tool is designed for practice and skill-building. In a crisis, please contact the 988 Suicide & Crisis Lifeline by calling or texting 988, or reach out to a trusted professional.",
      },
    ],
    step: "Step",
    of: "of",
    next: "Next",
    back: "Back",
    finish: "Complete Practice",
    restart: "Practice Again",
    step1Title: "The Fact Check",
    step1Desc: "Describe the situation as a security camera would see it. No interpretations, no judgments\u2014just the raw, observable facts.",
    step1Label: "Objective Reality",
    step1Placeholder: "What happened? Describe only what is observable and verifiable...",
    step2Title: "Resistance Audit",
    step2Desc: "Identify the thoughts, judgments, and reasons your mind generates to resist this reality.",
    step2ThoughtLabel: "The Thought",
    step2ThoughtPlaceholder: "What thought keeps replaying?",
    step2JudgmentLabel: "The Judgment",
    step2JudgmentPlaceholder: "What judgment are you making about this situation?",
    step2WhyLabel: "The Why",
    step2WhyPlaceholder: "Why does your mind say this shouldn\u2019t be happening?",
    step3Title: "Somatic Pivot",
    step3Desc: "Shift from thinking to sensing. Use your body as an anchor to the present moment.",
    step3Hands: "Willing Hands",
    step3HandsDesc: "Turn palms upward, fingers relaxed. Signal openness to your nervous system.",
    step3Smile: "Half-Smile",
    step3SmileDesc: "Slightly lift the corners of your mouth. Let the micro-expression shift your inner state.",
    step3Location: "Location of \"No\"",
    step3LocationDesc: "Find where resistance lives in your body. Throat? Chest? Stomach? Name it.",
    step3Breath: "Breath",
    step3BreathDesc: "Three deep breaths. Inhale acceptance, exhale resistance. Let gravity do the work.",
    step4Title: "Dialectical Synthesis",
    step4Desc: "Hold two truths at once. This is the core dialectic\u2014life can be painful AND worth living.",
    step4SynthesisLabel: "The Synthesis Statement",
    step4SynthesisPlaceholder1: "This is painful because...",
    step4And: "AND",
    step4SynthesisPlaceholder2: "I can still...",
    step4CausalityLabel: "Causality",
    step4CausalityPlaceholder: "What chain of events led to this moment?",
    step5Title: "Turning the Mind",
    step5Desc: "Acceptance is not a one-time decision. It is a commitment you make again and again.",
    step5Quote: "I choose to accept this reality. Not because it is fair. Not because it is what I wanted. But because it is what is. And from this ground, I can move.",
    step5CostLabel: "Cost of Resistance",
    step5CostPlaceholder: "What does fighting this reality cost you?",
    step5BenefitLabel: "Benefit of Acceptance",
    step5BenefitPlaceholder: "What becomes possible when you stop fighting?",
    step6Title: "The Willing Action",
    step6Desc: "Acceptance without action is passivity. What is the very next physical step you can take?",
    step6Label: "The Next Physical Step",
    step6Placeholder: "What is one concrete action you will take in the next 24 hours?",
    completedTitle: "Practice Complete",
    completedDesc: "You have walked through the full cycle of radical acceptance. Remember: this is a practice, not a destination. Return whenever you need to.",
  },
  es: {
    title: "Aceptaci\u00f3n Radical",
    subtitle: "Aprender a vivir una vida que no es la vida que quieres.",
    cta: "Practiquemos la Aceptaci\u00f3n",
    faqTitle: "Preguntas Frecuentes",
    faq: [
      {
        q: "\u00bfQu\u00e9 es la Aceptaci\u00f3n Radical?",
        a: "La Aceptaci\u00f3n Radical es una habilidad de la TDC que implica aceptar completamente la realidad tal como es, sin juicio ni lucha. No significa aprobaci\u00f3n, sino reconocer lo que es verdad.",
      },
      {
        q: "\u00bfQu\u00e9 hay que aceptar?",
        a: "\u00bfQu\u00e9 hay que aceptar?",
        bullets: [
          "La realidad es como es: los hechos sobre el pasado y el presente son hechos, aunque no te gusten.",
          "Limitaciones realistas: Hay l\u00edmites en el futuro para todos.",
          "Todo tiene una causa: incluyendo eventos que te causan dolor y sufrimiento.",
          "Significado en el dolor: La vida puede valer la pena incluso con eventos dolorosos.",
        ],
      },
      {
        q: "\u00bfAceptar significa rendirse?",
        a: "Absolutamente no. La aceptaci\u00f3n es el prerrequisito para un cambio significativo. No puedes cambiar lo que te niegas a reconocer.",
      },
      {
        q: "\u00bfC\u00f3mo funciona esta herramienta?",
        a: "Esta herramienta te gu\u00eda a trav\u00e9s de 6 pasos basados en evidencia derivados de la TDC.",
      },
      {
        q: "\u00bfPuedo usar esto durante una crisis?",
        a: "Esta herramienta est\u00e1 dise\u00f1ada para la pr\u00e1ctica. En una crisis, por favor contacta una l\u00ednea de ayuda profesional.",
      },
    ],
    step: "Paso",
    of: "de",
    next: "Siguiente",
    back: "Atr\u00e1s",
    finish: "Completar Pr\u00e1ctica",
    restart: "Practicar de Nuevo",
    step1Title: "La Verificaci\u00f3n de Hechos",
    step1Desc: "Describe la situaci\u00f3n como la ver\u00eda una c\u00e1mara de seguridad. Sin interpretaciones, sin juicios.",
    step1Label: "Realidad Objetiva",
    step1Placeholder: "\u00bfQu\u00e9 sucedi\u00f3? Describe solo lo observable...",
    step2Title: "Auditor\u00eda de Resistencia",
    step2Desc: "Identifica los pensamientos, juicios y razones que tu mente genera para resistir esta realidad.",
    step2ThoughtLabel: "El Pensamiento",
    step2ThoughtPlaceholder: "\u00bfQu\u00e9 pensamiento se repite?",
    step2JudgmentLabel: "El Juicio",
    step2JudgmentPlaceholder: "\u00bfQu\u00e9 juicio est\u00e1s haciendo?",
    step2WhyLabel: "El Por Qu\u00e9",
    step2WhyPlaceholder: "\u00bfPor qu\u00e9 tu mente dice que esto no deber\u00eda estar pasando?",
    step3Title: "Giro Som\u00e1tico",
    step3Desc: "Pasa del pensamiento a la sensaci\u00f3n. Usa tu cuerpo como ancla al momento presente.",
    step3Hands: "Manos Dispuestas",
    step3HandsDesc: "Gira las palmas hacia arriba, dedos relajados. Se\u00f1ala apertura a tu sistema nervioso.",
    step3Smile: "Media Sonrisa",
    step3SmileDesc: "Levanta ligeramente las comisuras de tu boca.",
    step3Location: "Ubicaci\u00f3n del \"No\"",
    step3LocationDesc: "Encuentra d\u00f3nde vive la resistencia en tu cuerpo. \u00bfGarganta? \u00bfPecho? \u00bfEst\u00f3mago?",
    step3Breath: "Respiraci\u00f3n",
    step3BreathDesc: "Tres respiraciones profundas. Inhala aceptaci\u00f3n, exhala resistencia.",
    step4Title: "S\u00edntesis Dial\u00e9ctica",
    step4Desc: "Sostener dos verdades a la vez. La vida puede ser dolorosa Y valer la pena.",
    step4SynthesisLabel: "La Declaraci\u00f3n de S\u00edntesis",
    step4SynthesisPlaceholder1: "Esto es doloroso porque...",
    step4And: "Y",
    step4SynthesisPlaceholder2: "A\u00fan puedo...",
    step4CausalityLabel: "Causalidad",
    step4CausalityPlaceholder: "\u00bfQu\u00e9 cadena de eventos llev\u00f3 a este momento?",
    step5Title: "Girar la Mente",
    step5Desc: "La aceptaci\u00f3n no es una decisi\u00f3n \u00fanica. Es un compromiso que haces una y otra vez.",
    step5Quote: "Elijo aceptar esta realidad. No porque sea justa. No porque sea lo que quer\u00eda. Sino porque es lo que es. Y desde este suelo, puedo avanzar.",
    step5CostLabel: "Costo de la Resistencia",
    step5CostPlaceholder: "\u00bfQu\u00e9 te cuesta luchar contra esta realidad?",
    step5BenefitLabel: "Beneficio de la Aceptaci\u00f3n",
    step5BenefitPlaceholder: "\u00bfQu\u00e9 se vuelve posible cuando dejas de luchar?",
    step6Title: "La Acci\u00f3n Dispuesta",
    step6Desc: "La aceptaci\u00f3n sin acci\u00f3n es pasividad. \u00bfCu\u00e1l es el siguiente paso f\u00edsico?",
    step6Label: "El Siguiente Paso F\u00edsico",
    step6Placeholder: "\u00bfQu\u00e9 acci\u00f3n concreta tomar\u00e1s en las pr\u00f3ximas 24 horas?",
    completedTitle: "Pr\u00e1ctica Completa",
    completedDesc: "Has recorrido el ciclo completo de aceptaci\u00f3n radical. Recuerda: esto es una pr\u00e1ctica, no un destino.",
  },
  zh: {
    title: "\u5f7b\u5e95\u63a5\u53d7",
    subtitle: "\u5b66\u4f1a\u8fc7\u4e00\u79cd\u4e0d\u662f\u4f60\u60f3\u8981\u7684\u751f\u6d3b\u3002",
    cta: "\u8ba9\u6211\u4eec\u7ec3\u4e60\u63a5\u53d7",
    faqTitle: "\u5e38\u89c1\u95ee\u9898",
    faq: [
      {
        q: "\u4ec0\u4e48\u662f\u5f7b\u5e95\u63a5\u53d7\uff1f",
        a: "\u5f7b\u5e95\u63a5\u53d7\u662fDBT\uff08\u8fa9\u8bc1\u884c\u4e3a\u7597\u6cd5\uff09\u7684\u4e00\u9879\u6280\u80fd\uff0c\u5b83\u610f\u5473\u7740\u5b8c\u5168\u63a5\u53d7\u73b0\u5b9e\uff0c\u4e0d\u52a0\u5224\u65ad\uff0c\u4e0d\u62b5\u6297\u3002\u8fd9\u4e0d\u610f\u5473\u7740\u8d5e\u540c\u2014\u2014\u800c\u662f\u627f\u8ba4\u4ec0\u4e48\u662f\u771f\u5b9e\u7684\u3002",
      },
      {
        q: "\u9700\u8981\u63a5\u53d7\u4ec0\u4e48\uff1f",
        a: "\u9700\u8981\u63a5\u53d7\u4ec0\u4e48\uff1f",
        bullets: [
          "\u73b0\u5b9e\u5c31\u662f\u73b0\u5b9e\uff1a\u5173\u4e8e\u8fc7\u53bb\u548c\u73b0\u5728\u7684\u4e8b\u5b9e\u5c31\u662f\u4e8b\u5b9e\uff0c\u5373\u4f7f\u4f60\u4e0d\u559c\u6b22\u3002",
          "\u73b0\u5b9e\u7684\u5c40\u9650\u6027\uff1a\u6bcf\u4e2a\u4eba\u7684\u672a\u6765\u90fd\u6709\u5c40\u9650\u6027\u3002",
          "\u4e07\u4e8b\u7686\u6709\u56e0\uff1a\u5305\u62ec\u90a3\u4e9b\u7ed9\u4f60\u5e26\u6765\u75db\u82e6\u548c\u53d7\u82e6\u7684\u4e8b\u4ef6\u3002",
          "\u75db\u82e6\u4e2d\u7684\u610f\u4e49\uff1a\u5373\u4f7f\u6709\u75db\u82e6\u7684\u4e8b\u4ef6\uff0c\u751f\u6d3b\u4ecd\u7136\u503c\u5f97\u3002",
        ],
      },
      {
        q: "\u63a5\u53d7\u662f\u5426\u610f\u5473\u7740\u653e\u5f03\uff1f",
        a: "\u7edd\u5bf9\u4e0d\u662f\u3002\u63a5\u53d7\u662f\u6709\u610f\u4e49\u7684\u6539\u53d8\u7684\u524d\u63d0\u3002\u4f60\u65e0\u6cd5\u6539\u53d8\u4f60\u62d2\u7edd\u627f\u8ba4\u7684\u4e8b\u60c5\u3002",
      },
      {
        q: "\u8fd9\u4e2a\u5de5\u5177\u5982\u4f55\u5de5\u4f5c\uff1f",
        a: "\u8fd9\u4e2a\u5de5\u5177\u5f15\u5bfc\u4f60\u5b8c\u6210\u57fa\u4e8e\u8bc1\u636e\u7684DBT\u76846\u4e2a\u6b65\u9aa4\u3002",
      },
      {
        q: "\u6211\u53ef\u4ee5\u5728\u5371\u673a\u65f6\u4f7f\u7528\u8fd9\u4e2a\u5de5\u5177\u5417\uff1f",
        a: "\u8fd9\u4e2a\u5de5\u5177\u662f\u4e3a\u7ec3\u4e60\u548c\u6280\u80fd\u5efa\u8bbe\u800c\u8bbe\u8ba1\u7684\u3002\u5728\u5371\u673a\u4e2d\uff0c\u8bf7\u8054\u7cfb\u4e13\u4e1a\u7684\u5371\u673a\u5e72\u9884\u670d\u52a1\u3002",
      },
    ],
    step: "\u6b65\u9aa4",
    of: "/",
    next: "\u4e0b\u4e00\u6b65",
    back: "\u4e0a\u4e00\u6b65",
    finish: "\u5b8c\u6210\u7ec3\u4e60",
    restart: "\u518d\u6b21\u7ec3\u4e60",
    step1Title: "\u4e8b\u5b9e\u6838\u67e5",
    step1Desc: "\u50cf\u5b89\u5168\u6444\u50cf\u5934\u4e00\u6837\u63cf\u8ff0\u60c5\u51b5\u3002\u6ca1\u6709\u89e3\u8bfb\uff0c\u6ca1\u6709\u5224\u65ad\u3002",
    step1Label: "\u5ba2\u89c2\u73b0\u5b9e",
    step1Placeholder: "\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f\u53ea\u63cf\u8ff0\u53ef\u89c2\u5bdf\u548c\u53ef\u9a8c\u8bc1\u7684\u4e8b\u5b9e...",
    step2Title: "\u62b5\u6297\u5ba1\u8ba1",
    step2Desc: "\u8bc6\u522b\u4f60\u7684\u5927\u8111\u4ea7\u751f\u7684\u62b5\u6297\u73b0\u5b9e\u7684\u60f3\u6cd5\u3001\u5224\u65ad\u548c\u7406\u7531\u3002",
    step2ThoughtLabel: "\u60f3\u6cd5",
    step2ThoughtPlaceholder: "\u54ea\u4e2a\u60f3\u6cd5\u4e00\u76f4\u5728\u91cd\u64ad\uff1f",
    step2JudgmentLabel: "\u5224\u65ad",
    step2JudgmentPlaceholder: "\u4f60\u5bf9\u8fd9\u4e2a\u60c5\u51b5\u505a\u4e86\u4ec0\u4e48\u5224\u65ad\uff1f",
    step2WhyLabel: "\u539f\u56e0",
    step2WhyPlaceholder: "\u4e3a\u4ec0\u4e48\u4f60\u7684\u5927\u8111\u8bf4\u8fd9\u4e0d\u5e94\u8be5\u53d1\u751f\uff1f",
    step3Title: "\u8eab\u4f53\u8f6c\u5411",
    step3Desc: "\u4ece\u601d\u8003\u8f6c\u5411\u611f\u89c9\u3002\u7528\u4f60\u7684\u8eab\u4f53\u4f5c\u4e3a\u5f53\u4e0b\u7684\u951a\u3002",
    step3Hands: "\u613f\u610f\u7684\u53cc\u624b",
    step3HandsDesc: "\u638c\u5fc3\u5411\u4e0a\uff0c\u624b\u6307\u653e\u677e\u3002\u5411\u4f60\u7684\u795e\u7ecf\u7cfb\u7edf\u53d1\u51fa\u5f00\u653e\u4fe1\u53f7\u3002",
    step3Smile: "\u5fae\u7b11",
    step3SmileDesc: "\u5fae\u5fae\u62ac\u8d77\u5634\u89d2\u3002\u8ba9\u5fae\u8868\u60c5\u8f6c\u53d8\u4f60\u7684\u5185\u5fc3\u72b6\u6001\u3002",
    step3Location: "\"No\"\u7684\u4f4d\u7f6e",
    step3LocationDesc: "\u627e\u5230\u62b5\u6297\u5728\u4f60\u8eab\u4f53\u4e2d\u7684\u4f4d\u7f6e\u3002\u5589\u54bd\uff1f\u80f8\u53e3\uff1f\u80c3\u90e8\uff1f",
    step3Breath: "\u547c\u5438",
    step3BreathDesc: "\u4e09\u6b21\u6df1\u547c\u5438\u3002\u5438\u5165\u63a5\u53d7\uff0c\u547c\u51fa\u62b5\u6297\u3002",
    step4Title: "\u8fa9\u8bc1\u7efc\u5408",
    step4Desc: "\u540c\u65f6\u6301\u6709\u4e24\u4e2a\u771f\u7406\u3002\u751f\u6d3b\u53ef\u4ee5\u662f\u75db\u82e6\u7684\u540c\u65f6\u4e5f\u662f\u503c\u5f97\u7684\u3002",
    step4SynthesisLabel: "\u7efc\u5408\u58f0\u660e",
    step4SynthesisPlaceholder1: "\u8fd9\u5f88\u75db\u82e6\u56e0\u4e3a...",
    step4And: "\u540c\u65f6",
    step4SynthesisPlaceholder2: "\u6211\u4ecd\u7136\u53ef\u4ee5...",
    step4CausalityLabel: "\u56e0\u679c\u5173\u7cfb",
    step4CausalityPlaceholder: "\u4ec0\u4e48\u4e8b\u4ef6\u94fe\u5bfc\u81f4\u4e86\u8fd9\u4e00\u523b\uff1f",
    step5Title: "\u8f6c\u53d8\u5fc3\u610f",
    step5Desc: "\u63a5\u53d7\u4e0d\u662f\u4e00\u6b21\u6027\u7684\u51b3\u5b9a\u3002\u5b83\u662f\u4f60\u4e00\u6b21\u53c8\u4e00\u6b21\u505a\u51fa\u7684\u627f\u8bfa\u3002",
    step5Quote: "\u6211\u9009\u62e9\u63a5\u53d7\u8fd9\u4e2a\u73b0\u5b9e\u3002\u4e0d\u662f\u56e0\u4e3a\u5b83\u516c\u5e73\u3002\u4e0d\u662f\u56e0\u4e3a\u5b83\u662f\u6211\u60f3\u8981\u7684\u3002\u800c\u662f\u56e0\u4e3a\u5b83\u5c31\u662f\u8fd9\u6837\u3002\u4ece\u8fd9\u7247\u571f\u5730\u4e0a\uff0c\u6211\u53ef\u4ee5\u524d\u884c\u3002",
    step5CostLabel: "\u62b5\u6297\u7684\u4ee3\u4ef7",
    step5CostPlaceholder: "\u4e0e\u73b0\u5b9e\u6297\u4e89\u4f1a\u8ba9\u4f60\u4ed8\u51fa\u4ec0\u4e48\uff1f",
    step5BenefitLabel: "\u63a5\u53d7\u7684\u76ca\u5904",
    step5BenefitPlaceholder: "\u5f53\u4f60\u505c\u6b62\u6297\u4e89\u65f6\uff0c\u4ec0\u4e48\u53d8\u5f97\u53ef\u80fd\uff1f",
    step6Title: "\u613f\u610f\u7684\u884c\u52a8",
    step6Desc: "\u63a5\u53d7\u6ca1\u6709\u884c\u52a8\u5c31\u662f\u6d88\u6781\u3002\u4f60\u80fd\u91c7\u53d6\u7684\u4e0b\u4e00\u4e2a\u5177\u4f53\u6b65\u9aa4\u662f\u4ec0\u4e48\uff1f",
    step6Label: "\u4e0b\u4e00\u4e2a\u5177\u4f53\u6b65\u9aa4",
    step6Placeholder: "\u5728\u63a5\u4e0b\u6765\u768424\u5c0f\u65f6\u5185\uff0c\u4f60\u5c06\u91c7\u53d6\u4ec0\u4e48\u5177\u4f53\u884c\u52a8\uff1f",
    completedTitle: "\u7ec3\u4e60\u5b8c\u6210",
    completedDesc: "\u4f60\u5df2\u7ecf\u8d70\u8fc7\u4e86\u5f7b\u5e95\u63a5\u53d7\u7684\u5b8c\u6574\u5faa\u73af\u3002\u8bb0\u4f4f\uff1a\u8fd9\u662f\u4e00\u79cd\u7ec3\u4e60\uff0c\u4e0d\u662f\u7ec8\u70b9\u3002",
  },
} as const

export type Translations = (typeof translations)["en"]

interface I18nContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en")
  const t = translations[lang]

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
