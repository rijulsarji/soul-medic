import React from 'react'
import "../styles/components/Footer.css"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footerBody">
      <h2>Get Healings Done</h2>
      <p>Created with ❤️ by Dashmeet Kaur</p>
      <div className="footerSocial">
        <a href="https://www.google.com"><FaInstagram id="insta" className="footerIcons" /></a>
        <a href="https://www.google.com"><FaFacebook id="facebook" className="footerIcons" /></a>
        <a href="https://www.google.com"><FaTwitter id="twitter" className="footerIcons" /></a>
      </div>
    </div>
  );
}

export default Footer