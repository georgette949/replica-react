import logo from "../images/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavContainer">
      <div className="part1">
        <img className="logo" src={logo} />
        <Link to="/">
          <h1>SoundWave</h1>
        </Link>
      </div>

      <div className="part2">
        <ul className="lista">
          <Link to="discover">
            <li>Discovery</li>
          </Link>
          <Link to="join">
            <li>join</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
