import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, About, Detail, Dashboard } from './pages'
import { Navigation, Body } from './component'

function App() {
  return (
    <Router>
      <Navigation />
      <Body>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/:id" exact>
            <Detail />
          </Route>
        </Switch>
      </Body>
    </Router>
  )
}

export default App
