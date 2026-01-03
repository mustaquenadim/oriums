"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogNewsletter() {
  return (
    <section className="px-4 py-20 bg-gradient-to-r from-primary/10 to-purple-600/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Our Latest Articles
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights, tutorials, and industry news
            delivered straight to your inbox.
          </p>

          <motion.form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault()
              // Handle newsletter subscription
            }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 bg-background"
              required
            />
            <Button type="submit" size="lg" className="group">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.form>

          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
