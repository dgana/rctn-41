import React, { Component } from 'react';

class Aboutpage extends Component {
    render(){
        return(
            <div>
                <div className="banner-text">
                    <h1>ABOUT</h1>
                    <h6>+62 8112234567865 | emailku@gmail.com</h6>
                    <p>halohalo bandungifhiushgliueabrgiuaelwrgiue</p>
                </div>
                <div className="social-links">
                    <a href="https://linked.com" target="_blank">
                        <i className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true" />
                    </a>
                    <a href="https://github.com" target="_blank">
                        <i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Aboutpage;