import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import "../styles/components/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbarBody">
      <img src={Logo} alt="Logo" />

      <div className="navbarLinks">
        <Link to="/" style={{textDecoration: "none"}}>
          <p>Home</p>
        </Link>
        <Link to="/" style={{textDecoration: "none"}}>
          <p>About Us</p>
        </Link>
        <Link to="/" style={{textDecoration: "none"}}>
          <p>Store</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar