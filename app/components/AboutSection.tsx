"use client"

import { motion } from "framer-motion"
import { Code2, Users, Rocket, Trophy } from "lucide-react"

const stats = [
  {
    icon: Code2,
    value: "500+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: "50+",
    label: "Team Members",
  },
  {
    icon: Rocket,
    value: "12+",
    label: "Years Experience",
  },
  {
    icon: Trophy,
    value: "25+",
    label: "Industry Awards",
  },
]

export default function AboutSection() {
  return (
    <section className="relative z-10 bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border bg-secondary px-4 py-2">
              <span className="text-sm font-semibold text-secondary-foreground">Who We Are</span>
            </div>

            <h2 className="text-4xl leading-tight text-foreground">
              Transforming Ideas into
              <span className="block text-primary">Powerful Digital Solutions</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              We are a dynamic team of passionate software developers, designers, and technology experts dedicated to
              crafting innovative digital solutions. With over a decade of experience, we've helped businesses across
              various industries transform their digital presence and streamline their operations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-1">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Agile development methodology for faster, more efficient delivery</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-1">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Dedicated team of experts with diverse technical expertise</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-1">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Customer-centric approach with focus on long-term partnerships</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group rounded-2xl border bg-card p-8 text-center shadow-lg hover:border-primary/50 transition-all duration-200 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
