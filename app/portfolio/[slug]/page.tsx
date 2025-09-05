"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ChevronLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Target,
  Lightbulb,
  TrendingUp,
  Quote,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import Header from "../../components/common/header"
import Footer from "../../components/Footer"
import BackgroundGrid from "../../components/BackgroundGrid"

const caseStudies = {
  "fintech-mobile-banking": {
    id: 1,
    title: "FinTech Mobile Banking App",
    subtitle: "Revolutionizing Digital Banking Experience",
    category: "Mobile Development",
    tags: ["React Native", "Node.js", "PostgreSQL", "AWS", "Biometric Auth", "Real-time Analytics"],
    heroImage: "/placeholder.svg?height=600&width=1200&text=FinTech+Banking+App",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Login+Screen",
      "/placeholder.svg?height=400&width=600&text=Dashboard",
      "/placeholder.svg?height=400&width=600&text=Transactions",
      "/placeholder.svg?height=400&width=600&text=Analytics",
    ],
    client: {
      name: "SecureBank Corp",
      industry: "Financial Services",
      size: "10,000+ employees",
      location: "New York, USA",
    },
    overview:
      "SecureBank Corp approached us to develop a next-generation mobile banking application that would set new standards for security, usability, and performance in the financial sector. The project aimed to replace their legacy system while introducing cutting-edge features.",
    challenge: {
      title: "The Challenge",
      description:
        "SecureBank's existing mobile app was outdated, slow, and lacked modern security features. Customer complaints were increasing, and they were losing market share to fintech competitors. The main challenges included:",
      points: [
        "Legacy system integration with modern mobile architecture",
        "Implementing bank-grade security without compromising user experience",
        "Meeting strict regulatory compliance (PCI DSS, SOX, GDPR)",
        "Handling high transaction volumes with zero downtime",
        "Creating an intuitive interface for users of all technical levels",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We developed a comprehensive mobile banking solution using cutting-edge technologies and security practices:",
      features: [
        {
          title: "Advanced Security Architecture",
          description:
            "Implemented multi-layer security with biometric authentication, end-to-end encryption, and real-time fraud detection using machine learning algorithms.",
        },
        {
          title: "Microservices Backend",
          description:
            "Built a scalable Node.js backend with microservices architecture, ensuring high availability and easy maintenance.",
        },
        {
          title: "Real-time Analytics",
          description:
            "Integrated comprehensive analytics dashboard for both users and administrators to track spending patterns and system performance.",
        },
        {
          title: "Seamless UX/UI",
          description:
            "Designed an intuitive interface following accessibility guidelines, with personalized dashboards and smart notifications.",
        },
      ],
    },
    process: {
      title: "Development Process",
      phases: [
        {
          phase: "Discovery & Planning",
          duration: "4 weeks",
          activities: ["Stakeholder interviews", "Technical audit", "Security assessment", "Architecture design"],
        },
        {
          phase: "Design & Prototyping",
          duration: "6 weeks",
          activities: ["User research", "Wireframing", "UI/UX design", "Interactive prototypes"],
        },
        {
          phase: "Development",
          duration: "20 weeks",
          activities: [
            "Backend development",
            "Mobile app development",
            "Security implementation",
            "Integration testing",
          ],
        },
        {
          phase: "Testing & Deployment",
          duration: "8 weeks",
          activities: ["Security audits", "Performance testing", "User acceptance testing", "Phased rollout"],
        },
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "User Engagement", value: "↑ 250%", description: "Daily active users increased significantly" },
        { label: "Transaction Speed", value: "↑ 400%", description: "Average transaction processing time" },
        { label: "Security Incidents", value: "↓ 95%", description: "Fraud attempts successfully blocked" },
        { label: "Customer Satisfaction", value: "4.8/5", description: "App store rating improvement" },
        { label: "Support Tickets", value: "↓ 60%", description: "Reduction in customer support requests" },
        { label: "Market Share", value: "↑ 35%", description: "Increase in mobile banking adoption" },
      ],
    },
    testimonial: {
      quote:
        "Oriums transformed our digital banking experience beyond our expectations. The app has not only improved customer satisfaction but also positioned us as a leader in fintech innovation. The security features and user experience are world-class.",
      author: "Sarah Johnson",
      position: "Chief Technology Officer",
      company: "SecureBank Corp",
      avatar: "/placeholder.svg?height=80&width=80&text=SJ",
    },
    techStack: {
      frontend: ["React Native", "TypeScript", "Redux Toolkit", "React Navigation"],
      backend: ["Node.js", "Express.js", "PostgreSQL", "Redis", "JWT"],
      cloud: ["AWS EC2", "AWS RDS", "AWS S3", "CloudFront", "Lambda"],
      security: ["OAuth 2.0", "Biometric Auth", "AES-256", "SSL/TLS"],
      tools: ["Docker", "Jenkins", "SonarQube", "New Relic"],
    },
    nextSteps:
      "Following the successful launch, SecureBank has engaged us for Phase 2, which includes AI-powered financial advisory features and expansion to international markets.",
    liveUrl: "https://securebank-mobile.example.com",
    githubUrl: null,
    duration: "8 months",
    teamSize: "12 developers",
  },
  "ecommerce-platform": {
    id: 2,
    title: "E-Commerce Platform Redesign",
    subtitle: "Transforming Online Retail Experience",
    category: "Web Development",
    tags: ["Next.js", "Stripe", "MongoDB", "Vercel", "Headless Commerce", "PWA"],
    heroImage: "/placeholder.svg?height=600&width=1200&text=E-Commerce+Platform",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Homepage",
      "/placeholder.svg?height=400&width=600&text=Product+Catalog",
      "/placeholder.svg?height=400&width=600&text=Checkout+Flow",
      "/placeholder.svg?height=400&width=600&text=Admin+Dashboard",
    ],
    client: {
      name: "RetailMax Inc",
      industry: "E-Commerce Retail",
      size: "500+ employees",
      location: "California, USA",
    },
    overview:
      "RetailMax Inc needed a complete overhaul of their e-commerce platform to compete with modern online retailers. The project focused on creating a fast, scalable, and conversion-optimized shopping experience.",
    challenge: {
      title: "The Challenge",
      description:
        "RetailMax's legacy platform was hindering growth and customer satisfaction. Key challenges included:",
      points: [
        "Slow page load times affecting SEO and conversions",
        "Poor mobile experience with high bounce rates",
        "Limited scalability during peak shopping seasons",
        "Outdated admin interface reducing operational efficiency",
        "Integration issues with modern payment and shipping providers",
      ],
    },
    solution: {
      title: "Our Solution",
      description: "We built a modern, headless e-commerce platform optimized for performance and scalability:",
      features: [
        {
          title: "Headless Architecture",
          description:
            "Implemented a headless commerce solution with Next.js frontend and flexible backend APIs for maximum performance and flexibility.",
        },
        {
          title: "Progressive Web App",
          description:
            "Created a PWA with offline capabilities, push notifications, and app-like experience on mobile devices.",
        },
        {
          title: "Advanced Analytics",
          description:
            "Integrated comprehensive analytics and A/B testing capabilities to optimize conversion rates and user experience.",
        },
        {
          title: "Modern Admin Panel",
          description:
            "Built an intuitive admin dashboard with real-time inventory management, order processing, and customer insights.",
        },
      ],
    },
    process: {
      title: "Development Process",
      phases: [
        {
          phase: "Analysis & Strategy",
          duration: "3 weeks",
          activities: ["Performance audit", "Competitor analysis", "User journey mapping", "Technical requirements"],
        },
        {
          phase: "Design & Architecture",
          duration: "4 weeks",
          activities: [
            "Design system creation",
            "API architecture",
            "Database design",
            "Performance optimization plan",
          ],
        },
        {
          phase: "Development",
          duration: "16 weeks",
          activities: ["Frontend development", "Backend APIs", "Payment integration", "Admin panel development"],
        },
        {
          phase: "Testing & Launch",
          duration: "3 weeks",
          activities: ["Performance testing", "Security audit", "Load testing", "Gradual migration"],
        },
      ],
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Page Load Speed", value: "↑ 300%", description: "Average page load time improvement" },
        { label: "Conversion Rate", value: "↑ 185%", description: "Overall conversion rate increase" },
        { label: "Mobile Sales", value: "↑ 220%", description: "Mobile commerce revenue growth" },
        { label: "SEO Rankings", value: "↑ 150%", description: "Improvement in search visibility" },
        { label: "Admin Efficiency", value: "↑ 180%", description: "Operational task completion speed" },
        { label: "Customer Satisfaction", value: "4.7/5", description: "Post-purchase survey ratings" },
      ],
    },
    testimonial: {
      quote:
        "The new platform has completely transformed our business. We've seen unprecedented growth in online sales and our team's productivity has skyrocketed. Oriums delivered a solution that exceeded all our expectations.",
      author: "Michael Chen",
      position: "CEO",
      company: "RetailMax Inc",
      avatar: "/placeholder.svg?height=80&width=80&text=MC",
    },
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express.js", "MongoDB", "Stripe API", "SendGrid"],
      cloud: ["Vercel", "MongoDB Atlas", "Cloudinary", "Redis Cloud"],
      tools: ["Figma", "Postman", "GitHub Actions", "Sentry", "Google Analytics"],
    },
    nextSteps:
      "RetailMax is now planning international expansion and has requested additional features including multi-currency support and AI-powered product recommendations.",
    liveUrl: "https://retailmax-store.example.com",
    githubUrl: "https://github.com/retailmax/ecommerce-platform",
    duration: "6 months",
    teamSize: "8 developers",
  },
}

export default function CaseStudyPage() {
  const params = useParams()
  const slug = params.slug as string
  const [activeGalleryImage, setActiveGalleryImage] = useState(0)

  const caseStudy = caseStudies[slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/portfolio" className="text-primary hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundGrid />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ChevronLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 inline-block">
                  {caseStudy.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{caseStudy.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{caseStudy.subtitle}</p>
                <p className="text-muted-foreground mb-8">{caseStudy.overview}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{caseStudy.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{caseStudy.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Code className="w-4 h-4 text-primary" />
                    <span>{caseStudy.tags.length} Technologies</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  {caseStudy.liveUrl && (
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Project
                    </a>
                  )}
                  {caseStudy.githubUrl && (
                    <a
                      href={caseStudy.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>

              <div className="relative">
                <Image
                  src={caseStudy.heroImage || "/placeholder.svg"}
                  alt={caseStudy.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Info */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">{caseStudy.client.name}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Industry</h3>
              <p className="text-muted-foreground">{caseStudy.client.industry}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company Size</h3>
              <p className="text-muted-foreground">{caseStudy.client.size}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">{caseStudy.client.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">{caseStudy.challenge.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">{caseStudy.challenge.description}</p>
            <ul className="space-y-4">
              {caseStudy.challenge.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">{caseStudy.solution.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-12">{caseStudy.solution.description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.solution.features.map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">{caseStudy.process.title}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudy.process.phases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-card p-6 rounded-xl border h-full">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{phase.phase}</h3>
                    <p className="text-sm text-primary mb-4">{phase.duration}</p>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < caseStudy.process.phases.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>

          <div className="grid gap-8">
            <div className="relative">
              <Image
                src={caseStudy.gallery[activeGalleryImage] || "/placeholder.svg"}
                alt={`Gallery image ${activeGalleryImage + 1}`}
                width={800}
                height={500}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGalleryImage(index)}
                  className={`relative overflow-hidden rounded-lg ${activeGalleryImage === index ? "ring-2 ring-primary" : ""
                    }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={200}
                    height={150}
                    className="w-full h-24 object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-12 justify-center">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">{caseStudy.results.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudy.results.metrics.map((metric, index) => (
                <div key={index} className="text-center bg-card p-6 rounded-xl border">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold mb-2">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl font-medium mb-8 italic">"{caseStudy.testimonial.quote}"</blockquote>
            <div className="flex items-center justify-center gap-4">
              <Image
                src={caseStudy.testimonial.avatar || "/placeholder.svg"}
                alt={caseStudy.testimonial.author}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold">{caseStudy.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</div>
                <div className="text-sm text-muted-foreground">{caseStudy.testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Object.entries(caseStudy.techStack).map(([category, technologies]) => (
              <div key={category} className="bg-card p-6 rounded-xl border">
                <h3 className="text-lg font-semibold mb-4 capitalize">{category}</h3>
                <div className="space-y-2">
                  {(technologies as string[]).map((tech, index) => (
                    <div key={index} className="text-sm bg-muted px-3 py-1 rounded-full">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What's Next?</h2>
          <p className="text-lg text-muted-foreground mb-8">{caseStudy.nextSteps}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
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
              <Link href="/portfolio">
                <motion.button
                  className="border border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
