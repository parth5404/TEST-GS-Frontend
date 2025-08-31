import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/common/Footer.tsx';
import GSAcademiaStats from '../components/core/AboutPage/GSAcademiaStats.tsx';
import LearningGrid from '../components/core/AboutPage/LearningGrid.tsx';
import Quote from '../components/core/AboutPage/Quote.tsx';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="relative py-32 pt-28 text-center bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About GS Academia
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Pioneering the future of online education with passion and innovation.
          </p>
        </div>
      </motion.div>
      
      <GSAcademiaStats />


      {/* Founding Story, Vision, Mission Section */}
      <div className="py-20 bg-black">
        <div className="container mx-auto text-center px-4">
          {/* Founding Story */}
          <motion.div
            className="lg:w-2/3 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
            <h2 className="text-4xl font-bold text-white mb-6">Our Founding Story</h2>
            <p className="mb-4 text-gray-300 text-lg">
              Our platform was born from a shared vision for accessible, high-quality education. It began with a group of educators and technologists who saw the need for flexible learning in a digital world.
            </p>
            <p className="text-gray-300 text-lg">
              We witnessed the limitations of traditional education and envisioned a platform to bridge these gaps, empowering individuals everywhere to unlock their full potential.
            </p>
          </motion.div>

          {/* Vision and Mission */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-20 text-left max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300">
                With this vision, we created an e-learning platform that revolutionizes learning. Our team developed a robust and intuitive platform that combines cutting-edge technology with engaging content for a dynamic learning experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300">
                Our mission is to build a vibrant community of learners. We believe in the power of shared knowledge and foster collaboration through forums, live sessions, and networking opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <LearningGrid />

      <Footer />
    </div>
  );
};

export default About;
