"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Clock } from "lucide-react"

const trustSignals = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your data is protected with enterprise-grade security",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by industry leaders for excellence",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Join our growing community of satisfied customers",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance when you need it",
  },
]

export default function TrustSignals() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Why 500+ Companies Trust Oriums</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've built our reputation on delivering exceptional results and maintaining the highest standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-xl shadow-lg border hover:shadow-xl transition-all duration-200 hover:border-primary/50"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <signal.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-card-foreground">{signal.title}</h3>
              <p className="text-sm text-muted-foreground">{signal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
