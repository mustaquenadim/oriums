"use client"

import { useState, useEffect } from "react"
import ContactHero from "./components/ContactHero"
import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"
import OfficeMap from "./components/OfficeMap"
import ContactFAQ from "./components/ContactFAQ"
import ContactCTA from "./components/ContactCTA"
import CustomCursor from "../components/CustomCursor"
import BackgroundGrid from "../components/BackgroundGrid"

export default function ContactPage() {
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseEnter = () => setCursorVariant("hover")
    const handleMouseLeave = () => setCursorVariant("default")

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* <CustomCursor variant={cursorVariant} /> */}
      {/* <BackgroundGrid /> */}

      <ContactHero />

      <div className="relative">
        {/* Contact Form and Info Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* Office Map Section */}
        <OfficeMap />

        {/* FAQ Section */}
        <ContactFAQ />

        {/* CTA Section */}
        <ContactCTA />
      </div>
    </main>
  )
}
