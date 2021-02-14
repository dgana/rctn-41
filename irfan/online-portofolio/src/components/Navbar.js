import React, {Component} from 'react';
import accountimg from '../img/account.jpg';
import { NavLink } from 'react-router-dom';



class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                <img src={accountimg}alt="account" width="200" height="200"></img>
                <ul>
                    <div className="btnClass">
                        <li><a href="#about" className="btn active">About</a></li>
                        <li><a href="#experience" className="btn">Experience</a></li>
                        <li><a href="#education" className="btn">Education</a></li>
                        <li><a href="#skills" className="btn">Skills</a></li>
                        <li><a href="#interests" className="btn">Interests</a></li>
                        <li><a href="#awards" className="btn">Awards</a></li>
                    </div>
                </ul>
                </nav>
            </div>
            
        )
        
    }
}
export default Navbar