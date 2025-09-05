"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Users, Rocket, Code, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with cutting-edge technologies for blazing fast user experiences.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Enterprise-grade security measures built into every layer of your application.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Intuitive interfaces designed with your users' needs and behaviors in mind.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Architecture that grows with your business, from startup to enterprise scale.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Maintainable, well-documented code following industry best practices and standards.",
  },
  {
    icon: Globe,
    title: "Global Ready",
    description: "Multi-language support and global deployment capabilities for worldwide reach.",
  },
]

export default function FeaturesGrid() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-mono mb-4">Why Choose Our Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver exceptional digital experiences through innovative technology and user-centered design
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-8 bg-card rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
