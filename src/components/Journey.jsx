import React, { useEffect } from 'react'
import "../styles/components/Journey.css"
import Logo from "../assets/Logo.png"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Journey = () => {

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
    <motion.div className="journeyBody" ref={ref} animate={animation}>
      <h2>Our Journey</h2>
      <img
        src={Logo}
        alt="Dashmeet Kaur"
      />
      <p>
        "I always had faith in my intuitions and a promising spiritual soul.
        That's where my journey began— now being my business which initially
        started with shuffling tarot cards and looking up for different
        crystals aligning with my zodiac. "It is never too late to be what you
        might have been." I began my journey with a stumbling foot with no
        opportunity un turn. Bring things that add meaning to it, and my
        business did it! Not a day goes away where I don't thank God for
        blessing me with such kind customers and for the industry to do well.
        However, the journey hasn't always been easy, as "People will always
        have their opinion on you despite who you are and what you're capable
        of." As rightly said, people who didn't appreciate my work and hard
        work existed, but I never gave them the upper hand. Belive yourself is
        always a good mantra for me; I believe myself, and so should you too."
      </p>
    </motion.div>
  );
}

export default Journey