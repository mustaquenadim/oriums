"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-background px-6 pt-32 pb-24 md:px-12 lg:px-24">
      <div className="relative z-10 max-w-[1200px] text-center">
        <motion.div
          className="mb-8 inline-flex items-center rounded-full border bg-card px-4 py-2 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Shield className="mr-2 h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </motion.div>
        <motion.h1
          className="mb-6 text-5xl font-normal leading-tight text-foreground md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          className="mx-auto mb-8 max-w-2xl text-xl font-normal text-muted-foreground md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </motion.p>

        {/* Privacy Highlights */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              icon: Shield,
              title: "Data Protection",
              description: "We use industry-standard encryption to protect your data",
            },
            {
              icon: Lock,
              title: "Secure Storage",
              description: "Your information is stored securely and never shared",
            },
            {
              icon: Eye,
              title: "Transparency",
              description: "We're clear about what data we collect and why",
            },
            {
              icon: FileText,
              title: "Your Rights",
              description: "You have full control over your personal information",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
