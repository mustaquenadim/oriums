"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageSquare,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react"

const workflowSteps = [
  {
    id: 1,
    title: "Discovery & Planning",
    subtitle: "Understanding Your Vision",
    icon: MessageSquare,
    description:
      "We start by deeply understanding your business goals, target audience, and project requirements through comprehensive consultations.",
    details: [
      "Stakeholder interviews and requirement gathering",
      "Market research and competitor analysis",
      "Technical feasibility assessment",
      "Project scope and timeline definition",
    ],
    color: "bg-blue-500",
    duration: "1-2 weeks",
  },
  {
    id: 2,
    title: "Design & Architecture",
    subtitle: "Crafting the Blueprint",
    icon: Lightbulb,
    description:
      "Our design team creates intuitive user experiences while our architects plan the technical foundation for scalable solutions.",
    details: [
      "User experience (UX) research and wireframing",
      "Visual design and brand integration",
      "System architecture and database design",
      "Technology stack selection",
    ],
    color: "bg-purple-500",
    duration: "2-3 weeks",
  },
  {
    id: 3,
    title: "Development",
    subtitle: "Building Your Solution",
    icon: Code,
    description:
      "Using agile methodologies, our development team brings your project to life with clean, maintainable, and scalable code.",
    details: [
      "Sprint planning and iterative development",
      "Regular code reviews and quality assurance",
      "Continuous integration and deployment",
      "Weekly progress updates and demos",
    ],
    color: "bg-green-500",
    duration: "4-12 weeks",
  },
  {
    id: 4,
    title: "Testing & QA",
    subtitle: "Ensuring Excellence",
    icon: TestTube,
    description:
      "Comprehensive testing ensures your solution is bug-free, secure, and performs optimally across all platforms and devices.",
    details: [
      "Automated and manual testing procedures",
      "Performance and security testing",
      "Cross-platform compatibility checks",
      "User acceptance testing (UAT)",
    ],
    color: "bg-orange-500",
    duration: "1-2 weeks",
  },
  {
    id: 5,
    title: "Launch & Support",
    subtitle: "Going Live Successfully",
    icon: Rocket,
    description:
      "We handle the deployment process and provide ongoing support to ensure your solution continues to perform at its best.",
    details: [
      "Production deployment and monitoring",
      "Team training and documentation",
      "Post-launch support and maintenance",
      "Performance optimization and updates",
    ],
    color: "bg-red-500",
    duration: "Ongoing",
  },
]

const methodologies = [
  {
    icon: Users,
    title: "Agile Development",
    description: "Iterative approach with regular feedback loops",
  },
  {
    icon: Calendar,
    title: "Sprint Planning",
    description: "2-week sprints with clear deliverables",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Continuous testing and code reviews",
  },
]

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  // Start auto-play after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100
        }
        return prev + 1
      })
    }, 80) // Slower progress for better visibility

    return () => clearInterval(interval)
  }, [isAutoPlaying, activeStep])

  // Handle step progression when progress reaches 100%
  useEffect(() => {
    if (progress >= 100 && isAutoPlaying) {
      const timeout = setTimeout(() => {
        setActiveStep((current) => {
          const nextStep = current >= workflowSteps.length ? 1 : current + 1
          return nextStep
        })
        setProgress(0)
      }, 500) // Brief pause before moving to next step

      return () => clearTimeout(timeout)
    }
  }, [progress, isAutoPlaying])

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId)
    setProgress(0)
    setIsAutoPlaying(false)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
    if (!isAutoPlaying) {
      setProgress(0) // Reset progress when starting auto-play
    }
  }

  return (
    <section className="relative z-10 px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-foreground">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery through collaboration, transparency, and
            excellence
          </p>
        </motion.div>

        {/* Interactive Workflow Visualization */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <button
              onClick={toggleAutoPlay}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isAutoPlaying ? "Pause" : "Play"} Tour
            </button>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              {/* <div className="absolute top-20 left-0 right-0 h-1 bg-gray-200 rounded-full">
                <motion.div
                  className="h-full bg-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((activeStep - 1) / (workflowSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div> */}

              {/* Timeline Steps */}
              <div className="flex justify-between items-start">
                {workflowSteps.map((step) => (
                  <motion.div
                    key={step.id}
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => handleStepClick(step.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Step Circle */}
                    <div
                      className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${activeStep === step.id
                        ? `${step.color} text-white shadow-lg scale-110`
                        : "bg-card border-2 border hover:border-primary"
                        }`}
                    >
                      <step.icon className="w-8 h-8" />
                      {activeStep === step.id && isAutoPlaying && (
                        <div className="absolute inset-0 rounded-full border-4 border-white">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="rgba(255,255,255,0.3)"
                              strokeWidth="2"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeDasharray={`${progress}, 100`}
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Step Info */}
                    <div className="mt-4 text-center max-w-32">
                      <h3
                        className={`text-sm font-semibold transition-colors ${activeStep === step.id ? "text-primary" : "text-muted-foreground"
                          }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">{step.duration}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-4">
            {workflowSteps.map((step) => (
              <motion.div
                key={step.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${activeStep === step.id
                  ? "border-primary bg-primary/10"
                  : "border bg-card hover:border-primary/50"
                  }`}
                onClick={() => handleStepClick(step.id)}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep === step.id ? step.color + " text-white" : "bg-muted text-muted-foreground"
                      }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <AnimatePresence mode="wait">
          {workflowSteps[activeStep - 1] && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 lg:grid-cols-2 mb-16"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${workflowSteps[activeStep - 1].color} text-white flex items-center justify-center`}
                  >
                    {React.createElement(workflowSteps[activeStep - 1].icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{workflowSteps[activeStep - 1].title}</h3>
                    <p className="text-primary font-medium">{workflowSteps[activeStep - 1].subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg mb-6">{workflowSteps[activeStep - 1].description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Duration: {workflowSteps[activeStep - 1].duration}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-card-foreground">Key Activities</h4>
                <ul className="space-y-3">
                  {workflowSteps[activeStep - 1].details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Our Methodologies</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {methodologies.map((methodology) => (
              <motion.div
                key={methodology.title}
                className="text-center p-6 bg-card rounded-2xl shadow-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-xl group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <methodology.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-card-foreground">{methodology.title}</h4>
                <p className="text-muted-foreground">{methodology.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6">Let's discuss how our proven process can bring your vision to life</p>
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
