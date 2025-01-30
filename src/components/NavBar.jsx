import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import arrowDown from "../assets/arrow-down.svg"
const NavBar = () => {
    return (
      <nav className="flex justify-between items-center containerXPadding py-4 bg-white sticky top-0 z-50">
        <div>
          <img src={logo} alt="Sickle Cell Foundation Logo" />
        </div>
        <ul className="flex items-center gap-7 text-textColor">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "border-b-4 border-b-redCustom pb-1" : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? "border-b-4 border-b-redCustom pb-1" : "";
              }}
            >
              About Us
            </NavLink>
          </li>
          <li className="navIcons">
            <NavLink to="/">Blood Donor Community</NavLink>
            <img src={arrowDown} alt="arrow down icon" />
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive ? "border-b-4 border-b-redCustom pb-1" : "";
              }}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="navButton">
            <NavLink to="/donation">Donate</NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;