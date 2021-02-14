import React, {Component} from 'react';

class Experience extends Component {
    render() {
        return (
            <div className="experience" id="experience">
                <h1>Experience</h1>
                <div className="experience1">
                    <h2 className="name">IT Developer at Relational Marketing Division</h2>
                    <h3 className="date">July 20th - August 30th 2018</h3>
                    <h3 className="company>">IRIS</h3>
                    <p>Manage sponsors data for the 2018 Asian Games with Excel, Learned about software functional documentation</p>
                </div>
                <div className="experience2">
                    <h2 className="name">React & React Native Online Course</h2>
                    <h3 className="date">July - September 2020</h3>
                    <h3 className="company>">HACKTIV8</h3>
                    <p>Online courses on Modern Javascript, React & React Native</p>
                </div>
            </div>
        )
    }
}
export default Experience