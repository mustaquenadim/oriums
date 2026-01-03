"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DollarSign,
  Clock,
  Users,
  Building,
  Zap,
  Target,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Calendar,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const concerns = [
  {
    id: 1,
    icon: DollarSign,
    title: "Budget Constraints",
    concern: "Our premium services may not fit smaller budgets",
    description:
      "We focus on delivering high-quality, enterprise-grade solutions which require significant investment. If you're looking for the cheapest option available, we might not be the right fit.",
    alternatives: [
      "Consider freelance developers for simple projects",
      "Explore template-based solutions for basic needs",
      "Look into offshore development for cost savings",
    ],
    whenToChooseUs:
      "When quality, reliability, and long-term support matter more than initial cost",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
  {
    id: 2,
    icon: Clock,
    title: "Timeline Expectations",
    concern: "We prioritize quality over speed for complex projects",
    description:
      "Our thorough development process includes extensive planning, testing, and quality assurance. If you need something built in just a few days, we're not the right choice.",
    alternatives: [
      "Use no-code platforms for rapid prototyping",
      "Consider pre-built solutions or SaaS products",
      "Hire developers for quick MVP development",
    ],
    whenToChooseUs:
      "When you want a robust, scalable solution built right the first time",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    id: 3,
    icon: Users,
    title: "Team Size Requirements",
    concern: "We may be too large for very small, simple projects",
    description:
      "Our team is designed for complex, enterprise-level projects. For simple websites or basic apps, our full-service approach might be overkill.",
    alternatives: [
      "Individual freelancers for personal projects",
      "Small boutique agencies for simple websites",
      "DIY website builders for basic needs",
    ],
    whenToChooseUs:
      "When your project requires diverse expertise and coordinated team effort",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: 4,
    icon: Building,
    title: "Industry Specialization",
    concern: "We may not have deep expertise in highly niche industries",
    description:
      "While we work across many sectors, some highly specialized industries (like medical devices or aerospace) might benefit from agencies with specific domain expertise.",
    alternatives: [
      "Industry-specific development firms",
      "Consultants with niche expertise",
      "In-house development teams with domain knowledge",
    ],
    whenToChooseUs:
      "When you need versatile technical skills with business acumen across industries",
    color: "from-purple-500 to-blue-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    id: 5,
    icon: Zap,
    title: "Maintenance Preferences",
    concern: "We recommend ongoing partnerships, not one-off projects",
    description:
      "We believe in long-term relationships and ongoing support. If you prefer to build once and never look back, our approach might not align with your expectations.",
    alternatives: [
      "Agencies offering build-and-handoff services",
      "In-house development for full control",
      "Contractors for project-based work",
    ],
    whenToChooseUs:
      "When you want a technology partner invested in your long-term success",
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    id: 6,
    icon: Target,
    title: "Control & Flexibility",
    concern: "We follow proven processes that may feel structured",
    description:
      "Our methodology is refined through years of experience. If you prefer complete creative control or frequently changing requirements mid-project, our structured approach might feel limiting.",
    alternatives: [
      "Freelancers for maximum flexibility",
      "Agile-only shops for iterative development",
      "In-house teams for direct control",
    ],
    whenToChooseUs:
      "When you value proven processes and predictable outcomes over complete flexibility",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
  },
];

const trustBuilders = [
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "We provide detailed estimates upfront with no hidden costs",
  },
  {
    icon: MessageCircle,
    title: "Honest Communication",
    description: "We'll tell you if we're not the right fit for your project",
  },
  {
    icon: Calendar,
    title: "Realistic Timelines",
    description:
      "We set achievable deadlines and communicate any changes early",
  },
];

export default function WhyNotChooseUsSection() {
  const [activeConcern, setActiveConcern] = useState(1);
  const [showAlternatives, setShowAlternatives] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full border bg-secondary px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-semibold text-secondary-foreground">
              Honest Assessment
            </span>
          </div>
          <h2 className="text-4xl mb-4 text-foreground">
            When We Might
            <span className="block text-primary">Not Be Right for You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in transparency. Here are some honest reasons why Oriums
            might not be the perfect fit for your specific needs, along with
            better alternatives.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Concern Cards */}
          <div className="space-y-4">
            {concerns.map((concern, index) => (
              <motion.div
                key={concern.id}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeConcern === concern.id
                    ? `${concern.bgColor} border-primary/50 shadow-lg`
                    : "bg-card hover:border-primary/30"
                }`}
                onClick={() => setActiveConcern(concern.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${concern.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <concern.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 text-card-foreground">
                      {concern.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {concern.concern}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {concern.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Concern Details */}
          <div className="lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              {concerns.map(
                (concern) =>
                  activeConcern === concern.id && (
                    <motion.div
                      key={concern.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-card rounded-2xl shadow-2xl border p-8"
                    >
                      <div className="text-center mb-8">
                        <div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${concern.color} flex items-center justify-center mx-auto mb-4`}
                        >
                          <concern.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                          {concern.title}
                        </h3>
                        <p className="text-primary font-semibold">
                          {concern.concern}
                        </p>
                      </div>

                      <p className="text-muted-foreground mb-8 text-center">
                        {concern.description}
                      </p>

                      {/* Better Alternatives */}
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 flex items-center text-card-foreground">
                          <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                          Better Alternatives for You:
                        </h4>
                        <ul className="space-y-2">
                          {concern.alternatives.map((alternative, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {alternative}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* When to Choose Us */}
                      <div className="p-4 bg-primary/10 rounded-xl">
                        <h4 className="font-semibold mb-2 text-primary">
                          But choose us when:
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {concern.whenToChooseUs}
                        </p>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Trust Building Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">
            Why We Share This Information
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trustBuilders.map((builder, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-card rounded-xl shadow-lg border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <builder.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">
                  {builder.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {builder.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-primary-foreground"
        >
          <h3 className="text-3xl font-bold mb-4">
            Still Not Sure If We're Right for You?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's have an honest conversation about your project. We'll help you
            determine if we're the right fit, or point you toward better
            alternatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-full font-medium shadow-md hover:shadow-lg"
            >
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-full font-medium bg-transparent"
            >
              Get Project Assessment
            </Button>
          </div>
          <div className="flex items-center justify-center mt-6 text-sm text-primary-foreground/90">
            <MessageCircle className="w-4 h-4 mr-2" />
            No sales pressure • Honest recommendations • Free advice
          </div>
        </motion.div>
      </div>
    </section>
  );
}
