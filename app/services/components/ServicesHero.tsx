"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Zap } from "lucide-react";
import Beams from "@/components/Beams";

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Beams lightColor="#f97216" rotation={30} />
      </div>
      {/* Gradient blend overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-[1200px] text-center">
        <motion.div
          className="mb-8 inline-flex items-center rounded-full border bg-card px-4 py-2 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="mr-2 h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-card-foreground">
            Comprehensive Digital Solutions
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl font-normal leading-tight text-foreground md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform Your Business
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            With Our Services
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-xl font-normal text-muted-foreground md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From mobile apps to AI solutions, we deliver end-to-end digital services
          that drive innovation and accelerate your business growth.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="group">
            Explore Our Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Get a Quote
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="rounded-2xl border bg-card p-6 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">12+</div>
            <div className="text-sm text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
