import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navbar">
            <NavLink to="/" activeClassName="navbar__link--active" className="navbar_link">Home</NavLink>
            <NavLink to="/Tabel" activeClassName="navbar__link--active" className="navbar_link">Data Per Provinsi</NavLink>
            <NavLink to="/Informasi" activeClassName="navbar__link--active" className="navbar_link">Informasi Covid-19</NavLink>
            <NavLink to="/Rujukan" activeClassName="navbar__link--active" className="navbar_link">Rujukan Covid</NavLink>
        </div>
    )
}
export default Navigation