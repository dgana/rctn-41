import React from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className={styles.container}>
      <h1>Website Logo</h1>
      <ul className={styles.menus}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
