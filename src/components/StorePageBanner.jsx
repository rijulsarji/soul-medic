import React from 'react'
import "../styles/components/StorePageBanner.css"
import { motion } from "framer-motion"

function StorePageBanner (props) {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.15, duration: 1}} className='SPBBody' style={{backgroundImage: `url(${props.bgImage})`}}></motion.div>
  )
}

export default StorePageBanner