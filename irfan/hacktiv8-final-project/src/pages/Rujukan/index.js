import React, {Component} from 'react'
import rujukan from './img/rujukan.jpg'

class Rujukan extends Component {
    

    render() {
        return (
            <div>
                <h1>Rumah Sakit Rujukan Covid-19 di Indonesia</h1>
                <img src={rujukan} alt="rujukan" width="1300" height="600"/>
            </div>
        )
    }
}

export default Rujukan