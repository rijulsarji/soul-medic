import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import "../styles/components/Dashmeet.css"

const Dashmeet = () => {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  });

  return (
    <motion.div className="dashmeetBody" ref={ref} animate={animation}>
      <div></div>

      <p>
        "I am Dashmeet Kaur, a tarot reader who started her journey 3 years back.
        Throughout my journey, I always wish to bring out solutions to the
        problems of one's day to day life. I always believed that if my 1
        percent of effort can bring change to others life, then I would give my
        100 percent of effort for them. I believe in the power of God, and wish
        to bring serenity in surrounding."
      </p>
    </motion.div>
  );
}

export default Dashmeet