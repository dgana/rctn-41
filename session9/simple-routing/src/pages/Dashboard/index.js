import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Dashboard = () => {
  const [isLogin] = useState(false)
  return isLogin ? <p>Dashboard</p> : <Redirect to={{ pathname: '/' }} />
}

export default Dashboard
