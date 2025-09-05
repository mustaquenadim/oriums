"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Star } from "lucide-react"

const notifications = [
  { name: "Sarah M.", action: "just signed up for Mobile App Development", time: "2 minutes ago" },
  { name: "Tech Startup Inc.", action: "booked a consultation call", time: "5 minutes ago" },
  { name: "Michael R.", action: "downloaded our portfolio", time: "8 minutes ago" },
  { name: "Digital Solutions Co.", action: "requested a quote", time: "12 minutes ago" },
  { name: "Jennifer L.", action: "joined our newsletter", time: "15 minutes ago" },
]

export default function SocialProof() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-6 left-6 z-40 max-w-sm"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentNotification}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-card rounded-xl shadow-lg border p-4 relative backdrop-blur-sm"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground text-xs transition-colors"
          >
            ×
          </button>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-card-foreground">
                <span className="font-semibold">{notifications[currentNotification].name}</span>{" "}
                {notifications[currentNotification].action}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{notifications[currentNotification].time}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 mt-3 pt-3 border-t">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">Trusted by 500+ clients</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
