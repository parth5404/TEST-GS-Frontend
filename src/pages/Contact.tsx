import React from 'react';
import { motion } from 'framer-motion';
import ContactDetails from '../components/core/ContactPage/ContactDetails.tsx';
import ContactUsForm from '../components/core/ContactPage/ContactUsForm.tsx';
import Footer from '../components/common/Footer.tsx';

const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">

      {/* Hero Section */}
      <motion.div
        className="relative pt-32 pb-20 text-center bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            We're here to help. Reach out to us with any questions or feedback.
          </p>
        </div>
      </motion.div>
      
      {/* Contact Form and Details Section */}
      <div className="container mx-auto pb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-gray-900 border border-gray-700 p-8 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContactDetails />
          </motion.div>
          <motion.div
            className="bg-gray-900 border border-gray-700 p-8 rounded-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="mb-8 text-gray-300">
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
