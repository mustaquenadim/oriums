'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Users, Trophy, Coffee } from 'lucide-react';

const cultureValues = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description:
      'We encourage creative thinking and embrace new technologies to solve complex problems.',
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description:
      'We believe in the power of teamwork and foster an environment of mutual support.',
  },
  {
    icon: Trophy,
    title: 'Excellence Driven',
    description:
      'We strive for excellence in everything we do and celebrate achievements together.',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description:
      'We promote a healthy work-life balance with flexible schedules and remote work options.',
  },
];

export default function CompanyCulture() {
  return (
    <section className='relative z-10 px-6 py-24'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl font-mono mb-4'>Our Culture</h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            At Oriums, we've built a culture that values innovation,
            collaboration, and personal growth
          </p>
        </motion.div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {cultureValues.map((value, index) => (
            <motion.div
              key={value.title}
              className='text-center p-8 bg-card rounded-2xl shadow-lg border border-muted-foreground/10'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10'>
                <value.icon className='h-8 w-8 text-primary' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>{value.title}</h3>
              <p className='text-muted-foreground'>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
