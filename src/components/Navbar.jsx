import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="topmenu">
      <div className="navbar-container">
        <span>Menu</span>
        <div className="right-menu">
          <div className="user-info">
            <div className="user-picture"></div>
            <span>Gabriel Jansen</span>
          </div>
          <span>Sales Report</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
