"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Globe, Users, Award, Zap } from "lucide-react"

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "Mon-Fri 9AM-6PM EST",
      action: "Call Now",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "hello@oriums.com",
      secondary: "We reply within 2 hours",
      action: "Send Email",
      href: "mailto:hello@oriums.com",
    },
    {
      icon: MapPin,
      title: "Office",
      primary: "123 Innovation Street",
      secondary: "San Francisco, CA 94105",
      action: "Get Directions",
      href: "#map",
    },
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  const quickStats = [
    { icon: Users, label: "Team Members", value: "50+" },
    { icon: Globe, label: "Countries Served", value: "30+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Zap, label: "Response Time", value: "<2hrs" },
  ]

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Contact Methods */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <method.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{method.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{method.primary}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{method.secondary}</p>
                  <span className="text-sm text-blue-600 dark:text-blue-400 group-hover:underline">
                    {method.action} →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center mb-4">
          <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Business Hours</h3>
        </div>
        <div className="space-y-2">
          {businessHours.map((schedule, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
            >
              <span className="text-gray-600 dark:text-gray-300">{schedule.day}</span>
              <span className="font-medium text-gray-900 dark:text-white">{schedule.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-300">🟢 Currently available for urgent inquiries</p>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Why Choose Oriums?</h3>
        <div className="grid grid-cols-2 gap-4">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">🚨 Emergency Support</h3>
        <p className="text-red-700 dark:text-red-400 text-sm mb-3">
          For critical issues with existing projects outside business hours:
        </p>
        <a
          href="tel:+15551234999"
          className="inline-flex items-center text-red-600 dark:text-red-400 font-medium hover:underline"
        >
          <Phone className="h-4 w-4 mr-2" />
          +1 (555) 123-4999
        </a>
      </motion.div>
    </motion.div>
  )
}
