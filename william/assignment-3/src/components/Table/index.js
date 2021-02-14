import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { connect } from './node_modules/react-redux'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currency: []
  }
}

componentDidMount() {
  this.props.getPeopleList(this.state.currency)
}

    render() {
    const { currency } = this.props
    return (
      <div className="counter">
        <table className="tabel">
              <td></td>
              <td>WE BUY</td>
              <td>EXCHANGE RATE</td>
              <td>WE SELL</td>
              <tr>CAD</tr>
              <tr>IDR</tr>
              <tr>JPY</tr>
              <tr>CHF</tr>
              <tr>EUR</tr>
              <tr>USD</tr>
        </table>
      </div>
    );
  }
}

export default Table