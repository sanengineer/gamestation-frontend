import React from "react";
import LogoRPS from "../../assets/icons/logo-rps@2x.png";

const Footer = () => {
  return (
    <footer
      className="site-footer navbar-light py-5"
      style={{ marginTop: "8rem", backgroundColor: "black" }}
    >
      <div className="container pt-3 pb-3">
        <div className="row justify-content-between">
          <div className="col-lg-2 mr-5">
            <img className="mb-3 col-12" src={LogoRPS} alt="Logo RPS" />
          </div>
          <div className="col-lg-2 col-sm-2 mr-5">
            <ul className="list-unstyled text-dark">
              <h3 className="font-weight-bold f-14 mb-2">Company</h3>
              <li>
                <a href="/about-us" className="text-dark f-12">
                  About Us
                </a>
              </li>
              <li>
                <a href="/requirement" className="text-dark f-12">
                  Requirement
                </a>
              </li>
              <li>
                <a href="/players" className="text-dark f-12">
                  Players
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark f-12">
                  Contact
                </a>
              </li>
              <li>
                <a href="/help" className="text-dark f-12">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-2 mr-5">
            <ul className="list-unstyled text-dark">
              <h3 className="font-weight-bold f-14 mb-2">Media Sosial</h3>
              <li>
                <a href="https://facebook.com" className="text-dark f-12">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-dark f-12">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-dark f-12">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="text-dark f-12">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
