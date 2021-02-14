import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>Home Page</p>
      <ul>
        <li>
          <Link to="/dynamic-path-a">Dynamic Path A</Link>
        </li>
        <li>
          <Link to="/dynamic-path-b">Dynamic Path B</Link>
        </li>
        <li>
          <Link to="/dynamic-path-c">Dynamic Path C</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
