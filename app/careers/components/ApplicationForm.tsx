"use client"

import { motion } from "framer-motion"
import { Upload, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ApplicationForm() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-mono mb-4">Ready to Apply?</h2>
          <p className="text-xl text-gray-600">
            Take the first step towards joining our amazing team. We'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                  First Name *
                </label>
                <Input id="first-name" required />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                  Last Name *
                </label>
                <Input id="last-name" required />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input id="phone" type="tel" />
              </div>
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium mb-2">
                Position Applied For *
              </label>
              <Input id="position" placeholder="e.g., Senior Full Stack Developer" required />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium mb-2">
                Years of Experience
              </label>
              <Input id="experience" placeholder="e.g., 5 years" />
            </div>

            <div>
              <label htmlFor="cover-letter" className="block text-sm font-medium mb-2">
                Cover Letter *
              </label>
              <Textarea
                id="cover-letter"
                rows={6}
                placeholder="Tell us why you'd be a great fit for this position..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Resume *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">
                  <span className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">Click to upload</span>{" "}
                  or drag and drop
                </p>
                <p className="text-sm text-gray-500">PDF, DOC, or DOCX (max. 10MB)</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Portfolio (Optional)</label>
              <Input placeholder="Link to your portfolio, GitHub, or LinkedIn" />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                I consent to the processing of my personal data for recruitment purposes and agree to the{" "}
                <a href="/privacy" className="text-blue-600 hover:text-blue-500">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <Button type="submit" size="lg" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Submit Application
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
