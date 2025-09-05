"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a free 30-minute consultation",
      action: "Schedule Now",
      primary: true,
    },
    {
      icon: MessageSquare,
      title: "Start a Chat",
      description: "Get instant answers to your questions",
      action: "Chat Now",
      primary: false,
    },
    {
      icon: Phone,
      title: "Call Directly",
      description: "Speak with our team right away",
      action: "Call Now",
      primary: false,
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:30px_30px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join 500+ satisfied clients who have transformed their ideas into successful digital products with Oriums.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Available Now</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⭐</span>
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🚀</span>
              <span>2-Hour Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🛡️</span>
              <span>30-Day Guarantee</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${option.primary
                  ? "bg-white text-gray-900 shadow-2xl"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/20"
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`inline-flex p-4 rounded-full mb-4 ${option.primary ? "bg-blue-100" : "bg-white/20"}`}>
                <option.icon className={`h-8 w-8 ${option.primary ? "text-blue-600" : "text-white"}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${option.primary ? "text-gray-900" : "text-white"}`}>
                {option.title}
              </h3>
              <p className={`mb-6 ${option.primary ? "text-gray-600" : "text-blue-100"}`}>{option.description}</p>
              <Button
                className={`w-full gap-2 ${option.primary
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  }`}
                variant={option.primary ? "default" : "outline"}
              >
                {option.action}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Not sure where to start?</h3>
            <p className="text-blue-100 mb-6">
              Download our free project planning guide and get a clear roadmap for your digital transformation.
            </p>
            <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/30 gap-2">
              📥 Download Free Guide
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
