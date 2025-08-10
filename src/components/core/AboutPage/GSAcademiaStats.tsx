import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Video } from 'lucide-react';

const stats = [
  { icon: <Users />, count: '5K+', label: 'Active Students' },
  { icon: <BookOpen />, count: '10+', label: 'Mentors' },
  { icon: <Video />, count: '200+', label: 'Courses' },
  { icon: <Award />, count: '50+', label: 'Awards' },
];

const GSAcademiaStats = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-primary mb-3">{React.cloneElement(stat.icon, { size: 40 })}</div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.count}</h3>
              <p className="text-base-content/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GSAcademiaStats;
