"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    author: "Alex Thompson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=200&width=300&text=Web+Development+Trends",
    slug: "future-web-development-trends-2024",
  },
  {
    id: 2,
    title: "Building Scalable Mobile Apps: Best Practices and Architecture",
    excerpt:
      "Learn how to design and develop mobile applications that can handle millions of users without compromising performance.",
    author: "Sarah Kim",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "Mobile Development",
    image: "/placeholder.svg?height=200&width=300&text=Mobile+App+Architecture",
    slug: "scalable-mobile-apps-best-practices",
  },
  {
    id: 3,
    title: "AI and Machine Learning in Modern Software Development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way we build and deploy software applications.",
    author: "Michael Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "AI/ML",
    image: "/placeholder.svg?height=200&width=300&text=AI+Machine+Learning",
    slug: "ai-machine-learning-software-development",
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for Enterprise Applications",
    excerpt:
      "Essential security measures every enterprise should implement to protect their digital assets and user data.",
    author: "Jennifer Chen",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Security",
    image: "/placeholder.svg?height=200&width=300&text=Cybersecurity+Best+Practices",
    slug: "cybersecurity-best-practices-enterprise",
  },
  {
    id: 5,
    title: "The Rise of Low-Code/No-Code Platforms: Opportunities and Limitations",
    excerpt:
      "An in-depth analysis of low-code and no-code platforms and their impact on traditional software development.",
    author: "David Park",
    date: "March 5, 2024",
    readTime: "4 min read",
    category: "Industry Insights",
    image: "/placeholder.svg?height=200&width=300&text=Low+Code+No+Code",
    slug: "rise-of-low-code-no-code-platforms",
  },
  {
    id: 6,
    title: "Cloud Migration Strategies: A Complete Guide for Businesses",
    excerpt: "Step-by-step guide to successfully migrating your business applications and data to the cloud.",
    author: "Lisa Wang",
    date: "March 3, 2024",
    readTime: "9 min read",
    category: "Cloud Computing",
    image: "/placeholder.svg?height=200&width=300&text=Cloud+Migration+Guide",
    slug: "cloud-migration-strategies-guide",
  },
]

export default function BlogSection() {
  return (
    <section className="relative z-10 px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-foreground">Latest Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our team of experts
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-card rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button asChild size="lg">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
