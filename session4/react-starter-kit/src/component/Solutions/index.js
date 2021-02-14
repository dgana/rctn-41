import React from "react";
// import "./styles.css";
import mobileLogo from "../../assets/img/mobile.jpg";
import webLogo from "../../assets/img/web.png";
import desktopLogo from "../../assets/img/desktop.png";

const Solutions = () => {
  return (
    <section>
      <div className="m-auto h5 flex-container">
        <img alt="mobile" src={mobileLogo} />
        <h1>Mobile App</h1>
        <ul>
          <li>lorem ipsum</li>
          <li>dollor sit amet</li>
        </ul>
        <button className="mt3">Get Started</button>
      </div>
      <div className="m-auto h5 flex-container">
        <img alt="web" src={webLogo} />
        <h1>Web App</h1>
        <ul>
          <li>lorem ipsum</li>
          <li>dollor sit amet</li>
        </ul>
        <button className="mt3">Get Started</button>
      </div>
      <div className="m-auto h5 flex-container">
        <img alt="desktop" src={desktopLogo} />
        <h1>Desktop App</h1>
        <ul>
          <li>lorem ipsum</li>
          <li>dollor sit amet</li>
        </ul>
        <button className="mt3">Get Started</button>
      </div>
    </section>
  );
};

export default Solutions;
