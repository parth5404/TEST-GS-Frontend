import React from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
  return (
    <motion.div
      className="container mx-auto py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-center text-white leading-tight">
        "We are passionate about revolutionizing the way we learn. Our innovative platform
        combines <span className="text-glow">technology</span>,
        <span className="text-glow"> expertise</span>, and
        <span className="text-glow"> community</span> to create an
        <span className="text-primary"> unparalleled educational experience</span>."
      </h2>
    </motion.div>
  );
};

export default Quote;
