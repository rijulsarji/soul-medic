import React from 'react'
import "../styles/pages/Home.css";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 0.15}} className='homeBody'>

      <h1>
        Find Harmony in Great Lotus Temple
      </h1>
      <p>
        Your Way to Inner Peace
      </p>

      <div className='homeButton'>
        <p>More Info</p>
      </div>

    </motion.div>
  )
}

export default Home;