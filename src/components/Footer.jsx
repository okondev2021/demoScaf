import { Link } from "react-router-dom";
import logo from "../assets/logo2.svg";
// social media icons
// import youtube from "../assets/youtube.svg";
// import twitter from "../assets/twitter.svg";
// import facebook from "../assets/facebook.svg";
// import instagram from "../assets/instagram.svg";
const Footer = () => {
  return (
    <footer className=" bg-textColor text-white containerXPadding py-10 flex flex-col gap-7">
      <section className="flex justify-start">
        <div className=" flex items-center flex-col gap-2">
          <img src={logo} alt="logo" />
          <p className="text-nowrap">Bridging the knowledge gap with care</p>
        </div>
      </section>
      <section className="flex max-md:flex-wrap max-xs:flex-col justify-between max-md:gap-4">
        <div className="flex flex-col gap-4 max-md:gap-4">
          <section>
            <h4>Address:</h4>
            <ul className="footer-list">
              <li>Km 2 eleme akpajo expressway, Port Harcourt, </li>
              <li>Rivers State, Nigeria.</li>
            </ul>
          </section>
          <section>
            <h4>Contact Phone Number:</h4>
            <ul className="footer-list">
              <li>+234 815 472 5680</li>
              <li>+234703 645 9016</li>
            </ul>
          </section>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-list">
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
          <ul className="footer-list">
            <li>Follow us on your favourite</li>
            <li>social media platform</li>
            <li className="flex gap-2">
              {/* <img src={facebook} alt="social media icon" />
              <img src={instagram} alt="social media icon" />
              <img src={twitter} alt="social media icon" />
              <img src={youtube} alt="social media icon" /> */}
            </li>
          </ul>
        </div>
      </section>
      <section>
        <p className=" text-sm text-grayDark max-md:text-center max-md:text-xs">
          Copyright 2020 :: Scahfng :: All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
