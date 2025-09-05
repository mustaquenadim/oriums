"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CEO",
      company: "TechFlow Solutions",
      image: "/placeholder.svg?height=80&width=80&text=JM",
      content:
        "Oriums transformed our entire digital infrastructure. Their team's expertise in cloud architecture and AI integration helped us reduce operational costs by 40% while improving performance.",
      rating: 5,
      project: "Cloud Migration & AI Integration",
    },
    {
      name: "Robert Chen",
      role: "CTO",
      company: "FinanceFirst",
      image: "/placeholder.svg?height=80&width=80&text=RC",
      content:
        "The mobile banking app they developed exceeded all our expectations. The security features and user experience are outstanding. We've seen a 250% increase in mobile user engagement.",
      rating: 5,
      project: "Mobile Banking Application",
    },
    {
      name: "Sarah Williams",
      role: "Founder",
      company: "EcoMarket",
      image: "/placeholder.svg?height=80&width=80&text=SW",
      content:
        "Working with Oriums was a game-changer for our e-commerce platform. Their attention to detail and innovative approach helped us achieve a 300% increase in conversion rates.",
      rating: 5,
      project: "E-commerce Platform Redesign",
    },
    {
      name: "David Thompson",
      role: "VP of Operations",
      company: "HealthTech Pro",
      image: "/placeholder.svg?height=80&width=80&text=DT",
      content:
        "The healthcare management system they built is incredibly robust and user-friendly. It has streamlined our operations and improved patient care significantly.",
      rating: 5,
      project: "Healthcare Management System",
    },
    {
      name: "Maria Rodriguez",
      role: "Marketing Director",
      company: "RetailMax",
      image: "/placeholder.svg?height=80&width=80&text=MR",
      content:
        "Their blockchain-based supply chain solution provided complete transparency and traceability. It's revolutionized how we manage our inventory and build customer trust.",
      rating: 5,
      project: "Blockchain Supply Chain",
    },
    {
      name: "James Wilson",
      role: "Head of IT",
      company: "EduTech Global",
      image: "/placeholder.svg?height=80&width=80&text=JW",
      content:
        "The learning management platform they developed is intuitive and scalable. It's helped us reach over 100,000 students worldwide with seamless performance.",
      rating: 5,
      project: "Learning Management Platform",
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
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with Oriums.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          className="grid gap-8 md:grid-cols-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-card border rounded-xl">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-3xl font-bold mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-card border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-card border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Client Retention Rate</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="h-8 w-8 text-primary/20" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

              {/* Project */}
              <div className="text-sm text-primary font-medium mb-4">Project: {testimonial.project}</div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
