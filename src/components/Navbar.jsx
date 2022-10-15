import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import "../styles/components/Navbar.css"

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbarBody">
      <img src={Logo} alt="Logo" onClick={() => navigate("/")} />

      <div className="navbarLinks">
        <Link to="/" style={{textDecoration: "none"}}>
          <p>Home</p>
        </Link>
        <Link to="/about-us" style={{textDecoration: "none"}}>
          <p>About Us</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar