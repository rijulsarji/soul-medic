import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import "../styles/components/Intro.css"
import { useInView } from 'react-intersection-observer';

const imageURL =
  "data:image/jpeg;base64,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";

const Intro = () => {

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
    <motion.div
      animate={animation}
      className="introBody"
      ref={ref}
    >
      <img src={imageURL} alt="Dashmeet Kaur" />
      <p>
        "I am Dashmeet Kaur, a tarot reader who started her journey 3 years
        back. Throughout my journey, I always wish to bring out solutions to the
        problems of one's day to day life. I always believed that if my 1
        percent of effort can bring change to others life, then I would give my
        100 percent of effort for them. I believe in the power of God, and wish
        to bring serenity in surrounding."
      </p>
    </motion.div>
  );
}

export default Intro