import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation, Body } from './components';
import { Home, Tabel, Informasi, Rujukan } from './pages';
import GejalaCard1 from './pages/GejalaCard1';
import GejalaCard2 from './pages/GejalaCard2';
import GejalaCard3 from './pages/GejalaCard3';
import GejalaCard4 from './pages/GejalaCard4';
import GejalaCard5 from './pages/GejalaCard5';


function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Body>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/Tabel" exact>
              <Tabel/>
            </Route>
            <Route path="/informasi" exact>
              <h1>Gejala Covid-19</h1>
              <GejalaCard1/>
              <GejalaCard2/>
              <GejalaCard3/>
              <GejalaCard4/>
              <GejalaCard5/>
              <Informasi/>
            </Route>
            <Route path="/rujukan" exact>
              <Rujukan/>
            </Route>
          </Switch>
      </Body>
    </Router>
    </div>
  )
}

export default App;
