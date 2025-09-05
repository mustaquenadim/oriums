"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const personalizedOffers = [
  {
    trigger: "services",
    title: "Perfect! Let's Build Your Solution",
    subtitle: "Based on your interest in our services",
    cta: "Get Custom Quote",
    icon: Target,
    color: "from-primary to-primary/80",
  },
  {
    trigger: "portfolio",
    title: "Impressed? Let's Create Something Amazing",
    subtitle: "Ready to see your project come to life?",
    cta: "Start Your Project",
    icon: Sparkles,
    color: "from-primary to-primary/80",
  },
  {
    trigger: "about",
    title: "Ready to Work With Our Team?",
    subtitle: "Let's discuss how we can help your business",
    cta: "Schedule Consultation",
    icon: Zap,
    color: "from-primary to-primary/80",
  },
]

export default function PersonalizedCTA() {
  const [currentOffer, setCurrentOffer] = useState(personalizedOffers[0])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 2000
      setIsVisible(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 max-w-md mx-4"
    >
      <div className={`bg-gradient-to-r ${currentOffer.color} p-1 rounded-2xl shadow-2xl`}>
        <div className="bg-card rounded-xl p-6 backdrop-blur-sm">
          <div className="text-center">
            <div
              className={`w-12 h-12 bg-gradient-to-r ${currentOffer.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
            >
              <currentOffer.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-card-foreground">{currentOffer.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{currentOffer.subtitle}</p>
            <Button className="w-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200" size="lg">
              {currentOffer.cta}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
