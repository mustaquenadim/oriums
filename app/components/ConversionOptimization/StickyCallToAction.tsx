"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StickyCallToAction() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 1000
      setIsVisible(scrolled && !isDismissed)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40 max-w-sm"
        >
          <div className="bg-card rounded-2xl shadow-2xl border p-6 relative backdrop-blur-sm">
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-2 right-2 p-1 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </button>

            <div className="mb-4">
              <h4 className="font-semibold mb-1 text-card-foreground">Ready to Start Your Project?</h4>
              <p className="text-sm text-muted-foreground">Get a free consultation today</p>
            </div>

            <div className="flex gap-2">
              <Button size="sm" className="flex-1 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200">
                <Phone className="w-4 h-4 mr-1" />
                Call Now
              </Button>
              <Button size="sm" variant="outline" className="flex-1 hover:bg-muted">
                <MessageCircle className="w-4 h-4 mr-1" />
                Chat
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
