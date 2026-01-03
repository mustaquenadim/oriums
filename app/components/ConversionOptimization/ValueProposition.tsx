"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Free consultation and project estimation",
  "30-day money-back guarantee",
  "Dedicated project manager assigned",
  "Regular progress updates and demos",
  "Post-launch support and maintenance",
  "Scalable solutions that grow with you",
];

export default function ValueProposition() {
  return (
    <section className="relative z-10 bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                4.9/5 from 200+ reviews
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Transform Your Business with
              <span className="text-primary"> Expert Development</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of successful companies who've accelerated their
              growth with our proven development process and dedicated team.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex-shrink-0 rounded-full bg-primary/10 p-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 sm:flex-none">
                Start Your Project Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 sm:flex-none"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl shadow-lg p-8 border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                  Get Started Today
                </h3>
                <p className="text-muted-foreground">
                  Free consultation • No commitment required
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="font-medium text-card-foreground">
                    Free Consultation
                  </span>
                  <span className="text-primary font-bold">$0</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="font-medium text-card-foreground">
                    Project Estimation
                  </span>
                  <span className="text-primary font-bold">Free</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="font-medium text-card-foreground">
                    30-Day Guarantee
                  </span>
                  <span className="text-primary font-bold">Included</span>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg">
                Book Free Consultation
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                No spam, unsubscribe at any time
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
