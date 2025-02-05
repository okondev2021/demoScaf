import { useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import arrowDown from "../assets/arrow-down.svg";
import NavDropDown from "./NavDropDown";

const NavLinks = ({ mobileNavMenu }) => {
  const [showNavDropdown, setShowNavDropDown] = useState(false);

  const displayNavDropDown = () => {
    setShowNavDropDown(true);
  };

  const navDropDownRef = useRef(null);
  const navDropDownTimeOutRef = useRef(null);

  const handleMouseLeave = (setDropdownState, timeoutRef, dropdownRef) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      // Check if the mouse is still within the dropdown
      if (dropdownRef.current) {
        const isMouseInDropdown = dropdownRef.current.matches(":hover");
        if (!isMouseInDropdown) {
          setDropdownState(false);
        }
      } else {
        setDropdownState(false);
      }
    }, 500);
  };

  const location = useLocation();

  return (
    <ul
      className={`flex items-center text-textColor ${
        mobileNavMenu
          ? " flex-col gap-10 max-sm:gap-8 font-bold"
          : "gap-7 max-lg:gap-4"
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
      <li
        onMouseEnter={displayNavDropDown}
        onMouseLeave={() =>
          handleMouseLeave(
            setShowNavDropDown,
            navDropDownTimeOutRef,
            navDropDownRef
          )
        }
        className="navIcons navLinks relative"
      >
        <div className={`cursor-pointer ${location.pathname === "/community" || location.pathname === "/volunteer" ? "border-b-4 border-b-redCustom pb-1" : ""}`}
        >
          Blood Donor Community
        </div>
        <img src={arrowDown} alt="arrow down icon" />
        {showNavDropdown && (
          <div ref={navDropDownRef}>
            <NavDropDown />
          </div>
        )}
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
