"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-background px-6 pt-32 pb-24 md:px-12 lg:px-24">
      <div className="relative z-10 max-w-[1200px] text-center">
        <motion.div
          className="mb-8 inline-flex items-center rounded-full border bg-card px-4 py-2 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mr-2">📧</span>
          <span className="text-sm text-muted-foreground">We reply within 2 hours</span>
        </motion.div>
        <motion.h1
          className="mb-6 text-5xl font-normal leading-tight text-foreground md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="mx-auto mb-8 max-w-2xl text-xl font-normal text-muted-foreground md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Ready to transform your ideas into reality? We'd love to hear about your project and discuss how we can help
          you achieve your goals.
        </motion.p>

        {/* Quick Contact Options */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              icon: Phone,
              title: "Call Us",
              value: "+1 (555) 123-4567",
              description: "Mon-Fri 9AM-6PM EST",
            },
            {
              icon: Mail,
              title: "Email Us",
              value: "hello@oriums.com",
              description: "We reply within 2 hours",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              value: "San Francisco, CA",
              description: "Schedule an appointment",
            },
            {
              icon: Clock,
              title: "Response Time",
              value: "< 2 Hours",
              description: "Average response time",
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
                <p className="text-primary font-medium mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
