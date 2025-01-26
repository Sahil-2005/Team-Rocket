import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { googleLogout } from '@react-oauth/google'; // Add logout functionality

const Navbar = () => {
  const [user, setUser] = useState(null);

  // On component mount, check if user data is available in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set the user data if available
    }
  }, []);

  const logOut = () => {
    googleLogout(); // Call Google logout function
    setUser(null); // Clear user state
    localStorage.removeItem("user"); // Remove user data from localStorage
  };

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

        {/* Conditional rendering for signed-in users */}
        {user ? (
          <div className="user-info">
            <img src={user.picture} alt="User" className="user-image" />
            <p>{user.name}</p>
            <button className="logout-btn" onClick={logOut}>
              Log out
            </button>
          </div>
        ) : (
          <Link to="/signup" className="signin-btn">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
