"use client";

import { motion } from "framer-motion";
import { Users, Heart, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Heart, value: "95%", label: "Employee Satisfaction" },
  { icon: Zap, value: "12+", label: "Years of Innovation" },
];

export default function CareersHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24 md:px-12 lg:px-24">
      <div className="relative z-10 max-w-[1200px] text-center">
        <motion.div
          className="mb-8 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-primary">
            Join Our Team
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 font-mono text-5xl font-normal leading-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Build Your Career
          <br />
          <span className="text-primary">With Oriums</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-xl font-normal text-gray-600 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join a team of passionate innovators who are shaping the future of
          technology. We're looking for talented individuals who share our
          vision of creating exceptional digital solutions.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-gray-200 bg-card p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
