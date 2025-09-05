"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Globe } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award className="h-4 w-4" />
              Award-Winning Digital Agency
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Excellence
              </span>{" "}
              Since 2012
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are a passionate team of innovators, designers, and developers dedicated to transforming businesses
              through cutting-edge technology solutions. Our mission is to bridge the gap between imagination and
              reality.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button size="lg" className="group">
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Our Story
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image Placeholder */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm" />
              <img
                src="/placeholder.svg?height=500&width=500&text=Team+Photo"
                alt="Oriums Team"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-card border rounded-xl p-6 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mx-auto mb-2">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs text-muted-foreground">Team Members</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mx-auto mb-2">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-xs text-muted-foreground">Awards</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mx-auto mb-2">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">30+</div>
                    <div className="text-xs text-muted-foreground">Countries</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
