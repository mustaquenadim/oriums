"use client"

import { motion } from "framer-motion"
import { FileText, Users, MessageSquare, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Send us your resume and cover letter through our application form.",
  },
  {
    icon: Users,
    title: "Initial Screening",
    description: "Our HR team will review your application and contact you within 3-5 business days.",
  },
  {
    icon: MessageSquare,
    title: "Technical Interview",
    description: "Meet with our technical team to discuss your skills and experience.",
  },
  {
    icon: CheckCircle,
    title: "Final Decision",
    description: "We'll make our decision and get back to you with next steps.",
  },
]

export default function ApplicationProcess() {
  return (
    <section className="relative z-10 px-6 py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-mono mb-4">Application Process</h2>
          <p className="text-xl text-gray-600">Here's what you can expect when you apply to join our team</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative mb-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-blue-600 text-sm font-bold text-blue-600">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-8" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
