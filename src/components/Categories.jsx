import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/components/Categories.css"
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Categories = () => {

  const navigate=useNavigate();

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
    <motion.div className="categoryBody" ref={ref} animate={animation}>
      <h1>Our Categories of shopping...</h1>

      <div className="categoryFlexbox">
        <div className="categoryButton" onClick={() => navigate("/crystals")}>
          <p>Crystals</p>
        </div>
        <div className="categoryButton" onClick={() => navigate("/e-books")}>
          <p>E-Books</p>
        </div>
        <div className="categoryButton" onClick={() => navigate("/bracelets")}>
          <p>Bracelets</p>
        </div>
      </div>

      <div className="bannerMid"></div>

    </motion.div>
  );
}

export default Categories