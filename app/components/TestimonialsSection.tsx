"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "/placeholder.svg?height=80&width=80&text=SJ",
    rating: 5,
    content:
      "Oriums transformed our vision into reality with exceptional precision. Their team's expertise and dedication resulted in a platform that exceeded our expectations and drove significant business growth.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLab",
    image: "/placeholder.svg?height=80&width=80&text=MC",
    rating: 5,
    content:
      "Working with Oriums was a game-changer for our startup. They delivered a scalable, robust solution on time and within budget. Their technical expertise is unmatched.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "GlobalTech Solutions",
    image: "/placeholder.svg?height=80&width=80&text=ER",
    rating: 5,
    content:
      "The level of professionalism and quality delivered by Oriums is outstanding. They understood our complex requirements and delivered a solution that perfectly aligned with our business goals.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "EcoSmart",
    image: "/placeholder.svg?height=80&width=80&text=DK",
    rating: 5,
    content:
      "Oriums didn't just build our app; they became our technology partners. Their ongoing support and innovative suggestions have been invaluable to our success.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "VP of Operations",
    company: "HealthFirst",
    image: "/placeholder.svg?height=80&width=80&text=LT",
    rating: 5,
    content:
      "The healthcare management system Oriums built for us has revolutionized our operations. Patient satisfaction has increased by 40% since implementation.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Marketing Director",
    company: "RetailPro",
    image: "/placeholder.svg?height=80&width=80&text=JW",
    rating: 5,
    content:
      "Our e-commerce platform built by Oriums has driven a 300% increase in online sales. Their attention to user experience and performance optimization is remarkable.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 px-6 py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-foreground">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Oriums
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-card p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-muted-foreground italic pl-6">{testimonial.content}</p>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
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
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.9/5</span>
            <span>average rating from 150+ client reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
