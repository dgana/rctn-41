import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { value } = this.state
    return (
      <div className="container">
        <h1>Todo App</h1>
        <input
          type="text"
          name="value"
          value={value}
          onChange={this.onChange}
        />
        <div className="counter">
          <ul>
            <li>Eat</li>
            <li>Sleep</li>
            <li>Code</li>
          </ul>
        </div>
      </div>
    )
  }
}

/**
 * Buat mapStateToProps dan mapDispatchToProps kemudian connect dengan react-redux
 */

export default Todo
