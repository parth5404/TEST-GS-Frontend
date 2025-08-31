import React from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
  return (
    <motion.div
      className="container mx-auto py-20 px-4 bg-black"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-center text-white leading-tight">
        "We are passionate about revolutionizing the way we learn. Our innovative platform
        combines <span className="text-blue-400 font-semibold">technology</span>,
        <span className="text-blue-400 font-semibold"> expertise</span>, and
        <span className="text-blue-400 font-semibold"> community</span> to create an
        <span className="text-blue-400 font-semibold"> unparalleled educational experience</span>."
      </h2>
    </motion.div>
  );
};

export default Quote;
