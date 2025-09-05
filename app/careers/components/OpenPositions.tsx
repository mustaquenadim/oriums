"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, DollarSign, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const positions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$120k - $150k",
    description:
      "We're looking for an experienced full stack developer to join our core engineering team. You'll work on cutting-edge projects using modern technologies.",
    requirements: [
      "5+ years of experience in full stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong understanding of database design and optimization",
      "Experience with agile development methodologies",
    ],
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews and technical discussions",
    ],
  },
  {
    id: 2,
    title: "Mobile App Developer (React Native)",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$100k - $130k",
    description: "Join our mobile team to build innovative mobile applications that reach millions of users worldwide.",
    requirements: [
      "3+ years of React Native development experience",
      "Strong knowledge of JavaScript/TypeScript",
      "Experience with native iOS/Android development",
      "Familiarity with mobile app deployment processes",
      "Understanding of mobile UI/UX best practices",
    ],
    responsibilities: [
      "Develop and maintain mobile applications",
      "Optimize app performance and user experience",
      "Collaborate with designers and backend developers",
      "Implement new features and fix bugs",
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Los Angeles",
    type: "Full-time",
    salary: "$80k - $110k",
    description: "We're seeking a creative UI/UX designer to help us create beautiful and intuitive user experiences.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of user-centered design principles",
      "Experience with design systems and prototyping",
    ],
    responsibilities: [
      "Create wireframes, mockups, and prototypes",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
      "Maintain and evolve design systems",
    ],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Austin",
    type: "Full-time",
    salary: "$110k - $140k",
    description: "Help us build and maintain robust infrastructure that powers our applications and services.",
    requirements: [
      "4+ years of DevOps/Infrastructure experience",
      "Experience with containerization (Docker, Kubernetes)",
      "Proficiency in cloud platforms and services",
      "Knowledge of CI/CD pipelines and automation",
      "Scripting skills (Python, Bash, or similar)",
    ],
    responsibilities: [
      "Design and maintain cloud infrastructure",
      "Implement CI/CD pipelines",
      "Monitor system performance and reliability",
      "Automate deployment and scaling processes",
    ],
  },
]

export default function OpenPositions() {
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null)

  return (
    <section className="relative z-10 px-6 py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-mono mb-4">Open Positions</h2>
          <p className="text-xl text-gray-600">Discover exciting opportunities to grow your career with us</p>
        </motion.div>

        <div className="space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setExpandedPosition(expandedPosition === position.id ? null : position.id)}
                    >
                      {expandedPosition === position.id ? (
                        <>
                          Less Details <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          More Details <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <Button>Apply Now</Button>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
              </div>

              {expandedPosition === position.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-gray-200 p-6"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                            <span className="ml-3 text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-green-600 flex-shrink-0" />
                            <span className="ml-3 text-gray-600">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
