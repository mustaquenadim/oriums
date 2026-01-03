import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin as LinkedIn,
  Instagram,
  Github as GitHub,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ThemeToggle from '../ThemeToggle';

const companyLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const servicesLinks = [
  { name: 'Mobile Development', href: '#services' },
  { name: 'Web Development', href: '#services' },
  { name: 'UI/UX Design', href: '#services' },
  { name: 'Cloud Services', href: '#services' },
];

const resourcesLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Help Center', href: '/help' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/oriums.software/',
  },
  // { name: 'Twitter', icon: Twitter, href: '#' },
  // { name: 'LinkedIn', icon: LinkedIn, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  // { name: 'GitHub', icon: GitHub, href: '#' },
  // { name: 'YouTube', icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className='relative z-10 bg-muted/50 border-t'>
      {/* Newsletter Section */}
      {/* <div className='border-b'>
        <div className='mx-auto max-w-7xl px-6 py-12'>
          <div className='grid gap-8 lg:grid-cols-2 lg:gap-16'>
            <div>
              <h3 className='text-2xl font-semibold mb-2'>
                Subscribe to Our Newsletter
              </h3>
              <p className='text-muted-foreground'>
                Stay updated with the latest insights in technology and software
                development
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Input
                type='email'
                placeholder='Enter your email'
                className='flex-1'
              />
              <Button variant='default' size='lg'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className='mx-auto max-w-7xl px-6 py-16'>
        <div className='grid gap-12 lg:grid-cols-5'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <Link href='/' className='inline-block mb-6'>
              <span className='text-2xl font-bold text-primary'>Oriums</span>
            </Link>
            <p className='text-muted-foreground mb-8 max-w-md'>
              We are a leading software development company specializing in
              creating innovative digital solutions for businesses worldwide.
            </p>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <MapPin className='h-5 w-5 text-primary mt-1' />
                <p className='ml-3 text-muted-foreground'>
                  Riyadh, Saudi Arabia
                </p>
              </div>
              <div className='flex items-center'>
                <Phone className='h-5 w-5 text-primary' />
                <p className='ml-3 text-muted-foreground'>+966 50 735 1612</p>
              </div>
              <div className='flex items-center'>
                <Mail className='h-5 w-5 text-primary' />
                <p className='ml-3 text-muted-foreground'>
                  the.oriums@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Company</h4>
            <ul className='space-y-4'>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-6'>Services</h4>
            <ul className='space-y-4'>
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-6'>Resources</h4>
            <ul className='space-y-4'>
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-16 pt-8 border-t'>
          <div className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex items-center gap-6'>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className='h-5 w-5' />
                </Link>
              ))}
            </div>

            <div className='flex items-center gap-4'>
              <ThemeToggle />
              <p className='text-muted-foreground text-sm'>
                &copy; {new Date().getFullYear()} Oriums. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
