import React from 'react';
import './App.css';
import Rates from './components/Rates';
import Footer from './components/Rates/footer';

function App() {
  return (
    <div className="wrapper">
      <Rates />
      <Footer/>
    </div>
  );
}

export default App;
