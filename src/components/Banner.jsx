import { motion } from 'framer-motion';
import React from 'react'
import "../styles/components/Banner.css"

const Banner = () => {

  return (
    <motion.div className="bannerBody" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 0.15}}>
      <div className="bannerBG"></div>
      <div className='bannerContent'>
        <h1>Welcome to GetHealingsDone</h1>
        <p>Your way to inner peace</p>
      </div>
    </motion.div>
  );
}

export default Banner