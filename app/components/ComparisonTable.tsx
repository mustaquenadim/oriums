'use client';

import React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  X,
  AlertTriangle,
  Star,
  Users,
  Clock,
  DollarSign,
  Shield,
  Headphones,
  Zap,
} from 'lucide-react';
import CalButton from '@/components/CalButton';

type Rating = 'excellent' | 'moderate' | 'poor' | 'high';

interface RatingGroup {
  rating: Rating;
  text: string;
  details: string;
}

interface ComparisonRow {
  factor: string;
  icon: React.ComponentType<any>;
  description: string;
  freelancers: RatingGroup;
  agencies: RatingGroup;
  oriums: RatingGroup;
}

const comparisonData: ComparisonRow[] = [
  {
    factor: 'Cost Structure',
    icon: DollarSign,
    description: 'Overall project investment and pricing transparency',
    freelancers: {
      rating: 'moderate',
      text: 'Lower hourly rates but potential scope creep',
      details:
        'May seem cheaper initially but costs can escalate with revisions and additional requirements',
    },
    agencies: {
      rating: 'high',
      text: 'Higher rates with varying transparency',
      details: 'Often expensive with hidden costs and lengthy contracts',
    },
    oriums: {
      rating: 'excellent',
      text: 'Transparent pricing with fixed project costs',
      details: 'Clear upfront pricing, no hidden fees, flexible payment terms',
    },
  },
  {
    factor: 'Availability & Reliability',
    icon: Clock,
    description: 'Consistent availability and meeting deadlines',
    freelancers: {
      rating: 'poor',
      text: 'Limited availability, potential delays',
      details:
        'May juggle multiple projects, vacation delays, single point of failure',
    },
    agencies: {
      rating: 'moderate',
      text: 'Better availability but resource conflicts',
      details: 'May prioritize larger clients, resource allocation issues',
    },
    oriums: {
      rating: 'excellent',
      text: 'Dedicated team with guaranteed availability',
      details:
        'Full-time dedicated resources, backup team members, 99% on-time delivery',
    },
  },
  {
    factor: 'Range of Services',
    icon: Zap,
    description: 'Breadth and depth of technical capabilities',
    freelancers: {
      rating: 'poor',
      text: 'Limited to individual expertise',
      details:
        'Usually specialized in 1-2 areas, need multiple freelancers for complex projects',
    },
    agencies: {
      rating: 'moderate',
      text: 'Good range but may outsource',
      details: 'Broad services but often outsource specialized work',
    },
    oriums: {
      rating: 'excellent',
      text: 'Complete end-to-end solutions',
      details:
        '12+ service areas, full-stack capabilities, all work done in-house',
    },
  },
  {
    factor: 'Expertise & Quality',
    icon: Star,
    description: 'Technical skills and quality of deliverables',
    freelancers: {
      rating: 'moderate',
      text: 'Variable expertise levels',
      details: 'Quality depends on individual skill, limited peer review',
    },
    agencies: {
      rating: 'moderate',
      text: 'Mixed team capabilities',
      details: 'Inconsistent quality across team members, high turnover',
    },
    oriums: {
      rating: 'excellent',
      text: 'Senior-level expertise across all areas',
      details:
        'Rigorous hiring process, continuous training, code reviews by senior developers',
    },
  },
  {
    factor: 'Project Management',
    icon: Users,
    description: 'Organization, coordination, and delivery management',
    freelancers: {
      rating: 'poor',
      text: 'Self-managed, limited structure',
      details:
        'No formal project management, client must coordinate everything',
    },
    agencies: {
      rating: 'moderate',
      text: 'Formal processes but rigid',
      details: 'Structured but often inflexible, bureaucratic processes',
    },
    oriums: {
      rating: 'excellent',
      text: 'Agile methodology with dedicated PMs',
      details:
        'Certified project managers, agile sprints, regular updates, flexible approach',
    },
  },
  {
    factor: 'Communication',
    icon: Headphones,
    description: 'Responsiveness and clarity of communication',
    freelancers: {
      rating: 'moderate',
      text: 'Direct but inconsistent',
      details: 'Personal communication but may be unavailable, timezone issues',
    },
    agencies: {
      rating: 'moderate',
      text: 'Formal but slow',
      details: 'Multiple layers of communication, slower response times',
    },
    oriums: {
      rating: 'excellent',
      text: 'Proactive and transparent',
      details:
        'Dedicated communication channels, daily updates, 24-hour response guarantee',
    },
  },
  {
    factor: 'Risk & Security',
    icon: Shield,
    description: 'Data security, legal protection, and project risks',
    freelancers: {
      rating: 'poor',
      text: 'High risk, limited protection',
      details:
        'No legal recourse, data security concerns, project abandonment risk',
    },
    agencies: {
      rating: 'moderate',
      text: 'Better protection but complex contracts',
      details: 'Legal protection but complex terms, varying security standards',
    },
    oriums: {
      rating: 'excellent',
      text: 'Comprehensive protection & security',
      details:
        'Full legal protection, enterprise-grade security, insurance coverage, IP protection',
    },
  },
];

const ratingColors: Record<Rating, string> = {
  excellent: 'bg-green-500',
  moderate: 'bg-yellow-500',
  poor: 'bg-red-500',
  high: 'bg-red-500',
};

const ratingIcons: Record<Rating, React.ComponentType<any>> = {
  excellent: Check,
  moderate: AlertTriangle,
  poor: X,
  high: X,
};

export default function ComparisonTable() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [selectedColumn, setSelectedColumn] = useState<
    'freelancers' | 'agencies' | 'oriums' | null
  >(null);

  return (
    <section className='relative z-10 px-6 py-24 bg-background'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl mb-4 text-foreground'>Why Choose Oriums?</h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Compare the advantages of working with our dedicated team versus
            freelancers or other agencies
          </p>
        </motion.div>

        {/* Mobile View */}
        <div className='lg:hidden space-y-6'>
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              className='bg-card rounded-2xl shadow-lg border overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className='p-6 border-b'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='p-2 bg-primary/10 rounded-lg'>
                    <row.icon className='w-5 h-5 text-primary' />
                  </div>
                  <h3 className='text-lg font-semibold text-card-foreground'>
                    {row.factor}
                  </h3>
                </div>
                <p className='text-muted-foreground text-sm'>
                  {row.description}
                </p>
              </div>

              <div className='space-y-4 p-6'>
                {/* Oriums */}
                <div className='p-4 bg-primary/10 rounded-lg border border-primary/20'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='font-semibold text-primary'>Oriums</span>
                    <div
                      className={`w-6 h-6 rounded-full ${
                        ratingColors[row.oriums.rating]
                      } flex items-center justify-center`}
                    >
                      {React.createElement(ratingIcons[row.oriums.rating], {
                        className: 'w-4 h-4 text-white',
                      })}
                    </div>
                  </div>
                  <p className='text-sm text-primary mb-2'>{row.oriums.text}</p>
                  <p className='text-xs text-muted-foreground'>
                    {row.oriums.details}
                  </p>
                </div>

                {/* Other Agencies */}
                <div className='p-4 bg-muted rounded-lg border'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='font-semibold text-card-foreground'>
                      Other Agencies
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full ${
                        ratingColors[row.agencies.rating]
                      } flex items-center justify-center`}
                    >
                      {React.createElement(ratingIcons[row.agencies.rating], {
                        className: 'w-4 h-4 text-white',
                      })}
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground mb-2'>
                    {row.agencies.text}
                  </p>
                  <p className='text-xs text-muted-foreground'>
                    {row.agencies.details}
                  </p>
                </div>

                {/* Freelancers */}
                <div className='p-4 bg-muted rounded-lg border'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='font-semibold text-card-foreground'>
                      Freelancers
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full ${
                        ratingColors[row.freelancers.rating]
                      } flex items-center justify-center`}
                    >
                      {React.createElement(
                        ratingIcons[row.freelancers.rating],
                        { className: 'w-4 h-4 text-white' }
                      )}
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground mb-2'>
                    {row.freelancers.text}
                  </p>
                  <p className='text-xs text-muted-foreground'>
                    {row.freelancers.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View */}
        <div className='hidden lg:block'>
          <motion.div
            className='bg-card rounded-2xl shadow-lg border overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Table Header */}
            <div className='grid grid-cols-4 bg-muted border-b'>
              <div className='p-6'>
                <h3 className='text-lg font-semibold text-foreground'>
                  Comparison Factors
                </h3>
              </div>
              <div
                className={`p-6 cursor-pointer transition-colors ${
                  selectedColumn === 'freelancers'
                    ? 'bg-primary/10 border-b-2 border-primary'
                    : 'hover:bg-muted/50'
                }`}
                onClick={() =>
                  setSelectedColumn(
                    selectedColumn === 'freelancers' ? null : 'freelancers'
                  )
                }
              >
                <h3 className='text-lg font-semibold text-center text-foreground'>
                  Freelancers
                </h3>
              </div>
              <div
                className={`p-6 cursor-pointer transition-colors ${
                  selectedColumn === 'agencies'
                    ? 'bg-primary/10 border-b-2 border-primary'
                    : 'hover:bg-muted/50'
                }`}
                onClick={() =>
                  setSelectedColumn(
                    selectedColumn === 'agencies' ? null : 'agencies'
                  )
                }
              >
                <h3 className='text-lg font-semibold text-center text-foreground'>
                  Other Agencies
                </h3>
              </div>
              <div
                className={`p-6 cursor-pointer transition-colors bg-primary/10 border-b-2 border-primary ${
                  selectedColumn === 'oriums' ? 'bg-primary/20' : ''
                }`}
                onClick={() =>
                  setSelectedColumn(
                    selectedColumn === 'oriums' ? null : 'oriums'
                  )
                }
              >
                <h3 className='text-lg font-semibold text-center text-primary'>
                  Oriums
                </h3>
              </div>
            </div>

            {/* Table Body */}
            <div className='divide-y'>
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  className={`grid grid-cols-4 hover:bg-muted/30 transition-colors cursor-pointer ${
                    activeRow === index ? 'bg-primary/10' : ''
                  }`}
                  onClick={() =>
                    setActiveRow(activeRow === index ? null : index)
                  }
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Factor Column */}
                  <div className='p-6'>
                    <div className='flex items-center gap-3 mb-2'>
                      <div className='p-2 bg-primary/10 rounded-lg'>
                        <row.icon className='w-5 h-5 text-primary' />
                      </div>
                      <div>
                        <h4 className='font-semibold text-card-foreground'>
                          {row.factor}
                        </h4>
                      </div>
                    </div>
                    <p className='text-sm text-muted-foreground'>
                      {row.description}
                    </p>
                  </div>

                  {/* Freelancers Column */}
                  <div className='p-6 text-center'>
                    <div className='flex items-center justify-center mb-2'>
                      <div
                        className={`w-8 h-8 rounded-full ${
                          ratingColors[row.freelancers.rating]
                        } flex items-center justify-center`}
                      >
                        {React.createElement(
                          ratingIcons[row.freelancers.rating],
                          { className: 'w-4 h-4 text-white' }
                        )}
                      </div>
                    </div>
                    <p className='text-sm font-medium mb-1'>
                      {row.freelancers.text}
                    </p>
                    {activeRow === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className='text-xs text-gray-600'
                      >
                        {row.freelancers.details}
                      </motion.p>
                    )}
                  </div>

                  {/* Agencies Column */}
                  <div className='p-6 text-center'>
                    <div className='flex items-center justify-center mb-2'>
                      <div
                        className={`w-8 h-8 rounded-full ${
                          ratingColors[row.agencies.rating]
                        } flex items-center justify-center`}
                      >
                        {React.createElement(ratingIcons[row.agencies.rating], {
                          className: 'w-4 h-4 text-white',
                        })}
                      </div>
                    </div>
                    <p className='text-sm font-medium mb-1'>
                      {row.agencies.text}
                    </p>
                    {activeRow === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className='text-xs text-gray-600'
                      >
                        {row.agencies.details}
                      </motion.p>
                    )}
                  </div>

                  {/* Oriums Column */}
                  <div className='p-6 text-center bg-primary/10'>
                    <div className='flex items-center justify-center mb-2'>
                      <div
                        className={`w-8 h-8 rounded-full ${
                          ratingColors[row.oriums.rating]
                        } flex items-center justify-center`}
                      >
                        {React.createElement(ratingIcons[row.oriums.rating], {
                          className: 'w-4 h-4 text-white',
                        })}
                      </div>
                    </div>
                    <p className='text-sm font-medium mb-1 text-primary'>
                      {row.oriums.text}
                    </p>
                    {activeRow === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className='text-xs text-muted-foreground'
                      >
                        {row.oriums.details}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className='text-center mt-16 p-8 bg-gradient-to-r from-primary to-primary/80 rounded-2xl text-primary-foreground'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className='text-2xl font-semibold mb-4'>
            Ready to Experience the Oriums Advantage?
          </h3>
          <p className='text-primary-foreground/90 mb-6 max-w-2xl mx-auto'>
            Join hundreds of satisfied clients who chose quality, reliability,
            and excellence for their projects
          </p>
          <CalButton
            component={motion.button}
            className='px-8 py-4 bg-background text-primary rounded-full font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Consultation
          </CalButton>
        </motion.div>
      </div>
    </section>
  );
}
