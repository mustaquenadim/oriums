"use client"

import { motion } from "framer-motion"
import { Users, Award, Globe, Clock, Shield, TrendingUp } from "lucide-react"

export default function CompanyStats() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries",
    },
    {
      icon: Globe,
      value: "30+",
      label: "Countries Served",
      description: "Global reach with local expertise",
    },
    {
      icon: Award,
      value: "25+",
      label: "Industry Awards",
      description: "Recognition for excellence and innovation",
    },
    {
      icon: Clock,
      value: "99%",
      label: "On-Time Delivery",
      description: "Consistent project delivery within deadlines",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Security Compliance",
      description: "ISO 27001 certified and GDPR compliant",
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average ROI",
      description: "Return on investment for our clients",
    },
  ]

  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These metrics reflect our commitment to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group text-center p-8 bg-card border rounded-2xl hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>

              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-8">Certifications & Partnerships</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm font-medium">ISO 27001 Certified</div>
            <div className="w-px h-6 bg-border" />
            <div className="text-sm font-medium">GDPR Compliant</div>
            <div className="w-px h-6 bg-border" />
            <div className="text-sm font-medium">SOC 2 Type II</div>
            <div className="w-px h-6 bg-border" />
            <div className="text-sm font-medium">AWS Partner</div>
            <div className="w-px h-6 bg-border" />
            <div className="text-sm font-medium">Google Cloud Partner</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
