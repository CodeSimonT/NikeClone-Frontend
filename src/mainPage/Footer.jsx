import React from "react";
import { styling } from "../../style/style";
import { FooterLinks, FooterSubLinks } from "../constants/index";
import { facebook, instagram, twitter } from "../assets/icons/icons.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footerStyle text-white">
        <div className="container-fluid">
          <div className="row">
            {/* col 1 */}
            <div className="col">
              <ul>
                {FooterLinks.map((item) => (
                  <li key={item.id} className="bold">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            {/* col 2 */}
            <div className="col"></div>
            {/* col 3 */}
            <div className="col"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
