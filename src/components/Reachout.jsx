import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/components/Reachout.css"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Popup from 'reactjs-popup';

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
      <h1>Reach out to us!</h1>

      <div className="reachoutFlexbox">
        <div className="reachoutButton" onClick={() => navigate("/about-us")}>
          <p>About Soul Medic</p>
        </div>

        <Popup
          trigger={
            <div
              className="reachoutButton"
              onClick={() => window.open("mailto:sarjirijul@gmail.com")}
            >
              <p>Contact Us</p>
            </div>
          }
          modal
        >
          <div className="reachoutModal">
            <h1>Phone Number</h1>
            <p>+91 99998 98562</p>
            <br />
            <h1>Email ID</h1>
            <a href='mailto:'>abcd@gmail.com</a>
          </div>
        </Popup>
      </div>
    </motion.div>
  );
}

export default Reachout