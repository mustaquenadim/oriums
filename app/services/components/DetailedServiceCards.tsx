"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Palette,
  Paintbrush,
  PenTool,
  Globe,
  Database,
  Blocks,
  Cpu,
  Brain,
  Megaphone,
  Cloud,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps Development",
    description:
      "Native and cross-platform mobile applications built with cutting-edge technologies for iOS and Android.",
    features: [
      "Native iOS & Android development",
      "Cross-platform solutions (React Native, Flutter)",
      "App store optimization & deployment",
      "Performance optimization & testing",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Palette,
    title: "Product Design (UI/UX)",
    description: "User-centered design solutions that create meaningful and seamless experiences across all platforms.",
    features: [
      "User research & persona development",
      "Wireframing & prototyping",
      "Visual design & design systems",
      "Usability testing & iteration",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Paintbrush,
    title: "Branding",
    description:
      "Strategic brand identity development that helps businesses stand out and connect with their audience.",
    features: [
      "Brand strategy & positioning",
      "Logo design & visual identity",
      "Brand guidelines & style guides",
      "Brand implementation across touchpoints",
    ],
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Creative visual solutions that communicate your message effectively and elevate your brand presence.",
    features: [
      "Print & digital graphics",
      "Marketing collateral design",
      "Social media graphics",
      "Illustration & iconography",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Globe,
    title: "Web Apps Development",
    description: "Scalable and responsive web applications built with modern frameworks and best practices.",
    features: [
      "Frontend & backend development",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "API integration & third-party services",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Database,
    title: "Web Systems",
    description: "Custom web-based systems and enterprise solutions that streamline business operations.",
    features: [
      "Enterprise application development",
      "Content Management Systems (CMS)",
      "Customer Relationship Management (CRM)",
      "Custom business logic & workflows",
    ],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Blocks,
    title: "Blockchain Development",
    description: "Secure and decentralized blockchain solutions for various industries and use cases.",
    features: [
      "Smart contract development",
      "DeFi & NFT solutions",
      "Blockchain integration",
      "Cryptocurrency wallet development",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Cpu,
    title: "IoT Development",
    description: "Connected device solutions that bridge the physical and digital worlds for smarter operations.",
    features: [
      "IoT device integration",
      "Sensor data management",
      "Real-time monitoring systems",
      "Edge computing solutions",
    ],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Brain,
    title: "AI and Machine Learning",
    description: "Intelligent solutions that leverage advanced algorithms to automate and optimize processes.",
    features: [
      "Machine learning model development",
      "Natural Language Processing (NLP)",
      "Computer vision solutions",
      "AI integration & automation",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Services",
    description: "Data-driven marketing strategies that help businesses grow their online presence and reach.",
    features: [
      "SEO & SEM optimization",
      "Social media marketing",
      "Content marketing & strategy",
      "Analytics & performance tracking",
    ],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud solutions and infrastructure management for optimal performance and reliability.",
    features: [
      "Cloud migration & deployment",
      "AWS, Azure, GCP solutions",
      "DevOps & CI/CD pipelines",
      "Infrastructure as Code (IaC)",
    ],
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: Headphones,
    title: "IT Consulting and Support",
    description: "Expert guidance and technical support to help businesses navigate their digital transformation.",
    features: [
      "Technology strategy & planning",
      "Architecture consulting",
      "Technical audits & assessments",
      "24/7 support & maintenance",
    ],
    color: "from-violet-500 to-violet-600",
  },
];

export default function DetailedServiceCards() {
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
          <h2 className="text-4xl mb-4 text-foreground font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and drive innovation
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 bg-card rounded-2xl shadow-lg border hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index % 6) }}
              viewport={{ once: true }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn w-full justify-between text-primary hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Don't see what you're looking for? We can create custom solutions tailored to your needs.
          </p>
          <Button size="lg" className="group">
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
