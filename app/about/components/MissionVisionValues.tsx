"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Zap } from "lucide-react"

export default function MissionVisionValues() {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices.",
    },
    {
      icon: Target,
      title: "Client-Centric",
      description: "Your success is our priority. We tailor solutions to meet your unique needs and goals.",
    },
    {
      icon: Eye,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering quality that exceeds expectations.",
    },
  ]

  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Mission & Vision */}
        <div className="grid gap-16 lg:grid-cols-2 mb-24">
          {/* Mission */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Target className="h-4 w-4" />
              Our Mission
            </div>
            <h2 className="text-3xl font-bold mb-6">Empowering Businesses Through Technology</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our mission is to transform businesses by delivering innovative, scalable, and user-centric digital
              solutions. We believe technology should be accessible, powerful, and designed with purpose.
            </p>
            <p className="text-muted-foreground">
              We partner with forward-thinking companies to create digital experiences that drive growth, enhance
              efficiency, and connect people in meaningful ways.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary mb-6">
              <Eye className="h-4 w-4" />
              Our Vision
            </div>
            <h2 className="text-3xl font-bold mb-6">Leading the Digital Revolution</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We envision a world where technology seamlessly integrates with human needs, creating solutions that are
              not just functional, but transformational.
            </p>
            <p className="text-muted-foreground">
              By 2030, we aim to be the global leader in custom software development, expanding our reach to 50+
              countries and empowering 10,000+ businesses worldwide.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These principles guide everything we do and shape how we work with our clients and each other.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative p-8 bg-card border rounded-2xl hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{value.title}</h3>
              <p className="text-muted-foreground text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
