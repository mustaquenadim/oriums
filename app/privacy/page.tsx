"use client"

import PrivacyHero from "./components/PrivacyHero"
import PrivacyContent from "./components/PrivacyContent"

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <PrivacyHero />
      <PrivacyContent />
    </main>
  )
}
