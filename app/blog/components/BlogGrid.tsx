"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
    image: "/placeholder.svg?height=400&width=600&text=Web+Development+Trends",
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
    image: "/placeholder.svg?height=400&width=600&text=Mobile+App+Architecture",
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
    image: "/placeholder.svg?height=400&width=600&text=AI+Machine+Learning",
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
    image: "/placeholder.svg?height=400&width=600&text=Cybersecurity+Best+Practices",
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
    image: "/placeholder.svg?height=400&width=600&text=Low+Code+No+Code",
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
    image: "/placeholder.svg?height=400&width=600&text=Cloud+Migration+Guide",
    slug: "cloud-migration-strategies-guide",
  },
  {
    id: 7,
    title: "React Server Components: The Next Evolution of React",
    excerpt:
      "Deep dive into React Server Components and how they're changing the way we think about React applications.",
    author: "Alex Thompson",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600&text=React+Server+Components",
    slug: "react-server-components-next-evolution",
  },
  {
    id: 8,
    title: "Design Systems: Creating Consistency at Scale",
    excerpt:
      "Learn how to build and maintain design systems that ensure consistency across large-scale applications.",
    author: "Emily Johnson",
    date: "February 25, 2024",
    readTime: "7 min read",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600&text=Design+Systems",
    slug: "design-systems-creating-consistency",
  },
  {
    id: 9,
    title: "Microservices Architecture: When and How to Use It",
    excerpt:
      "A comprehensive guide to microservices architecture, including benefits, challenges, and best practices.",
    author: "Robert Lee",
    date: "February 22, 2024",
    readTime: "8 min read",
    category: "Architecture",
    image: "/placeholder.svg?height=400&width=600&text=Microservices+Architecture",
    slug: "microservices-architecture-guide",
  },
  {
    id: 10,
    title: "DevOps Best Practices for Continuous Deployment",
    excerpt:
      "Essential DevOps practices that enable teams to deploy code faster and more reliably to production.",
    author: "Sarah Kim",
    date: "February 20, 2024",
    readTime: "5 min read",
    category: "DevOps",
    image: "/placeholder.svg?height=400&width=600&text=DevOps+Best+Practices",
    slug: "devops-best-practices-continuous-deployment",
  },
  {
    id: 11,
    title: "GraphQL vs REST: Choosing the Right API Architecture",
    excerpt:
      "Compare GraphQL and REST APIs to understand which approach fits best for your project requirements.",
    author: "Michael Rodriguez",
    date: "February 18, 2024",
    readTime: "6 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600&text=GraphQL+vs+REST",
    slug: "graphql-vs-rest-api-architecture",
  },
  {
    id: 12,
    title: "Performance Optimization: Speeding Up Your Web Applications",
    excerpt:
      "Proven techniques and strategies to optimize web application performance and improve user experience.",
    author: "Jennifer Chen",
    date: "February 15, 2024",
    readTime: "7 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600&text=Performance+Optimization",
    slug: "performance-optimization-web-applications",
  },
]

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Security",
  "Cloud Computing",
  "Design",
  "Architecture",
  "DevOps",
  "Industry Insights",
]

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <section className="px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
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

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-card rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
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

                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>

                        <div className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 gap-1 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-muted-foreground">No articles found in this category.</p>
          </motion.div>
        )}

        {/* Load More / Pagination could be added here */}
      </div>
    </section>
  )
}
