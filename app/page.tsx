"use client"

import { useState, useEffect } from "react"
import TopBanner from "./components/TopBanner"
import Hero from "./components/Hero"
import CustomCursor from "./components/CustomCursor"
import BackgroundGrid from "./components/BackgroundGrid"
import ServicesSection from "./components/ServicesSection"
import AboutSection from "./components/AboutSection"
import TechStackSection from "./components/TechStackSection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"
import WhyNotChooseUsSection from "./components/WhyNotChooseUsSection"
import HowWeWorkSection from "./components/HowWeWorkSection"
import ComparisonTable from "./components/ComparisonTable"
import CEOQuoteSection from "./components/CEOQuoteSection"
import CTOQuoteSection from "./components/CTOQuoteSection"
import PortfolioSection from "./components/PortfolioSection"
import TestimonialsSection from "./components/TestimonialsSection"
import FaqSection from "./components/FaqSection"
import BlogSection from "./components/BlogSection"
import ContactSection from "./components/ContactSection"
import Reveal from "./components/Reveal"

// Conversion Optimization Components
import ExitIntentPopup from "./components/ConversionOptimization/ExitIntentPopup"
import StickyCallToAction from "./components/ConversionOptimization/StickyCallToAction"
import SocialProof from "./components/ConversionOptimization/SocialProof"
import UrgencyBanner from "./components/ConversionOptimization/UrgencyBanner"
import PersonalizedCTA from "./components/ConversionOptimization/PersonalizedCTA"
import TrustSignals from "./components/ConversionOptimization/TrustSignals"
import ValueProposition from "./components/ConversionOptimization/ValueProposition"

export default function Home() {
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

      {/* Conversion Optimization Elements */}
      {/* <UrgencyBanner /> */}
      <ExitIntentPopup />
      <StickyCallToAction />
      <SocialProof />
      {/* <PersonalizedCTA /> */}

      {/* Main Content */}
      {/* <TopBanner /> */}
      <Hero />
      <Reveal delay={0.1}>
        <AboutSection />
      </Reveal>
      {/* <TrustSignals /> */}
      <Reveal delay={0.2}>
        <ServicesSection />
      </Reveal>
      <Reveal delay={0.1}>
        <TechStackSection />
      </Reveal>
      <Reveal delay={0.2}>
        <WhyChooseUsSection />
      </Reveal>
      <Reveal delay={0.1}>
        <WhyNotChooseUsSection />
      </Reveal>
      <Reveal delay={0.2}>
        <ValueProposition />
      </Reveal>
      <Reveal delay={0.1}>
        <HowWeWorkSection />
      </Reveal>
      <Reveal delay={0.2}>
        <ComparisonTable />
      </Reveal>
      <Reveal delay={0.1}>
        <CEOQuoteSection />
      </Reveal>
      <Reveal delay={0.2}>
        <CTOQuoteSection />
      </Reveal>
      <Reveal delay={0.1}>
        <PortfolioSection />
      </Reveal>
      <Reveal delay={0.2}>
        <TestimonialsSection />
      </Reveal>
      <Reveal delay={0.1}>
        <FaqSection />
      </Reveal>
      <Reveal delay={0.2}>
        <BlogSection />
      </Reveal>
      <Reveal delay={0.1}>
        <ContactSection />
      </Reveal>
    </main>
  )
}
