import React from "react";
import {
  FaUserCircle,
  FaPlane,
  FaHotel,
  FaSuitcase
} from "react-icons/fa";
import "./Navbar.css";

import { NavLink, useNavigate } from "react-router-dom";




const Navbar = () => {
  const navigate =useNavigate()
  return (
    <div>
    <header className="navbar-container">

      {/* TOP NAVBAR */}
      <div className="navbar-top">

        {/* LEFT – LOGO */}
        <div className="navbar-logo">
         <h2>Primoris</h2>
        </div>

       

        {/* RIGHT – PROFILE */}
        <div onClick={()=>{navigate("/profile")}} className="navbar-profile">
          <FaUserCircle />
        </div>

      </div>

      {/* BOTTOM NAVBAR */}
     <nav className="navbar-bottom">
  <NavLink
    to="/travels"
    className="nav-link"
  >
    <FaHotel /> Travels
  </NavLink>

  <NavLink
    to="/tours"
    className="nav-link"
  >
    <FaPlane /> Destinations 
  </NavLink>

  <NavLink
    to="/bookings"
    className="nav-link"
  >
    <FaSuitcase /> Bookings
  </NavLink>
</nav>

    </header>
    </div>
  );
};

export default Navbar;
