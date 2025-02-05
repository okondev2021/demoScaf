import { NavLink } from "react-router-dom";
const NavDropDown = ({ displayNavDropDown, hideNavDropDown }) => {
  return (
    <article className="absolute top-full w-full right-0 text-nowrap mt-2 shadow-2xl bg-grayLight rounded-md z-50 p-4 ">
      <ul className="flex flex-col gap-5">
        <li className="navLinks">
          <NavLink
            to="/volunteer"
            className={({ isActive }) => {
              return isActive ? "border-b-4 border-b-redCustom pb-1" : "";
            }}
          >
            Volunteer
          </NavLink>
        </li>
        <li className="navLinks">
          <NavLink
            to="/community"
            className={({ isActive }) => {
              return isActive ? "border-b-4 border-b-redCustom pb-1" : "";
            }}
          >
            Join Our Community
          </NavLink>
        </li>
      </ul>
    </article>
  );
};

export default NavDropDown