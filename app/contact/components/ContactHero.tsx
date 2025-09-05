"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            Ready to transform your ideas into reality? We'd love to hear about your project and discuss how we can help
            you achieve your goals.
          </p>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
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
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{item.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
