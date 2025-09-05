"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "A modern e-commerce solution with advanced analytics and inventory management.",
    image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    category: "Enterprise Software",
    description: "Comprehensive patient management system with telemedicine capabilities.",
    image: "/placeholder.svg?height=300&width=400&text=Healthcare+System",
    technologies: ["Vue.js", "Python", "MongoDB", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Financial Dashboard",
    category: "Data Visualization",
    description: "Real-time financial analytics dashboard with interactive charts and reporting.",
    image: "/placeholder.svg?height=300&width=400&text=Financial+Dashboard",
    technologies: ["Angular", "D3.js", "Express", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    category: "Mobile Application",
    description: "Cross-platform fitness tracking app with social features and AI coaching.",
    image: "/placeholder.svg?height=300&width=400&text=Fitness+App",
    technologies: ["React Native", "Firebase", "TensorFlow", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "IoT Smart Home Hub",
    category: "IoT Solution",
    description: "Centralized smart home control system with voice commands and automation.",
    image: "/placeholder.svg?height=300&width=400&text=Smart+Home+Hub",
    technologies: ["React", "Node.js", "MQTT", "AWS IoT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "AI Content Generator",
    category: "AI/ML Application",
    description: "Advanced content generation platform powered by machine learning algorithms.",
    image: "/placeholder.svg?height=300&width=400&text=AI+Content+Generator",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function PortfolioSection() {
  return (
    <section className="relative z-10 px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-foreground">Our Recent Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of our latest projects that showcase our expertise across different industries and technologies
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button asChild size="lg">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
