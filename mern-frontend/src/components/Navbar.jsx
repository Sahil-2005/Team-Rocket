import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>

        {/* Sign-In Button */}
        <Link to="/signin" className="signin-btn">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;