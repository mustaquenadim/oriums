'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  return (
    <section id='contact' className='relative z-10 px-6 py-24 bg-background'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl mb-4 text-foreground'>
            Let's Build Something Amazing Together
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Ready to transform your ideas into reality? Get in touch with us to
            discuss your project
          </p>
        </motion.div>

        <div className='grid gap-8 lg:grid-cols-2'>
          {/* Contact Information */}
          <motion.div
            className='space-y-8'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className='text-2xl font-semibold mb-6 text-foreground'>
                Get in Touch
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 p-3 bg-primary/10 rounded-lg'>
                    <Phone className='h-6 w-6 text-primary' />
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-medium text-foreground'>
                      Phone
                    </h4>
                    <p className='text-muted-foreground'>+966 50 735 1612</p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 p-3 bg-primary/10 rounded-lg'>
                    <Mail className='h-6 w-6 text-primary' />
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-medium text-foreground'>
                      Email
                    </h4>
                    <p className='text-muted-foreground'>
                      the.oriums@gmail.com
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 p-3 bg-primary/10 rounded-lg'>
                    <MapPin className='h-6 w-6 text-primary' />
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-medium text-foreground'>
                      Location
                    </h4>
                    <p className='text-muted-foreground'>
                      Riyadh, Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='p-8 bg-primary rounded-2xl text-primary-foreground'>
              <h3 className='text-2xl font-semibold mb-4'>
                Ready to Get Started?
              </h3>
              <p className='mb-6 text-primary-foreground/90'>
                Schedule a free consultation with our experts to discuss your
                project requirements.
              </p>
              <Button
                variant='secondary'
                size='lg'
                className='bg-background text-primary hover:bg-background/90 shadow-md hover:shadow-lg'
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className='space-y-6 p-8 bg-card rounded-2xl shadow-lg border'>
              <div className='grid gap-6 md:grid-cols-2'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium mb-2 text-card-foreground'
                  >
                    First Name
                  </label>
                  <Input id='first-name' required />
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium mb-2 text-card-foreground'
                  >
                    Last Name
                  </label>
                  <Input id='last-name' required />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2 text-card-foreground'
                >
                  Email
                </label>
                <Input id='email' type='email' required />
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium mb-2 text-card-foreground'
                >
                  Phone Number
                </label>
                <Input id='phone' type='tel' />
              </div>
              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium mb-2 text-card-foreground'
                >
                  Company
                </label>
                <Input id='company' />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2 text-card-foreground'
                >
                  Project Details
                </label>
                <Textarea
                  id='message'
                  rows={4}
                  placeholder='Tell us about your project...'
                  required
                />
              </div>
              <Button
                type='submit'
                size='lg'
                className='w-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200'
              >
                <Send className='mr-2 h-4 w-4' />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
