import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/components/Reachout.css"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reachout = () => {

  const navigate = useNavigate();

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
    <motion.div className="reachoutBody" ref={ref} animate={animation}>

      <h1>
        Reach out to us!
      </h1>

      <div className='reachoutFlexbox'>
        <div className="reachoutButton" onClick={() => navigate("/about-us")}>
          <p>About Soul Medic</p>
        </div>

        <div className="reachoutButton" onClick={() => window.open("mailto:sarjirijul@gmail.com")}>
          <p>Contact Us</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Reachout