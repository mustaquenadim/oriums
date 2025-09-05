"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Limited Time Offer!</span>
              </div>
              <span className="hidden sm:inline text-primary-foreground/90">Get 30% off your first project - Ends in:</span>
              <div className="flex items-center gap-2 font-bold">
                <Clock className="w-4 h-4" />
                <span>{String(timeLeft.hours).padStart(2, "0")}:</span>
                <span>{String(timeLeft.minutes).padStart(2, "0")}:</span>
                <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="secondary" size="sm" className="bg-background text-primary hover:bg-background/90 shadow-md">
                Claim Discount
              </Button>
              <button onClick={() => setIsVisible(false)} className="p-1 hover:bg-primary-foreground/20 rounded transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
