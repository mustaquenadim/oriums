'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import CalButton from '@/components/CalButton';

export default function CallToAction() {
  return (
    <section className='relative z-10 px-6 py-24'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          className='relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-primary-foreground'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]' />
          </div>

          <div className='relative z-10'>
            <h2 className='text-4xl font-bold mb-4'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl mb-8 max-w-3xl mx-auto opacity-90'>
              Join hundreds of satisfied clients who have transformed their
              businesses with Oriums. Let's discuss how we can help you achieve
              your digital goals.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                size='lg'
                variant='secondary'
                className='group bg-white text-primary hover:bg-white/90'
              >
                <MessageCircle className='mr-2 h-5 w-5' />
                Start a Conversation
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </Button>

              <CalButton
                namespace='free-consultation'
                link='oriums/free-consultation'
                config={{ layout: 'month_view', theme: 'dark' }}
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-primary bg-transparent'
              >
                <Calendar className='mr-2 h-5 w-5' />
                Schedule a Consultation
              </CalButton>
            </div>

            <div className='mt-8 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm opacity-80'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-white rounded-full' />
                <span>Free initial consultation</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-white rounded-full' />
                <span>No commitment required</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-white rounded-full' />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className='mt-16 grid gap-8 md:grid-cols-3 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='p-6 bg-card border rounded-xl'>
            <h3 className='font-semibold mb-2'>Email Us</h3>
            <p className='text-muted-foreground mb-2'>
              Get in touch for project inquiries
            </p>
            <a
              href='mailto:hello@oriums.com'
              className='text-primary hover:underline'
            >
              hello@oriums.com
            </a>
          </div>

          <div className='p-6 bg-card border rounded-xl'>
            <h3 className='font-semibold mb-2'>Call Us</h3>
            <p className='text-muted-foreground mb-2'>
              Speak directly with our team
            </p>
            <a href='tel:+15551234567' className='text-primary hover:underline'>
              +1 (555) 123-4567
            </a>
          </div>

          <div className='p-6 bg-card border rounded-xl'>
            <h3 className='font-semibold mb-2'>Visit Us</h3>
            <p className='text-muted-foreground mb-2'>
              Our headquarters location
            </p>
            <address className='text-primary not-italic'>
              123 Innovation Street
              <br />
              Tech City, TC 12345
            </address>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
