import React from "react";
import { Link } from "react-router-dom";

const SearchNav = ({ navItems }) => {
  return (
    <nav className="main-nav">
      <ul>
        { navItems.map(navItem => 
          <li>
            <Link to={`/${navItem}`}>{navItem}</Link>
          </li> 
        )}
      </ul>
    </nav>
  );
}

export default SearchNav;