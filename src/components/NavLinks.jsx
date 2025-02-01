import { NavLink } from "react-router-dom";
import arrowDown from "../assets/arrow-down.svg";

const NavLinks = ({ mobileNavMenu }) => {
  return (
    <ul
      className={`flex items-center text-textColor ${
        mobileNavMenu ? " flex-col gap-10 max-sm:gap-8 font-bold" : "gap-7 max-lg:gap-4"
      }`}
    >
      <li className="navLinks">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "border-b-4 border-b-redCustom pb-1" : "";
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="navLinks">
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? "border-b-4 border-b-redCustom pb-1" : "";
          }}
        >
          About Us
        </NavLink>
      </li>
      <li className="navIcons navLinks ">
        <NavLink
          to="/community"
          className={({ isActive }) => {
            return isActive ? "border-b-4 border-b-redCustom pb-1" : "";
          }}
        >
          Blood Donor Community
        </NavLink>
        <img src={arrowDown} alt="arrow down icon" />
      </li>
      <li className="navLinks">
        <NavLink to="/">Blog</NavLink>
      </li>
      <li className="navLinks">
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            return isActive ? "border-b-4 border-b-redCustom pb-1" : "";
          }}
        >
          Contact Us
        </NavLink>
      </li>
      <li className="navButton navLinks">
        <NavLink to="/donation">Donate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
