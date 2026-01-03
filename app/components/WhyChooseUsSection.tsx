'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Users,
  Clock,
  Shield,
  Lightbulb,
  Target,
  Heart,
  Zap,
  CheckCircle,
  Star,
  TrendingUp,
  Headphones,
} from 'lucide-react';

const mainReasons = [
  {
    id: 1,
    icon: Award,
    title: 'Proven Track Record',
    subtitle: '500+ Successful Projects Delivered',
    description:
      "With over 12 years in the industry, we've successfully delivered 500+ projects across various sectors, maintaining a 98% client satisfaction rate and helping businesses achieve their digital transformation goals.",
    stats: [
      { label: 'Projects Completed', value: '500+' },
      { label: 'Client Satisfaction', value: '98%' },
      { label: 'Years Experience', value: '12+' },
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    id: 2,
    icon: Users,
    title: 'Expert Team',
    subtitle: '50+ Senior-Level Professionals',
    description:
      'Our team consists of 50+ senior developers, designers, and strategists with an average of 8+ years experience. We invest heavily in continuous learning and stay ahead of technology trends to deliver cutting-edge solutions.',
    stats: [
      { label: 'Team Members', value: '50+' },
      { label: 'Avg Experience', value: '8+ Years' },
      { label: 'Certifications', value: '100+' },
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    id: 3,
    icon: Lightbulb,
    title: 'Innovation-Driven',
    subtitle: 'Cutting-Edge Solutions',
    description:
      "We don't just follow trends – we set them. Our innovation lab explores emerging technologies like AI, blockchain, and IoT to create solutions that give you a competitive advantage in the market.",
    stats: [
      { label: 'R&D Investment', value: '15%' },
      { label: 'New Tech Adopted', value: '25+' },
      { label: 'Innovation Awards', value: '12' },
    ],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    id: 4,
    icon: Heart,
    title: 'Client-Centric Approach',
    subtitle: 'Your Success is Our Priority',
    description:
      'We believe in building long-term partnerships, not just completing projects. Our dedicated account managers ensure personalized attention, transparent communication, and solutions tailored to your unique business needs.',
    stats: [
      { label: 'Client Retention', value: '92%' },
      { label: 'Response Time', value: '<2 Hours' },
      { label: 'Long-term Clients', value: '75%' },
    ],
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
  },
];

const additionalBenefits = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      '99% of our projects are delivered on schedule with our proven agile methodology',
  },
  {
    icon: Shield,
    title: 'Risk-Free Partnership',
    description:
      '30-day money-back guarantee and comprehensive insurance coverage',
  },
  {
    icon: Target,
    title: 'ROI-Focused Solutions',
    description:
      'Average 300% ROI improvement for clients within the first year',
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description:
      'See your ideas come to life with our 2-week MVP development process',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description: 'Future-proof solutions that grow with your business needs',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services',
  },
];

const testimonialHighlights = [
  {
    quote:
      'Oriums transformed our business with their innovative approach and exceptional execution.',
    author: 'Sarah Johnson, CEO of TechCorp',
    rating: 5,
  },
  {
    quote:
      "The best development partner we've ever worked with. Highly recommended!",
    author: 'Michael Chen, CTO of StartupX',
    rating: 5,
  },
  {
    quote:
      'Outstanding quality, on-time delivery, and excellent communication throughout.',
    author: 'Emily Rodriguez, Product Manager',
    rating: 5,
  },
];

export default function WhyChooseUsSection() {
  const [activeReason, setActiveReason] = useState(1);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  return (
    <section className='relative z-10 py-24 bg-muted/30'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='inline-flex items-center rounded-full border bg-secondary px-4 py-2 mb-6'>
            <Star className='w-4 h-4 text-primary mr-2' />
            <span className='text-sm font-semibold text-secondary-foreground'>
              Why Choose Oriums
            </span>
          </div>
          <h2 className='text-4xl mb-4 text-foreground'>
            The Smart Choice for Your
            <span className='block text-primary'>Digital Transformation</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            When you partner with Oriums, you're not just hiring a development
            team – you're gaining a strategic ally committed to your success
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <div className='grid lg:grid-cols-2 gap-8 mb-20'>
          {/* Interactive Reason Cards */}
          <div className='space-y-4'>
            {mainReasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeReason === reason.id
                    ? `bg-primary/10 border-primary/50 shadow-lg`
                    : 'bg-card hover:border-primary/30'
                }`}
                onClick={() => setActiveReason(reason.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className='flex items-start gap-4'>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${reason.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <reason.icon className='w-6 h-6 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold mb-1 text-card-foreground'>
                      {reason.title}
                    </h3>
                    <p className='text-sm text-primary font-medium mb-2'>
                      {reason.subtitle}
                    </p>
                    <p className='text-muted-foreground text-sm'>
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Reason Details */}
          <div className='lg:sticky lg:top-8'>
            <AnimatePresence mode='wait'>
              {mainReasons.map(
                (reason) =>
                  activeReason === reason.id && (
                    <motion.div
                      key={reason.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className='bg-card rounded-2xl shadow-2xl border p-8'
                    >
                      <div className='text-center mb-8'>
                        <div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${reason.color} flex items-center justify-center mx-auto mb-4`}
                        >
                          <reason.icon className='w-10 h-10 text-white' />
                        </div>
                        <h3 className='text-2xl font-bold mb-2 text-card-foreground'>
                          {reason.title}
                        </h3>
                        <p className='text-primary font-semibold'>
                          {reason.subtitle}
                        </p>
                      </div>

                      <p className='text-muted-foreground mb-8 text-center'>
                        {reason.description}
                      </p>

                      <div className='grid grid-cols-3 gap-4'>
                        {reason.stats.map((stat, index) => (
                          <div
                            key={index}
                            className='text-center p-4 bg-muted rounded-xl'
                          >
                            <div className='text-2xl font-bold text-primary mb-1'>
                              {stat.value}
                            </div>
                            <div className='text-xs text-muted-foreground'>
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mb-20'
        >
          <h3 className='text-2xl font-semibold text-center mb-12'>
            Additional Benefits You'll Love
          </h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className='p-6 bg-card rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 group cursor-pointer'
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
                whileHover={{ y: -5 }}
              >
                <div className='flex items-start gap-4'>
                  <div
                    className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 ${
                      hoveredBenefit === index
                        ? 'bg-primary text-white'
                        : 'text-primary'
                    }`}
                  >
                    <benefit.icon className='w-5 h-5' />
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2 text-card-foreground'>
                      {benefit.title}
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials Highlight */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card rounded-2xl shadow-xl border p-8 mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-card-foreground">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialHighlights.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-3 italic">"{testimonial.quote}"</p>
                <p className="text-xs font-medium text-card-foreground">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-primary-foreground'
        >
          <h3 className='text-3xl font-bold mb-4'>
            Ready to Experience the Oriums Difference?
          </h3>
          <p className='text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
            Join hundreds of successful companies who've chosen Oriums as their
            trusted technology partner. Let's build something amazing together.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <motion.button
              className='px-8 py-4 bg-background text-primary rounded-full font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
            </motion.button>
            <motion.button
              className='px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-full font-medium hover:bg-primary-foreground hover:text-primary transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation
            </motion.button>
          </div>
          <div className='flex items-center justify-center mt-6 text-sm text-primary-foreground/90'>
            <CheckCircle className='w-4 h-4 mr-2' />
            No commitment required • Free project estimation
          </div>
        </motion.div>
      </div>
    </section>
  );
}
