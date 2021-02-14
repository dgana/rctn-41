import React, {Component}  from 'react'

class Footer extends Component {
    render() {
        return (
            <ul className = "footer">
                <li>Base currency is IDR.</li>
                <li>As for the API <a href="https://exchangeratesapi.io/">https://exchangeratesapi.io/</a> is used.</li>
            </ul>
        )
    }
}
export default Footer