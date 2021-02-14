import React from 'react'

import { connect } from 'react-redux'
import { addCounter, subtractCounter } from '../../actions'

function Counter(props) {
  const { add, subtract, counter } = props
  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <p>{counter}</p>
        <button onClick={add}>+</button>
      </div>
    </div>
  )
}

/**
 * Get state from store
 */
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

/**
 * Dispatch action to change store via reducer
 */
const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(addCounter()),
    subtract: () => dispatch(subtractCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
