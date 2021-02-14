import React from 'react'
import './App.css'
import avatar from './assets/images/avatar.png'

function Sidebar({ menus, onClick }) {
  return (
    <div className="sidebar">
      <img className="avatar" src={avatar} alt="avatar" />
      <ul className="menu">
        {menus.map(x => (
          <li onClick={() => onClick(x.name)} key={x.name}>
            <a style={{ fontWeight: x.isActive ? 900 : 400 }} href="#about">
              {x.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  const defaultMenus = [
    {
      name: 'about',
      isActive: true
    },
    {
      name: 'experience',
      isActive: false
    },
    {
      name: 'education',
      isActive: false
    },
    {
      name: 'skills',
      isActive: false
    },
    {
      name: 'interests',
      isActive: false
    },
    {
      name: 'awards',
      isActive: false
    }
  ]
  const [menus, setMenus] = React.useState(defaultMenus)

  const onClick = name => {
    const newMenus = menus.map(x => {
      if (x.name === name) {
        return {
          ...x,
          isActive: true
        }
      } else {
        return {
          ...x,
          isActive: false
        }
      }
    })
    setMenus(newMenus)
  }

  return (
    <>
      <Sidebar menus={menus} onClick={onClick} />
      <div className="main">
        <div className="section">
          <h1 id="about">about</h1>
          <p>lorem ipsum dollor</p>
        </div>
        <div className="section">
          <h1 id="experience">experience</h1>
          <p>lorem ipsum dollor</p>
        </div>
        <div className="section">
          <h1 id="education">education</h1>
          <p>lorem ipsum dollor</p>
        </div>
        <div className="section">
          <h1 id="skills">skills</h1>
          <p>lorem ipsum dollor</p>
        </div>
        <div className="section">
          <h1 id="interests">interests</h1>
          <p>lorem ipsum dollor</p>
        </div>
        <div className="section">
          <h1 id="awards">awards</h1>
          <p>lorem ipsum dollor</p>
        </div>
      </div>
    </>
  )
}

export default App
