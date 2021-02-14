import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from '../../actions'

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

  addTodo = () => {
    const payload = {
      id: Math.floor(Math.random() * 1000000) + 1,
      todo: this.state.value
    }
    this.props.addTodo(payload)
    this.setState({ value: '' })
  }

  deleteTodo = id => {
    this.props.deleteTodo(id)
  }

  render() {
    const { value } = this.state
    const { todos } = this.props
    return (
      <div className="container">
        <h1>Todo App</h1>
        <input
          type="text"
          name="value"
          value={value}
          onChange={this.onChange}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <div className="counter">
          <ul>
            {todos.map(x => (
              <li key={x.id}>
                {x.todo}
                <img
                  width={20}
                  src="https://p1.hiclipart.com/preview/556/646/350/devine-icons-black-trash-can-illustration.jpg"
                  onClick={() => this.deleteTodo(x.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

/**
 * Buat mapStateToProps dan mapDispatchToProps kemudian connect dengan react-redux
 */
const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
