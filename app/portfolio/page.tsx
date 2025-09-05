"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Calendar, Users, Code, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BackgroundGrid from "../components/BackgroundGrid"

const projects = [
  {
    id: 1,
    title: "FinTech Mobile Banking App",
    slug: "fintech-mobile-banking",
    category: "Mobile Development",
    tags: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A comprehensive mobile banking solution with advanced security features and intuitive user experience.",
    challenge:
      "Creating a secure, user-friendly banking app that meets strict financial regulations while providing seamless user experience.",
    solution:
      "Implemented biometric authentication, end-to-end encryption, and real-time transaction monitoring with a clean, accessible interface.",
    results: ["50% increase in user engagement", "99.9% uptime achieved", "40% reduction in support tickets"],
    duration: "8 months",
    teamSize: "12 developers",
    client: "SecureBank Corp",
    testimonial: "Oriums delivered beyond our expectations. The app has transformed our customer experience.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 2,
    title: "E-Commerce Platform Redesign",
    slug: "ecommerce-platform",
    category: "Web Development",
    tags: ["Next.js", "Stripe", "MongoDB", "Vercel"],
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete redesign and development of a high-performance e-commerce platform with advanced analytics.",
    challenge:
      "Modernizing a legacy e-commerce system while maintaining existing functionality and improving performance.",
    solution:
      "Built a new platform using modern technologies with improved UX/UI, faster load times, and better SEO optimization.",
    results: ["300% increase in conversion rate", "60% faster page load times", "150% increase in mobile sales"],
    duration: "6 months",
    teamSize: "8 developers",
    client: "RetailMax Inc",
    testimonial: "The new platform has revolutionized our online presence and significantly boosted our sales.",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    slug: "healthcare-management",
    category: "Web Development",
    tags: ["React", "Python", "Django", "PostgreSQL"],
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Comprehensive healthcare management system for hospitals and clinics with patient tracking and analytics.",
    challenge: "Developing HIPAA-compliant software that streamlines hospital operations while ensuring data security.",
    solution:
      "Created a secure, scalable system with role-based access, automated workflows, and comprehensive reporting.",
    results: ["70% reduction in administrative time", "95% user satisfaction rate", "100% HIPAA compliance"],
    duration: "10 months",
    teamSize: "15 developers",
    client: "MedCare Solutions",
    testimonial: "This system has transformed how we manage patient care and hospital operations.",
  },
  {
    id: 4,
    title: "AI-Powered Analytics Dashboard",
    slug: "ai-analytics-dashboard",
    category: "AI/ML",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    image: "/placeholder.svg?height=400&width=600",
    description: "Advanced analytics dashboard with machine learning capabilities for business intelligence.",
    challenge:
      "Creating an intuitive interface for complex AI-driven analytics that non-technical users can understand.",
    solution: "Developed interactive visualizations with natural language insights and predictive analytics features.",
    results: [
      "85% improvement in decision-making speed",
      "200% increase in data utilization",
      "90% user adoption rate",
    ],
    duration: "7 months",
    teamSize: "10 developers",
    client: "DataTech Analytics",
    testimonial: "The AI insights have given us a competitive edge we never had before.",
  },
  {
    id: 5,
    title: "Blockchain Supply Chain Tracker",
    slug: "blockchain-supply-chain",
    category: "Blockchain",
    tags: ["Solidity", "Web3.js", "React", "IPFS"],
    image: "/placeholder.svg?height=400&width=600",
    description: "Decentralized supply chain tracking system ensuring transparency and authenticity.",
    challenge: "Building a transparent, tamper-proof system for tracking products across complex supply chains.",
    solution: "Implemented smart contracts for automated verification and IPFS for decentralized data storage.",
    results: ["100% product traceability", "80% reduction in fraud", "50% faster verification process"],
    duration: "9 months",
    teamSize: "6 developers",
    client: "GlobalTrade Corp",
    testimonial: "This blockchain solution has revolutionized our supply chain transparency.",
  },
  {
    id: 6,
    title: "Real Estate CRM Platform",
    slug: "real-estate-crm",
    category: "Web Development",
    tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
    image: "/placeholder.svg?height=400&width=600",
    description: "Comprehensive CRM platform for real estate agencies with lead management and automation.",
    challenge: "Creating a unified platform to manage leads, properties, and client relationships efficiently.",
    solution: "Built an integrated CRM with automated workflows, property matching, and communication tools.",
    results: ["45% increase in lead conversion", "60% time savings in admin tasks", "90% client satisfaction"],
    duration: "5 months",
    teamSize: "7 developers",
    client: "PropertyPro Realty",
    testimonial: "Our productivity has skyrocketed since implementing this CRM system.",
  },
]

const categories = ["All", "Web Development", "Mobile Development", "AI/ML", "Blockchain"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <BackgroundGrid /> */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our latest projects and see how we've helped businesses transform their digital presence with
              innovative solutions.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>500+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>200+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>50+ Technologies</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/portfolio/${project.slug}`}>
                    <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2">
                            {project.liveUrl && (
                              <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                                <ExternalLink className="w-4 h-4" />
                              </button>
                            )}
                            {project.githubUrl && (
                              <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                                <Github className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{project.duration}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-xs text-muted-foreground">+{project.tags.length - 3} more</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project →
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  className="border border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
