"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Oriums specialize in?",
    answer:
      "We offer comprehensive digital solutions including mobile app development (iOS/Android), web application development, UI/UX design, blockchain development, IoT solutions, AI/ML implementation, cloud services, and digital marketing. Our team of 50+ experts covers the full spectrum of modern technology needs, from initial concept to post-launch support.",
  },
  {
    question: "How does your project development process work?",
    answer:
      "Our proven 5-phase process ensures successful delivery: 1) Discovery & Planning (1-2 weeks) - requirement gathering and feasibility assessment, 2) Design & Architecture (2-3 weeks) - UX/UI design and technical planning, 3) Development (4-12 weeks) - agile development with weekly demos, 4) Testing & QA (1-2 weeks) - comprehensive testing across all platforms, 5) Launch & Support - deployment and ongoing maintenance. You'll have a dedicated project manager and regular updates throughout.",
  },
  {
    question: "What are your pricing models and how do you structure costs?",
    answer:
      "We offer three flexible pricing models: Fixed-Price Projects (ideal for well-defined scopes with transparent upfront costs), Time & Materials (perfect for evolving requirements with hourly/daily rates), and Dedicated Team (for long-term partnerships with monthly retainers). All projects include a free consultation and detailed cost breakdown. We also offer a 30-day money-back guarantee for your peace of mind.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary based on complexity and scope. Simple websites or mobile apps: 4-8 weeks, Complex web applications: 8-16 weeks, Enterprise solutions: 12-24 weeks, E-commerce platforms: 6-12 weeks. We provide detailed timeline estimates during our free consultation phase and maintain 99% on-time delivery rate through our agile methodology and dedicated project management.",
  },
  {
    question: "Do you work with startups, small businesses, or only large enterprises?",
    answer:
      "We proudly serve clients of all sizes - from innovative startups to Fortune 500 companies. Our scalable approach means we can adapt our services to your budget and requirements. We offer startup-friendly packages, SMB solutions, and enterprise-grade systems. Over 60% of our clients are small to medium businesses, and we've helped numerous startups secure funding with our MVP development services.",
  },
  {
    question: "What kind of support do you provide after project completion?",
    answer:
      "We offer comprehensive post-launch support including: Technical Support (bug fixes, performance optimization), Maintenance Packages (regular updates, security patches, backups), Feature Enhancement (adding new functionality as you grow), 24/7 Monitoring (for critical applications), and Training & Documentation (team onboarding and user guides). Our support packages start at $500/month and are customized based on your needs.",
  },
  {
    question: "How do you ensure the quality and security of your deliverables?",
    answer:
      "Quality and security are our top priorities. We implement: Rigorous Code Reviews (every line reviewed by senior developers), Automated Testing (unit, integration, and end-to-end tests), Security Audits (penetration testing and vulnerability assessments), Performance Optimization (load testing and monitoring), and Compliance Standards (GDPR, HIPAA, SOC 2 when required). All projects include comprehensive documentation and follow industry best practices.",
  },
  {
    question: "Can you work with our existing team or integrate with our current systems?",
    answer:
      "Absolutely! We excel at collaborative partnerships and system integrations. We can work as an extension of your team, integrate with your existing development workflows, connect to your current databases and APIs, migrate data from legacy systems, and provide knowledge transfer to your internal team. We're experienced with popular tools like Slack, Jira, GitHub, and various CI/CD pipelines.",
  },
  {
    question: "What technologies do you use and how do you choose the right tech stack?",
    answer:
      "We specialize in modern, scalable technologies including React/Next.js, React Native/Flutter, Node.js/Python/.NET, AWS/Azure/GCP, and emerging technologies like AI/ML and blockchain. Our technology selection is based on your specific requirements, scalability needs, budget constraints, team expertise, and long-term maintenance considerations. We always recommend the most suitable solution, not just the latest trends.",
  },
  {
    question: "How do you handle project changes and scope modifications?",
    answer:
      "We understand that requirements can evolve. Our agile approach accommodates changes through: Change Request Process (documented scope modifications with impact assessment), Flexible Sprint Planning (adjustments between development cycles), Transparent Communication (immediate discussion of implications), and Fair Pricing (only pay for approved additional work). Minor changes are often included at no extra cost, while major modifications are clearly outlined before implementation.",
  },
]

export default function FaqSection() {
  return (
    <section className="relative z-10 px-6 py-24 bg-background">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions about our services and processes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold text-card-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
