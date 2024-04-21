import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
   
      <nav className="navmain">
        <ul className="navlist">
          <li>
            <Link to="/component1" className="link">
              First Component
            </Link>
          </li>
          <li>
            <Link to="/component2" className="link">
              Second Component
            </Link>
          </li>
          <li>
            <Link to="/component3" className="link">
              Third Component
            </Link>
          </li>
        </ul>
      </nav>
  
  );
};

export default Navbar;
