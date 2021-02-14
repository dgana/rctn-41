import React from "react";
import "./styles.css";
import tokopediaLogo from "../../assets/img/tokopedia.png";

const Navigation = () => {
  return (
    <header>
      <a
        href="https://www.tokopedia.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={tokopediaLogo} alt="logo" className="logo" />
      </a>
      <nav className="nav">
        <ul>
          <li>
            <a href="./services.html">Services</a>
          </li>
          <li>
            <a href="./projects.html">Projects</a>
          </li>
          <li>
            <a href="./about.html">About</a>
          </li>
        </ul>
        <button className="button">Contact Us</button>
      </nav>
    </header>
  );
};

export default Navigation;
