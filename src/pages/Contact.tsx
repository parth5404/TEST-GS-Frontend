import React from 'react';
import { motion } from 'framer-motion';
import ContactDetails from '../components/core/ContactPage/ContactDetails.tsx';
import ContactUsForm from '../components/core/ContactPage/ContactUsForm.tsx';
import Footer from '../components/common/Footer.tsx';
import StarryBackground from '../components/common/StarryBackground.tsx';

const Contact: React.FC = () => {
  return (
    <div className="text-base-content font-sans">
      <StarryBackground />

      {/* Hero Section */}
      <motion.div
        className="relative pt-28 pb-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-glow">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-base-content/80">
            We're here to help. Reach out to us with any questions or feedback.
          </p>
        </div>
      </motion.div>
      {/* Contact Form and Details Section */}
      <div className="container mx-auto pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContactDetails />
          </motion.div>
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="mb-8 text-base-content/80">
              Have a question or a project in mind? Fill out the form, and we'll get back to you.
            </p>
            <ContactUsForm />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
