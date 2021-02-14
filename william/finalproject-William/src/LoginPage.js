import React from 'react'
import './LoginPage.css'
import { Button } from "@material-ui/core";

class LoginPage extends React.Component {

    constructor() {
        super();
        this.state = {
            err: ''
        };
    }

    login(e) {
        e.preventDefault();
        var username = e.target.elements.username.value;
        var password = e.target.elements.password.value;
        if(username == 'william' && password == '12345') {
            this.setState({
                err: 'Database tidak ditemukan'
            });
        }
        else {
            this.setState({
                err: 'Username dan Password salah!'
            });
        }
    }

    render() {
        return (
            <div className='Login'>
                <div className='user'>
                {this.state.err != '' ? this.state.err : ''}
                    <form method="post" onSubmit={this.login.bind(this)}>
                        <input type="text" name="username" placeholder="username"/><br/>
                        <input type="password" name="password" placeholder="password"/><br/>
                        <Button variant='outlined' input type="submit">Login</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage
