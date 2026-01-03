"use client";

import { motion } from "framer-motion";
import Beams from "@/components/Beams";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-background px-6 pt-32 pb-24 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Beams lightColor="#f97216" rotation={30} />
      </div>
      {/* Gradient blend overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
      <div className="relative z-10 max-w-[1200px] text-center">
        <motion.div
          className="mb-8 inline-flex items-center rounded-full border bg-card px-4 py-2 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mr-2">💸</span>
          <span className="mr-2 text-sm font-semibold text-card-foreground">
            100%
          </span>
          <span className="text-sm text-muted-foreground">
            money back guarantee, if you're not satisfied with our service
          </span>
        </motion.div>
        <motion.h1
          className="mb-6 text-5xl font-normal leading-tight text-foreground md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Websites designed &<br />
          built faster with AI
        </motion.h1>
        <motion.p
          className="mx-auto mb-8 max-w-2xl text-xl font-normal text-muted-foreground md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Use AI as your design ally, not as a replacement. Effortlessly
          generate sitemaps and wireframes for marketing websites in minutes.
        </motion.p>
        <motion.button
          className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
