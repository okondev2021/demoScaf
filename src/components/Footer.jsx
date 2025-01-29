import { Link } from "react-router-dom";
import logo from "../assets/logo2.svg";
const Footer = () => {
  return (
    <footer className=" bg-textColor text-white containerXPadding py-10">
      <section className="flex justify-start">
        <div className=" flex items-center flex-col gap-2">
          <img src={logo} alt="logo" />
          <p className="text-nowrap">Bridging the knowledge gap with care</p>
        </div>
      </section>
      <section>
        <div></div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/">Events</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">Become a Volunteer</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Get in touch</Link>
            </li>
          </ul>
        </div>
        <div>
            <h4>Conncet with us</h4>
            <p>Follow us on your favourite <br /> social media platform</p>
        </div>
      </section>
      {/* <section>
          <p>Copyright 2020 :: Scahfng :: All rights reserved</p>
        </section> */}
    </footer>
  );
};

export default Footer;
