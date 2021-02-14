import React from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import { Topic } from '..'

const About = () => {
  const { path, url } = useRouteMatch()
  return (
    <div>
      <p>About Page</p>
      <ul>
        <li>
          <Link to={`${url}/one-way`}>One way data binding</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/state-management`}>State Management</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topic`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}

export default About
