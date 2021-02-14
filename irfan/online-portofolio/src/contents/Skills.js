import React, {Component} from 'react';
import { render } from '@testing-library/react';



class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['HTML','CSS','JS','ReactJS','Java','C++']
        };
    }
    render(){
        return (
            <div className="skills" id="skills">
                <h1>Skills</h1>
                <ul>
                    {this.state.myskills.map((value)=>{
                        return <li><i key={value.id}>{value}</i></li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Skills
