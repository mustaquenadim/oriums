"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Free consultation and project estimation",
  "30-day money-back guarantee",
  "Dedicated project manager assigned",
  "Regular progress updates and demos",
  "Post-launch support and maintenance",
  "Scalable solutions that grow with you",
]

export default function ValueProposition() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 from 200+ reviews</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Transform Your Business with
              <span className="text-primary"> Expert Development</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of successful companies who've accelerated their growth with our proven development process
              and dedicated team.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 sm:flex-none">
                Start Your Project Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="flex-1 sm:flex-none bg-transparent">
                View Our Work
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Get Started Today</h3>
                <p className="text-muted-foreground">Free consultation • No commitment required</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <span className="font-medium">Free Consultation</span>
                  <span className="text-green-600 font-bold">$0</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <span className="font-medium">Project Estimation</span>
                  <span className="text-blue-600 font-bold">Free</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <span className="font-medium">30-Day Guarantee</span>
                  <span className="text-purple-600 font-bold">Included</span>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg">
                Book Free Consultation
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">No spam, unsubscribe at any time</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
