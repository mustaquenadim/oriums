"use client"

import { motion } from "framer-motion"
import { Quote, Linkedin as LinkedIn, Twitter } from "lucide-react"

export default function CEOQuoteSection() {
  return (
    <section className="relative z-10 px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Design Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full opacity-20 blur-3xl" />
          </div>

          <div className="relative bg-card rounded-3xl shadow-2xl border overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary-foreground rotate-180" />
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Quote Content */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-6">
                      Leadership Vision
                    </span>
                    <blockquote className="text-2xl lg:text-3xl font-light text-card-foreground leading-relaxed mb-8">
                      "At Oriums, we don't just build software – we craft digital experiences that transform businesses
                      and empower people. Our commitment to innovation, quality, and client success drives everything we
                      do. We believe that technology should be a bridge to possibilities, not a barrier to progress."
                    </blockquote>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-semibold text-card-foreground mb-1">Sarah Johnson</div>
                      <div className="text-primary font-medium mb-2">CEO & Founder, Oriums</div>
                      <div className="text-sm text-muted-foreground">12+ years in software development</div>
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        href="#"
                        className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <LinkedIn className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="#"
                        className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center text-background shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CEO Image */}
              <motion.div
                className="relative lg:h-auto h-96"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-10" />
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Sarah Johnson, CEO of Oriums"
                  className="w-full h-full object-cover"
                />

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-20 h-20 border-4 border-white rounded-full opacity-20" />
                <div className="absolute bottom-8 left-8 w-16 h-16 border-4 border-white rounded-full opacity-30" />

                {/* Achievement Badge */}
                <div className="absolute bottom-8 right-8 bg-card rounded-2xl p-4 shadow-lg border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">Projects Led</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Accent */}
            <div className="h-2 bg-gradient-to-r from-primary via-primary/80 to-primary" />
          </div>

          {/* Company Values */}
          <motion.div
            className="mt-16 grid gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Innovation First</h3>
              <p className="text-muted-foreground text-sm">
                Embracing cutting-edge technologies to deliver tomorrow's solutions today
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Client Success</h3>
              <p className="text-muted-foreground text-sm">
                Your success is our success - we're committed to exceeding expectations
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Quality Excellence</h3>
              <p className="text-muted-foreground text-sm">Maintaining the highest standards in every line of code we write</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
