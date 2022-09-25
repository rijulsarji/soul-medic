import React from 'react'
import Logo from "../assets/Logo.png";
import "../styles/components/Footer.css"

const Footer = () => {
  return (
    <div className='footerBody'>
      <img src={Logo} alt="Logo" />
    </div>
  )
}

export default Footer