import { NavLink } from "react-router-dom";
import arrowDown from "../assets/arrow-down.svg";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-7 max-lg:gap-4 text-textColor max-md:hidden">
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
  );
};

export default NavLinks;
