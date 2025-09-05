"use client"

import { motion } from "framer-motion"
import {
  Smartphone,
  Palette,
  Paintbrush,
  PenTool,
  Globe,
  Database,
  Blocks,
  Cpu,
  Brain,
  Megaphone,
  Cloud,
  Headphones,
} from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps Development",
    description:
      "Native and cross-platform mobile applications built with cutting-edge technologies for iOS and Android.",
  },
  {
    icon: Palette,
    title: "Product Design (UI/UX)",
    description: "User-centered design solutions that create meaningful and seamless experiences across all platforms.",
  },
  {
    icon: Paintbrush,
    title: "Branding",
    description:
      "Strategic brand identity development that helps businesses stand out and connect with their audience.",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Creative visual solutions that communicate your message effectively and elevate your brand presence.",
  },
  {
    icon: Globe,
    title: "Web Apps Development",
    description: "Scalable and responsive web applications built with modern frameworks and best practices.",
  },
  {
    icon: Database,
    title: "Web Systems",
    description: "Custom web-based systems and enterprise solutions that streamline business operations.",
  },
  {
    icon: Blocks,
    title: "Blockchain Development",
    description: "Secure and decentralized blockchain solutions for various industries and use cases.",
  },
  {
    icon: Cpu,
    title: "IoT Development",
    description: "Connected device solutions that bridge the physical and digital worlds for smarter operations.",
  },
  {
    icon: Brain,
    title: "AI and Machine Learning",
    description: "Intelligent solutions that leverage advanced algorithms to automate and optimize processes.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Services",
    description: "Data-driven marketing strategies that help businesses grow their online presence and reach.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud solutions and infrastructure management for optimal performance and reliability.",
  },
  {
    icon: Headphones,
    title: "IT Consulting and Support",
    description: "Expert guidance and technical support to help businesses navigate their digital transformation.",
  },
]

export default function ServicesSection() {
  return (
    <section className="relative z-10 px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and drive innovation
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-8 bg-card rounded-2xl shadow-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
