"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Cloud, Smartphone, Globe, Cpu } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

// Helper function to get logo path from /public/tech directory
const getTechLogo = (techName: string): string => {
  const logoMap: Record<string, string> = {
    React: "/tech/react-js.png",
    "Next.js": "/tech/next-js.png",
    TypeScript: "/tech/typescript.png",
    "Node.js": "/tech/node-js.png",
    Python: "/tech/Python.png",
    "React Native": "/tech/react-js.png", // Using React logo as fallback
    Flutter: "/tech/Flutter.png",
    AWS: "/tech/AWS.png",
    Docker: "/tech/docker.png",
    PostgreSQL: "/tech/postgresql.png",
    MongoDB: "/tech/MongoDB.png",
    GraphQL: "/tech/GraphQL.png",
    Angular: "/tech/Angular.png",
    Firebase: "/tech/Firebase.png",
    Redis: "/tech/Redis.png",
    "Tailwind CSS": "/tech/tailwind-css.png",
    JavaScript: "/tech/javascript.png",
    Django: "/tech/Django.png",
    Flask: "/tech/Flask.png",
    FastAPI: "/tech/FastAPI.png",
    "Nest.js": "/tech/Nest.js.png",
    Laravel: "/tech/Laravel.png",
    PHP: "/tech/PHP.png",
    Java: "/tech/Java.png",
    Kotlin: "/tech/Kotlin.png",
    Dart: "/tech/Dart.png",
    Rust: "/tech/Rust.png",
    "C++": "/tech/c-plus-plus.png",
    "C#": "/tech/C# (CSharp).png",
    ".NET": "/tech/NET.png",
    MySQL: "/tech/MySQL.png",
    Azure: "/tech/Azure.png",
    Cloudflare: "/tech/Cloudflare.png",
    "Digital Ocean": "/tech/Digital Ocean.png",
    Vercel: "/tech/Vercel.png",
    Gatsby: "/tech/Gatsby.png",
    Svelte: "/tech/Svelte.png",
    Astro: "/tech/Astro.png",
    "Vite.js": "/tech/Vite.js.png",
    Bootstrap: "/tech/Bootstrap.png",
    Redux: "/tech/Redux.png",
    WordPress: "/tech/WordPress.png",
    WooCommerce: "/tech/WooCommerce.png",
    Salesforce: "/tech/Salesforce.png",
    Electron: "/tech/Electron.png",
    Capacitor: "/tech/Capacitor.png",
    Tauri: "/tech/Tauri.png",
    "Three.js": "/tech/Three.js.png",
    "p5.js": "/tech/p5 JS.png",
    OpenCV: "/tech/OpenCV.png",
    R: "/tech/R.png",
    Bun: "/tech/Bun.png",
    Fastify: "/tech/Fastify.png",
    Jest: "/tech/Jest.png",
    ESLint: "/tech/ESLint.png",
    Storybook: "/tech/Storybook.png",
    Postman: "/tech/Postman.png",
    Playwright: "/tech/Playwrite.png",
    Arduino: "/tech/Arduino.png",
    Linux: "/tech/Linux.png",
    "Ant Design": "/tech/Ant Design.png",
    Kubernetes: "/tech/Kubernetes.png",
    TensorFlow: "/tech/TensorFlow.png",
    Solidity: "/tech/Solidity.png",
    "Vue.js": "/tech/Vue.js.png",
    "Nuxt.js": "/tech/Nuxt JS.png",
  };

  return (
    logoMap[techName] ||
    "/placeholder.svg?height=60&width=120&text=" + encodeURIComponent(techName)
  );
};

const technologies = [
  {
    name: "React",
    category: "Frontend",
    description:
      "A JavaScript library for building user interfaces with component-based architecture",
    logo: getTechLogo("React"),
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Framework",
    description:
      "Full-stack React framework with server-side rendering and static site generation",
    logo: getTechLogo("Next.js"),
    color: "#000000",
  },
  {
    name: "TypeScript",
    category: "Language",
    description:
      "Typed superset of JavaScript that compiles to plain JavaScript",
    logo: getTechLogo("TypeScript"),
    color: "#3178C6",
  },
  {
    name: "Node.js",
    category: "Backend",
    description:
      "JavaScript runtime built on Chrome's V8 engine for server-side development",
    logo: getTechLogo("Node.js"),
    color: "#339933",
  },
  {
    name: "Python",
    category: "Language",
    description:
      "High-level programming language perfect for AI, ML, and backend development",
    logo: getTechLogo("Python"),
    color: "#3776AB",
  },
  {
    name: "React Native",
    category: "Mobile",
    description: "Cross-platform mobile app development using React components",
    logo: getTechLogo("React Native"),
    color: "#61DAFB",
  },
  {
    name: "Flutter",
    category: "Mobile",
    description:
      "Google's UI toolkit for building natively compiled mobile applications",
    logo: getTechLogo("Flutter"),
    color: "#02569B",
  },
  {
    name: "AWS",
    category: "Cloud",
    description: "Amazon Web Services - comprehensive cloud computing platform",
    logo: getTechLogo("AWS"),
    color: "#FF9900",
  },
  {
    name: "Docker",
    category: "DevOps",
    description:
      "Platform for developing, shipping, and running applications in containers",
    logo: getTechLogo("Docker"),
    color: "#2496ED",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description:
      "Advanced open-source relational database with strong SQL compliance",
    logo: getTechLogo("PostgreSQL"),
    color: "#336791",
  },
  {
    name: "MongoDB",
    category: "Database",
    description:
      "NoSQL document database designed for modern application developers",
    logo: getTechLogo("MongoDB"),
    color: "#47A248",
  },
  {
    name: "GraphQL",
    category: "API",
    description: "Query language and runtime for APIs with strong type system",
    logo: getTechLogo("GraphQL"),
    color: "#E10098",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    description:
      "Container orchestration platform for automating deployment and scaling",
    logo: getTechLogo("Kubernetes"),
    color: "#326CE5",
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    description:
      "Open-source machine learning framework for building AI applications",
    logo: getTechLogo("TensorFlow"),
    color: "#FF6F00",
  },
  {
    name: "Solidity",
    category: "Blockchain",
    description:
      "Programming language for writing smart contracts on Ethereum blockchain",
    logo: getTechLogo("Solidity"),
    color: "#363636",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    description:
      "Progressive JavaScript framework for building user interfaces",
    logo: getTechLogo("Vue.js"),
    color: "#4FC08D",
  },
  {
    name: "Svelte",
    category: "Frontend",
    description: "Svelte is a compiler for building user interfaces",
    logo: getTechLogo("Svelte"),
    color: "#FF3E00",
  },
  {
    name: "Astro",
    category: "Frontend",
    description: "Astro is a static site builder for building fast websites",
    logo: getTechLogo("Astro"),
    color: "#000000",
  },
  {
    name: "Vite.js",
    category: "Frontend",
    description: "Vite.js is a build tool for building fast websites",
    logo: getTechLogo("Vite.js"),
    color: "#FF3E00",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    description:
      "Bootstrap is a CSS framework for building responsive websites",
    logo: getTechLogo("Bootstrap"),
    color: "#563D7C",
  },
  {
    name: "Redux",
    category: "Frontend",
    description:
      "Redux is a state management library for building web applications",
    logo: getTechLogo("Redux"),
    color: "#764ABC",
  },
  {
    name: "WordPress",
    category: "Frontend",
    description:
      "WordPress is a content management system for building websites",
    logo: getTechLogo("WordPress"),
    color: "#21759B",
  },
  {
    name: "WooCommerce",
    category: "Frontend",
    description: "WooCommerce is a plugin for building e-commerce websites",
    logo: getTechLogo("WooCommerce"),
    color: "#96588A",
  },
  {
    name: "Nuxt.js",
    category: "Frontend",
    description:
      "Nuxt.js is a framework for building server-side rendered Vue.js applications",
    logo: getTechLogo("Nuxt.js"),
    color: "#00C58E",
  },
  {
    name: "Angular",
    category: "Frontend",
    description: "Platform for building mobile and desktop web applications",
    logo: getTechLogo("Angular"),
    color: "#DD0031",
  },
  {
    name: "Firebase",
    category: "Backend",
    description:
      "Google's platform for building and running mobile and web applications",
    logo: getTechLogo("Firebase"),
    color: "#FFCA28",
  },
  {
    name: "Redis",
    category: "Database",
    description:
      "In-memory data structure store used as database, cache, and message broker",
    logo: getTechLogo("Redis"),
    color: "#DC382D",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description:
      "Utility-first CSS framework for rapidly building custom designs",
    logo: getTechLogo("Tailwind CSS"),
    color: "#06B6D4",
  },
];

const categoryIcons = {
  Frontend: Globe,
  Framework: Code,
  Language: Code,
  Backend: Database,
  Mobile: Smartphone,
  Cloud: Cloud,
  DevOps: Cpu,
  Database: Database,
  API: Code,
  "AI/ML": Cpu,
  Blockchain: Code,
  Styling: Globe,
};

const categoryColors = {
  Frontend: "from-blue-500 to-cyan-500",
  Framework: "from-purple-500 to-pink-500",
  Language: "from-green-500 to-emerald-500",
  Backend: "from-orange-500 to-red-500",
  Mobile: "from-indigo-500 to-purple-500",
  Cloud: "from-sky-500 to-blue-500",
  DevOps: "from-gray-500 to-slate-500",
  Database: "from-yellow-500 to-orange-500",
  API: "from-teal-500 to-cyan-500",
  "AI/ML": "from-rose-500 to-pink-500",
  Blockchain: "from-violet-500 to-purple-500",
  Styling: "from-emerald-500 to-teal-500",
};

export default function TechStackSection() {
  const [hoveredTech, setHoveredTech] = useState<
    (typeof technologies)[0] | null
  >(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleTechHover = (
    tech: (typeof technologies)[0],
    event: React.MouseEvent
  ) => {
    setHoveredTech(tech);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleTechLeave = () => {
    setHoveredTech(null);
  };

  return (
    <section className="relative z-10 py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-foreground">
            Our Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and
            innovative solutions
          </p>
        </motion.div>

        {/* Category Stats */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(categoryIcons).map(([category, Icon], index) => {
            const count = technologies.filter(
              (tech) => tech.category === category
            ).length;
            return (
              <div
                key={category}
                className="text-center p-4 bg-card rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${
                    categoryColors[category as keyof typeof categoryColors]
                  } rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary">{count}</div>
                <div className="text-xs text-muted-foreground">{category}</div>
              </div>
            );
          })}
        </motion.div> */}

        {/* Infinite Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <Marquee pauseOnHover className="py-8 [--gap:2rem]">
            {technologies.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                onMouseEnter={(e) => handleTechHover(tech, e)}
                onMouseLeave={handleTechLeave}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative p-6 bg-card rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50">
                  <div className="w-24 h-16 flex items-center justify-center mb-4">
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm mb-1 text-card-foreground">
                      {tech.name}
                    </h3>
                    <div
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                        categoryColors[
                          tech.category as keyof typeof categoryColors
                        ]
                      } text-white`}
                    >
                      {tech.category}
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.color}40, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>

        {/* Technology Description Tooltip */}
        <AnimatePresence>
          {hoveredTech && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed z-50 pointer-events-none"
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y - 100,
                maxWidth: "320px",
              }}
            >
              <div className="bg-popover rounded-xl shadow-2xl border p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                      categoryColors[
                        hoveredTech.category as keyof typeof categoryColors
                      ]
                    } flex items-center justify-center`}
                  >
                    {(() => {
                      const Icon =
                        categoryIcons[
                          hoveredTech.category as keyof typeof categoryIcons
                        ];
                      return <Icon className="w-4 h-4 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h4 className="font-semibold text-popover-foreground">
                      {hoveredTech.name}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {hoveredTech.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {hoveredTech.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Ready to Build with Modern Technology?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our expert team stays current with the latest technologies to
            deliver cutting-edge solutions for your business
          </p>
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Tech Stack
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
