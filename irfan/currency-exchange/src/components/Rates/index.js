import React, {Component}  from 'react'
import { connect } from 'react-redux'
import {getCurrencyRate} from '../../actions'

class Rates extends Component {
    componentDidMount() {
        this.props.getCurrencyRate()
    }

    roundNum = (value, decimals) => {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
    }

    render(){
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>WE BUY</th>
                            <th>EXCHANGE RATE</th>
                            <th>WE SELL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CAD</td>
                            <td>{this.roundNum(this.props.rates.CAD * 10000 * 0.10 + this.props.rates.CAD * 10000,4)}</td>
                            <td>{this.roundNum(this.props.rates.CAD * 10000, 3)}</td>
                            <td>{this.roundNum(this.props.rates.CAD * 10000 - this.props.rates.CAD * 10000 * 0.10,4)}</td>
                        </tr>
                        <tr>
                            <td>IDR</td>
                            <td>{this.props.rates.IDR * 10000 * 0.10 + this.props.rates.IDR * 10000}</td>
                            <td>{this.props.rates.IDR * 10000}</td>
                            <td>{this.props.rates.IDR * 10000 - this.props.rates.IDR * 10000 * 0.10}</td>
                        </tr>
                        <tr>
                            <td>JPY</td>
                            <td>{this.roundNum(this.props.rates.JPY * 10000 * 0.10 + this.props.rates.JPY * 10000,4)}</td>
                            <td>{this.props.rates.JPY * 10000}</td>
                            <td>{this.roundNum(this.props.rates.JPY * 10000 - this.props.rates.JPY * 10000 * 0.10,4)}</td>
                        </tr>
                        <tr>
                            <td>CHF</td>
                            <td>{this.roundNum(this.props.rates.CHF * 10000 * 0.10 + this.props.rates.CHF * 10000,4)}</td>
                            <td>{this.roundNum(this.props.rates.CHF * 10000,5)}</td>
                            <td>{this.roundNum(this.props.rates.CHF * 10000 - this.props.rates.CHF * 10000 * 0.10,4)}</td>
                        </tr>
                        <tr>
                            <td>EUR</td>
                            <td>{this.props.rates.EUR * 10000 * 0.10 + this.props.rates.EUR * 10000}</td>
                            <td>{this.props.rates.EUR * 10000}</td>
                            <td>{this.props.rates.EUR * 10000 - this.props.rates.EUR * 10000 * 0.10}</td>
                        </tr>
                        <tr>
                            <td>USD</td>
                            <td>{this.props.rates.USD * 10000 * 0.10 + this.props.rates.USD * 10000}</td>
                            <td>{this.props.rates.USD * 10000}</td>
                            <td>{this.roundNum(this.props.rates.USD * 10000 - this.props.rates.USD * 10000 * 0.10,5)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rates: state.rates
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrencyRate: () => dispatch(getCurrencyRate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rates)