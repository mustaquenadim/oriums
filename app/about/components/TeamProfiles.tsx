"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeamProfiles() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech. Former VP at Microsoft, passionate about transforming businesses through innovation.",
      expertise: ["Strategic Planning", "Business Development", "Team Leadership"],
      image: "/placeholder.svg?height=400&width=400&text=Sarah+Johnson",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@oriums.com",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Technical architect with expertise in scalable systems. Led engineering teams at Google and Amazon, specializing in cloud infrastructure.",
      expertise: ["System Architecture", "Cloud Computing", "AI/ML"],
      image: "/placeholder.svg?height=400&width=400&text=Michael+Chen",
      social: {
        linkedin: "#",
        github: "#",
        email: "michael@oriums.com",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning UX/UI designer with a passion for creating intuitive experiences. Previously at Apple and Airbnb.",
      expertise: ["UX/UI Design", "Design Systems", "User Research"],
      image: "/placeholder.svg?height=400&width=400&text=Emily+Rodriguez",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@oriums.com",
      },
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Full-stack expert with 12+ years building scalable applications. Former lead engineer at Spotify, specializes in modern web technologies.",
      expertise: ["Full-Stack Development", "DevOps", "Team Management"],
      image: "/placeholder.svg?height=400&width=400&text=David+Kim",
      social: {
        linkedin: "#",
        github: "#",
        email: "david@oriums.com",
      },
    },
    {
      name: "Lisa Thompson",
      role: "Head of Operations",
      bio: "Operations expert focused on process optimization and client success. MBA from Stanford, former consultant at McKinsey & Company.",
      expertise: ["Operations Management", "Process Optimization", "Client Relations"],
      image: "/placeholder.svg?height=400&width=400&text=Lisa+Thompson",
      social: {
        linkedin: "#",
        email: "lisa@oriums.com",
      },
    },
    {
      name: "Alex Patel",
      role: "Lead Data Scientist",
      bio: "AI/ML specialist with PhD in Computer Science. Former researcher at MIT, expert in machine learning and data analytics.",
      expertise: ["Machine Learning", "Data Analytics", "AI Research"],
      image: "/placeholder.svg?height=400&width=400&text=Alex+Patel",
      social: {
        linkedin: "#",
        github: "#",
        email: "alex@oriums.com",
      },
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
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience from leading tech companies and innovative
            startups to deliver exceptional results.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          className="grid gap-8 md:grid-cols-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-card border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center p-6 bg-card border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Average Experience</div>
          </div>
          <div className="text-center p-6 bg-card border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">40%</div>
            <div className="text-sm text-muted-foreground">Women in Leadership</div>
          </div>
          <div className="text-center p-6 bg-card border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Countries Represented</div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Profile Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.slice(0, 2).map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                  {member.expertise.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{member.expertise.length - 2} more
                    </span>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                  {member.social.linkedin && (
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.github && (
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.email && (
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
