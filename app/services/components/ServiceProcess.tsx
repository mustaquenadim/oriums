"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We start with a comprehensive consultation to understand your business goals, challenges, and vision. This helps us tailor our services to your specific needs.",
    color: "bg-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our team develops a detailed strategy and project plan, outlining timelines, milestones, and deliverables. We ensure alignment with your objectives before we begin.",
    color: "bg-purple-500",
  },
  {
    icon: Code,
    title: "Development & Execution",
    description:
      "Using agile methodologies, we build your solution with regular updates and feedback loops. Quality and transparency are at the heart of our development process.",
    color: "bg-green-500",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We handle deployment and provide ongoing support to ensure your solution performs optimally. Our relationship extends beyond launch with continuous improvement.",
    color: "bg-orange-500",
  },
];

export default function ServiceProcess() {
  return (
    <section className="relative z-10 px-6 py-24 bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-4 text-foreground font-bold">Our Service Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures successful delivery and exceptional results
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Connector Line (Desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" style={{ width: 'calc(100% - 3rem)' }} />
              )}

              <div className="relative z-10 text-center">
                {/* Icon Circle */}
                <div className="relative mx-auto mb-6">
                  <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          className="bg-muted/30 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            Why Choose Our Process?
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Transparent communication at every stage",
              "Agile methodology with regular updates",
              "Quality assurance and testing throughout",
              "Scalable solutions that grow with you",
              "Dedicated support and maintenance",
              "Proven track record of success",
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="group">
            Start Your Project Today
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
