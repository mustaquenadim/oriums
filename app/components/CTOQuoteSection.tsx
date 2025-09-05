"use client"

import { motion } from "framer-motion"
import { Code2, Github, Linkedin as LinkedIn, Cpu, Zap, Shield } from "lucide-react"

export default function CTOQuoteSection() {
  return (
    <section className="relative z-10 px-6 py-24 bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Background Tech Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rounded-lg rotate-12" />
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-primary rounded-full" />
          <div className="absolute bottom-20 left-32 w-28 h-28 border-2 border-primary rounded-lg -rotate-12" />
          <div className="absolute bottom-32 right-10 w-20 h-20 border-2 border-primary rounded-full" />
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Design Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full opacity-30 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full opacity-30 blur-3xl" />
          </div>

          <div className="relative bg-card rounded-3xl shadow-2xl border overflow-hidden">
            {/* Tech Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
              <Code2 className="w-8 h-8 text-primary-foreground" />
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* CTO Image */}
              <motion.div
                className="relative lg:h-auto h-96"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Michael Chen, CTO of Oriums"
                  className="w-full h-full object-cover"
                />

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-20 h-20 border-4 border-white/80 rounded-full opacity-60" />
                <div className="absolute bottom-8 right-8 w-16 h-16 border-4 border-white/80 rounded-full opacity-80" />

                {/* Tech Stack Badge */}
                <div className="absolute top-8 right-8 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-xs text-muted-foreground">Tech Stacks</div>
                  </div>
                </div>

                {/* Innovation Badge */}
                <div className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground">Innovations</div>
                  </div>
                </div>
              </motion.div>

              {/* Quote Content */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-6 border">
                      Technical Vision
                    </span>
                    <blockquote className="text-2xl lg:text-3xl font-light text-card-foreground leading-relaxed mb-8">
                      "Technology is not just about writing code – it's about architecting the future. At Oriums, we
                      leverage cutting-edge technologies like AI, blockchain, and cloud computing to create solutions
                      that don't just meet today's needs, but anticipate tomorrow's challenges."
                    </blockquote>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-semibold text-card-foreground mb-1">Michael Chen</div>
                      <div className="text-primary font-medium mb-2">CTO & Co-Founder, Oriums</div>
                      <div className="text-sm text-muted-foreground">15+ years in enterprise architecture</div>
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
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-2 bg-gradient-to-r from-primary via-primary/80 to-primary" />
          </div>

          {/* Technical Expertise */}
          <motion.div
            className="mt-16 grid gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-xl group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">AI & Machine Learning</h3>
              <p className="text-muted-foreground text-sm">
                Implementing intelligent solutions that learn and adapt to business needs
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-xl group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Blockchain & Security</h3>
              <p className="text-muted-foreground text-sm">
                Building secure, decentralized systems with enterprise-grade protection
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-xl group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Cloud Architecture</h3>
              <p className="text-muted-foreground text-sm">
                Designing scalable, resilient cloud infrastructure for modern applications
              </p>
            </div>
          </motion.div>

          {/* Tech Stats */}
          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="p-6 bg-card rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">APIs Built</div>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-primary mb-1">5TB+</div>
              <div className="text-sm text-muted-foreground">Data Processed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
