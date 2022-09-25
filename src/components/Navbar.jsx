import React from 'react'
import "../styles/components/Navbar.css"
import Logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbarBody">
      <img src={Logo} alt="logo" />

      <div className="navLinks">
        <Link to="/" style={{textDecoration: "none"}}>
          <p>Home</p>
        </Link>
        <Link to="/" style={{textDecoration: "none"}}>
          <p>Shop</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar