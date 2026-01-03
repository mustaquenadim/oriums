"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content:
      "Working at Oriums has been an incredible journey. The team is supportive, the projects are challenging, and there's always room to learn and grow. The work-life balance is exceptional.",
    author: "Sarah Chen",
    position: "Senior Full Stack Developer",
    tenure: "3 years at Oriums",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "The collaborative culture here is amazing. Everyone is willing to help and share knowledge. I've grown more in my 2 years here than in my previous 5 years elsewhere.",
    author: "Marcus Johnson",
    position: "Mobile App Developer",
    tenure: "2 years at Oriums",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "As a designer, I love how much creative freedom I have here. The team values good design and gives me the resources and time to create something truly exceptional.",
    author: "Emily Rodriguez",
    position: "UI/UX Designer",
    tenure: "1.5 years at Oriums",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function EmployeeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-mono mb-4">What Our Team Says</h2>
          <p className="text-xl text-muted-foreground">
            Hear from our employees about their experience at Oriums
          </p>
        </motion.div>

        <div className="relative h-[400px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <div className="flex flex-col items-center px-4">
                <div className="mb-8">
                  <Quote className="h-12 w-12 text-primary rotate-180" />
                </div>

                <p className="text-2xl text-center max-w-3xl mb-8 text-muted-foreground leading-relaxed">
                  {testimonials[currentIndex].content}
                </p>

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-lg">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-sm text-primary">
                      {testimonials[currentIndex].tenure}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-4 z-10">
            <Button
              onClick={() => paginate(-1)}
              variant="outline"
              size="icon"
              className="pointer-events-auto bg-background hover:bg-primary hover:text-primary-foreground shadow-lg rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={() => paginate(1)}
              variant="outline"
              size="icon"
              className="pointer-events-auto bg-background hover:bg-primary hover:text-primary-foreground shadow-lg rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
              size="icon"
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
