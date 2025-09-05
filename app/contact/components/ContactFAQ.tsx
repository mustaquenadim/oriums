"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircle, Clock, DollarSign, Users, Zap, Shield } from "lucide-react"

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      icon: MessageCircle,
      question: "How quickly do you respond to inquiries?",
      answer:
        "We typically respond to all inquiries within 2 hours during business hours (9 AM - 6 PM EST, Monday-Friday). For urgent matters, we offer emergency support with response times under 30 minutes.",
    },
    {
      icon: DollarSign,
      question: "Do you provide free consultations?",
      answer:
        "Yes! We offer a complimentary 30-minute consultation to discuss your project requirements, timeline, and budget. This helps us understand your needs and provide you with an accurate proposal.",
    },
    {
      icon: Clock,
      question: "What's your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      icon: Users,
      question: "Do you work with startups and small businesses?",
      answer:
        "We work with businesses of all sizes, from early-stage startups to Fortune 500 companies. We offer flexible pricing models and can scale our services to match your budget and growth stage.",
    },
    {
      icon: Zap,
      question: "Can you help with urgent or rush projects?",
      answer:
        "Yes, we can accommodate rush projects when possible. We have a dedicated rapid development team for urgent requirements. Rush projects may include additional fees, but we'll work with you to meet critical deadlines.",
    },
    {
      icon: Shield,
      question: "What if I'm not satisfied with the work?",
      answer:
        "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our work, we'll make revisions at no additional cost. We also provide a full refund policy for the first milestone if expectations aren't met.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Quick answers to common questions about working with us
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <faq.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-16">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@oriums.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Email Us
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
