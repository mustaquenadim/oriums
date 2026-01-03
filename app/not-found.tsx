"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomCursor from "./components/CustomCursor";
import BackgroundGrid from "./components/BackgroundGrid";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground flex items-center justify-center">
      {/* <CustomCursor variant={cursorVariant} /> */}
      {/* <BackgroundGrid /> */}

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        {/* Error Code */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-foreground/10 dark:text-foreground/5 mb-4">
            404
          </h1>
        </motion.div>

        {/* Badge */}
        <motion.div
          className="mb-8 inline-flex items-center rounded-full border bg-card px-4 py-2 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="mr-2">
            <Search className="w-4 h-4" />
          </span>
          <span className="text-sm text-muted-foreground">Page not found</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="mb-6 text-4xl font-normal leading-tight text-foreground md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Oops! This page
          <br />
          doesn't exist
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mx-auto mb-12 max-w-2xl text-xl font-normal text-muted-foreground md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The page you're looking for might have been moved, deleted, or doesn't
          exist. Let's get you back on track.
        </motion.p>

        {/* Action Buttons */}
        {/* <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 py-6 text-lg font-medium text-primary-foreground shadow-md transition-all duration-200 hover:shadow-lg"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-medium"
          >
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </motion.div> */}

        {/* Back Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
