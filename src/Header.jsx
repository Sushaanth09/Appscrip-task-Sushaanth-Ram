import React from "react";
import { ReactComponent as GreyStrip } from "./images/GreyStrip.svg";
import { ReactComponent as Icons } from "./images/Icons.svg";
import { ReactComponent as LOGO } from "./images/LOGO.svg";
import Logo from "./images/Logo.png";
import "./Header.css";

function Header() {
  return (
    <div>
      <div>
        <GreyStrip className="grey-strip" />
      </div>
      <div className="logo-header">
        <img src={Logo} alt="Logo" />
        <LOGO className="logo-text"/>
        <Icons/>
      </div>
      <nav>
        <div className="nav">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            SHOP
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            SKILLS
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            STORIES
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            ABOUT
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            CONTACT US
          </a>
        </div>
      </nav>
      <div className="text">
        <p>DISCOVER OUR PRODUCTS</p>
      </div>
      <div className="desc">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          eligendi doloribus iste nostrum asperiores alias.
        </p>
      </div>
    </div>
  );
}

export default Header;
