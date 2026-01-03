"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const privacySections = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "At Oriums, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
      "By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.",
    ],
  },
  {
    id: "information-collection",
    title: "Information We Collect",
    content: [
      "We collect information that you provide directly to us, including:",
      "• Personal identification information (name, email address, phone number, mailing address)",
      "• Business information (company name, job title, industry)",
      "• Communication data (messages, inquiries, feedback)",
      "• Account credentials (username, password)",
      "We also automatically collect certain information when you visit our website:",
      "• Device information (IP address, browser type, operating system)",
      "• Usage data (pages visited, time spent, click patterns)",
      "• Cookies and tracking technologies",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      "We use the information we collect for various purposes, including:",
      "• To provide, maintain, and improve our services",
      "• To process transactions and send related information",
      "• To respond to your inquiries and provide customer support",
      "• To send you marketing communications (with your consent)",
      "• To detect, prevent, and address technical issues",
      "• To comply with legal obligations",
      "• To protect our rights and prevent fraud",
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing and Disclosure",
    content: [
      "We do not sell your personal information. We may share your information only in the following circumstances:",
      "• With service providers who assist us in operating our business (under strict confidentiality agreements)",
      "• When required by law or to respond to legal process",
      "• To protect our rights, privacy, safety, or property",
      "• In connection with a business transfer (merger, acquisition, etc.)",
      "• With your explicit consent",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:",
      "• Encryption of data in transit and at rest",
      "• Regular security assessments and updates",
      "• Access controls and authentication",
      "• Secure data storage and backup systems",
      "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights and Choices",
    content: [
      "Depending on your location, you may have the following rights regarding your personal information:",
      "• Access: Request a copy of the personal information we hold about you",
      "• Correction: Request correction of inaccurate or incomplete information",
      "• Deletion: Request deletion of your personal information",
      "• Portability: Request transfer of your data to another service",
      "• Opt-out: Unsubscribe from marketing communications",
      "• Restriction: Request limitation of how we process your information",
      "To exercise these rights, please contact us using the information provided in the Contact section below.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    content: [
      "We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device.",
      "Types of cookies we use:",
      "• Essential cookies: Required for the website to function properly",
      "• Analytics cookies: Help us understand how visitors use our website",
      "• Marketing cookies: Used to deliver relevant advertisements",
      "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites or services that are not owned or controlled by Oriums. We are not responsible for the privacy practices of these external sites.",
      "We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only to information collected by our website and services.",
    ],
  },
  {
    id: "children-privacy",
    title: "Children's Privacy",
    content: [
      "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
      "If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.",
    ],
  },
  {
    id: "international",
    title: "International Data Transfers",
    content: [
      "Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.",
      "If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there. By submitting your information, you consent to this transfer.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content: [
      "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
      "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or our privacy practices, please contact us:",
      "Email: privacy@oriums.com",
      "Phone: +1 (555) 123-4567",
      "Address: San Francisco, CA, United States",
      "We will respond to your inquiry within 30 days.",
    ],
  },
]

export default function PrivacyContent() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-lg text-muted-foreground">
            This Privacy Policy describes how Oriums ("we", "our", or "us") collects, uses, and shares your personal information when you use our website and services.
          </p>
        </motion.div>

        <div className="space-y-8">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
                <span className="mr-3 text-primary">{String(index + 1).padStart(2, '0')}</span>
                {section.title}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={`${
                      paragraph.startsWith('•') || paragraph.startsWith('Email:') || paragraph.startsWith('Phone:') || paragraph.startsWith('Address:')
                        ? 'ml-4'
                        : ''
                    } leading-relaxed`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Navigation */}
        <motion.div
          className="mt-16 bg-card border rounded-2xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground">Quick Navigation</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {privacySections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
              >
                <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                {section.title}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
