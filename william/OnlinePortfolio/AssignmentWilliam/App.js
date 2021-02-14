import React, { Component } from "react";
import logo from './fotoprofil.png';
import './App.css';


class Main extends Component {
  render() {
  return (
    <div className="Menu">
      <div className="Image"><img src={logo} alt="fotoprofil" width='200px' height='200px' /></div>
        <ul>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">EXPERIENCE</a></li>
          <li><a href="#">EDUCATION</a></li>
          <li><a href="#">SKILL</a></li>
          <li><a href="#">INTERESTS</a></li>
          <li><a href="#">AWARDS</a></li>
        </ul>
    </div>
  );
}
}


export default Main
