import React from 'react'
import './Header.css';
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
    const history = useHistory();
    return (
        <div className='header'>
            <Link to='/'>
                <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
            </Link>

            <div className='header__right'>
                <Button onClick={() => history.push('/login')}><Avatar /></Button>
            </div>

        </div>
    )
}

export default Header
