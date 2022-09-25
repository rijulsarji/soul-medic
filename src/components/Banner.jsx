import React from 'react'
import { motion } from 'framer-motion';
import "../styles/components/Banner.css";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.15 }}
      className="homeBody"
    >
      <h1>Get Healings Done</h1>
      <p>Your Way to Inner Peace</p>

      <div className="homeButton">
        <p>More Info</p>
      </div>
    </motion.div>
  );
}

export default Banner