"use client"

import { motion } from "framer-motion"
import { Search, BookOpen, TrendingUp, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BookOpen className="h-4 w-4" />
            Insights & Knowledge
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Blog
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stay updated with the latest trends, best practices, and insights from our team of experts.
            Discover actionable strategies and innovative solutions to transform your business.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles, topics, or keywords..."
                className="pl-12 pr-4 h-14 text-lg bg-card border-2 focus:border-primary"
              />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>100+ Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>50K+ Monthly Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Updated Weekly</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
