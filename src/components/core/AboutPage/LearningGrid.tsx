import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const learningGridData = [
  {
    order: -1,
    heading: 'World-Class Learning for',
    highlightText: 'Anyone, Anywhere',
    description:
      'GS Academia partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.',
    BtnLink: '/signup',
    BtnText: 'Learn More',
  },
  {
    order: 1,
    heading: 'Curriculum Based on Industry Needs',
    description: 'Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.',
  },
  {
    order: 2,
    heading: 'Our Learning Methods',
    description: 'The learning process uses the namely online and offline modes to interact.',
  },
  {
    order: 3,
    heading: 'Certification',
    description: 'You will get a certificate that can be used as a certification for completing a course.',
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description: 'You can immediately get feedback just like writing in the real world.',
  },
  {
    order: 5,
    heading: 'Ready to Work',
    description: 'Connected with over 150+ hiring partners, you will have the opportunity to find your dream job.',
  },
];

const LearningGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 container mx-auto py-20 gap-8">
      {learningGridData.map((card, index) => (
        <motion.div
          key={index}
          className={`
            ${card.order === -1 ? 'lg:col-span-2 lg:row-span-2' : ''}
            ${card.order % 2 === 1 ? 'bg-white/5' : 'bg-transparent border border-white/10'}
            p-6 rounded-lg backdrop-blur-sm
          `}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {card.order === -1 ? (
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {card.heading} <span className="text-primary">{card.highlightText}</span>
                </h2>
                <p className="mt-4 text-base-content/80">{card.description}</p>
              </div>
              <div className="mt-6">
                <Button variant="primary">
                  {card.BtnText} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-white mb-3">{card.heading}</h3>
              <p className="text-base-content/80">{card.description}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default LearningGrid;
