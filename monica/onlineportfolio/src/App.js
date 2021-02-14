import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Homepage from './components/homepage';
import Aboutpage from './components/aboutpage';
import Experiencepage from './components/experiencepage';
import Skillspage from './components/skillspage';
import { Link } from 'react-router-dom';
import Interestpage from './components/interestpage';
import Awardspage from './components/awardspage';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="sidenav" >
          <ul>
            <li><img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png"></img></li>
            <li><a href="#homesite">HOME</a></li>
            <li><a href="#aboutsite">ABOUT</a></li>
            <li><a href="#experiencesite">EXPERIENCE</a></li>
            <li><a href="#skillssite">SKILLS</a></li>
            <li><a href="#interestsite">INTERESTS</a></li>
            <li><a href="#awardssite">AWARDS</a></li>
          </ul>
        </div>
        <div className="main">
          <div id="homesite">
            <Homepage />
          </div>
          <div ID="aboutsite">
            <Aboutpage />
          </div>
          <div ID="experiencesite">
            <Experiencepage />
          </div>
          <div ID="skillssite">
            <Skillspage />
          </div>
          <div ID="interestsite">
            <Interestpage />
          </div>
          <div ID="awardssite">
            <Awardspage />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
