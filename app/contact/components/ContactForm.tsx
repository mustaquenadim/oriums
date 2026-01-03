'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactForm() {
  const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey || typeof window === 'undefined') return;
    const id = `recaptcha-script`;
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      let recaptchaToken: string | undefined = undefined;
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

      if (
        siteKey &&
        typeof window !== 'undefined' &&
        (window as any).grecaptcha
      ) {
        try {
          await new Promise<void>((resolve) =>
            (window as any).grecaptcha.ready(() => resolve())
          );
          recaptchaToken = await (window as any).grecaptcha.execute(siteKey, {
            action: 'contact',
          });
        } catch (err) {
          console.warn('reCAPTCHA failed:', err);
        }
      }

      const payload = { ...formData, recaptchaToken };

      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || data?.error) {
        console.error('send-email error:', data);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');

        // Reset form after success (keep success message visible briefly)
        setTimeout(() => {
          setSubmitStatus('idle');
          setFormData(initialForm);
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        className='bg-card border p-8 rounded-2xl shadow-sm'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='text-center'>
          <CheckCircle className='h-16 w-16 text-primary mx-auto mb-4' />
          <h3 className='text-2xl font-bold text-card-foreground mb-2'>
            Message Sent Successfully!
          </h3>
          <p className='text-muted-foreground mb-6'>
            Thank you for reaching out. We'll get back to you within 2 hours
            during business hours.
          </p>
          <div className='bg-primary/10 p-4 rounded-lg'>
            <p className='text-primary text-sm'>
              📧 Confirmation email sent to {formData.email}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className='bg-card border p-8 rounded-2xl shadow-sm'
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-card-foreground mb-4'>
          Start Your Project
        </h2>
        <p className='text-muted-foreground'>
          Fill out the form below and we'll get back to you with a detailed
          proposal.
        </p>
      </div>

      {submitStatus === 'error' && (
        <div className='bg-red-50 border border-red-200 text-red-800 p-4 rounded-md mb-4'>
          <strong>Something went wrong.</strong> Please try again or email{' '}
          <a href='mailto:hello@oriums.com' className='underline'>
            hello@oriums.com
          </a>
          .
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Name Fields */}
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='firstName'
              className='block text-sm font-medium text-foreground mb-2'
            >
              First Name *
            </label>
            <Input
              id='firstName'
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              required
              className='w-full'
            />
          </div>
          <div>
            <label
              htmlFor='lastName'
              className='block text-sm font-medium text-foreground mb-2'
            >
              Last Name *
            </label>
            <Input
              id='lastName'
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              required
              className='w-full'
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-foreground mb-2'
            >
              Email Address *
            </label>
            <Input
              id='email'
              type='email'
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              className='w-full'
            />
          </div>
          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-foreground mb-2'
            >
              Phone Number
            </label>
            <Input
              id='phone'
              type='tel'
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className='w-full'
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor='company'
            className='block text-sm font-medium text-foreground mb-2'
          >
            Company Name
          </label>
          <Input
            id='company'
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className='w-full'
          />
        </div>

        {/* Project Details */}
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-foreground mb-2'>
              Project Type *
            </label>
            <Select
              value={formData.projectType}
              onValueChange={(value) => handleChange('projectType', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select project type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='web-development'>Web Development</SelectItem>
                <SelectItem value='mobile-app'>Mobile App</SelectItem>
                <SelectItem value='ui-ux-design'>UI/UX Design</SelectItem>
                <SelectItem value='ai-ml'>AI/ML Solutions</SelectItem>
                <SelectItem value='blockchain'>Blockchain</SelectItem>
                <SelectItem value='consulting'>Consulting</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className='block text-sm font-medium text-foreground mb-2'>
              Budget Range
            </label>
            <Select
              value={formData.budget}
              onValueChange={(value) => handleChange('budget', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select budget range' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='under-10k'>Under $10,000</SelectItem>
                <SelectItem value='10k-25k'>$10,000 - $25,000</SelectItem>
                <SelectItem value='25k-50k'>$25,000 - $50,000</SelectItem>
                <SelectItem value='50k-100k'>$50,000 - $100,000</SelectItem>
                <SelectItem value='over-100k'>Over $100,000</SelectItem>
                <SelectItem value='discuss'>Let's Discuss</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label className='block text-sm font-medium text-foreground mb-2'>
            Project Timeline
          </label>
          <Select
            value={formData.timeline}
            onValueChange={(value) => handleChange('timeline', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder='When do you need this completed?' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='asap'>ASAP</SelectItem>
              <SelectItem value='1-month'>Within 1 month</SelectItem>
              <SelectItem value='2-3-months'>2-3 months</SelectItem>
              <SelectItem value='3-6-months'>3-6 months</SelectItem>
              <SelectItem value='6-months-plus'>6+ months</SelectItem>
              <SelectItem value='flexible'>Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-foreground mb-2'
          >
            Project Details *
          </label>
          <Textarea
            id='message'
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={5}
            placeholder='Tell us about your project, goals, and any specific requirements...'
            required
            className='w-full'
          />
        </div>

        {/* Submit Button */}
        <Button
          type='submit'
          size='lg'
          className='w-full'
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2' />
              Sending Message...
            </>
          ) : (
            <>
              <Send className='mr-2 h-4 w-4' />
              Send Message
            </>
          )}
        </Button>

        <p className='text-sm text-muted-foreground text-center'>
          By submitting this form, you agree to our privacy policy and terms of
          service.
        </p>
      </form>
    </motion.div>
  );
}
