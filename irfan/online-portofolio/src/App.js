import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './contents/About';
import Experience from './contents/Experience';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Interests from './contents/Interests';
import Awards from './contents/Awards';



function App() {
  return (
    <div className="App">
      <div className="navbar">
      <Navbar></Navbar>
      </div>
      <div className="maincontent">
        <About></About>
        <Experience></Experience>
        <Education></Education>
        <Skills></Skills>
        <Interests></Interests>
        <Awards></Awards>
      </div>
    </div>
    )
  
}

export default App;
