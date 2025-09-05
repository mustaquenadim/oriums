"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Award, Globe, Rocket, Building } from "lucide-react"

export default function CompanyHistory() {
  const milestones = [
    {
      year: "2012",
      title: "Company Founded",
      description:
        "Started as a small team of 3 passionate developers with a vision to transform businesses through technology.",
      icon: Building,
      stats: "3 Team Members",
    },
    {
      year: "2015",
      title: "First Major Client",
      description:
        "Secured our first enterprise client and delivered a groundbreaking e-commerce platform that increased their sales by 300%.",
      icon: Rocket,
      stats: "15 Team Members",
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Opened our first international office and began serving clients across North America and Europe.",
      icon: Globe,
      stats: "25 Team Members",
    },
    {
      year: "2020",
      title: "Industry Recognition",
      description:
        "Won 'Best Digital Agency' award and achieved ISO 27001 certification for information security management.",
      icon: Award,
      stats: "35 Team Members",
    },
    {
      year: "2022",
      title: "AI & Blockchain Focus",
      description:
        "Expanded our expertise into AI/ML and blockchain technologies, becoming early adopters in emerging tech.",
      icon: Users,
      stats: "45 Team Members",
    },
    {
      year: "2024",
      title: "Global Leadership",
      description:
        "Reached 500+ successful projects and established ourselves as a leading custom software development agency.",
      icon: Calendar,
      stats: "50+ Team Members",
    },
  ]

  return (
    <section className="relative z-10 px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a small startup to a global leader, here's how we've grown and evolved over the years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden lg:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:gap-16`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden lg:block" />

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center`}>
                  <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div
                      className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"} justify-center`}
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                        <milestone.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                        <div className="text-sm text-muted-foreground">{milestone.stats}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-full lg:w-5/12 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
