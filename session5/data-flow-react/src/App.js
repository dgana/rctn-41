import React, { Component } from 'react'
import PeopleList from './component/PeopleList'
import Button from './component/Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {
          id: '1',
          name: 'Riza',
          gender: 'male'
        },
        {
          id: '2',
          name: 'Dono',
          gender: 'male'
        },
        {
          id: '3',
          name: 'Resa',
          gender: 'female'
        },
        {
          id: '4',
          name: 'Arnold',
          gender: 'male'
        }
      ],
      username: '',
      errors: {
        username: false
      }
    }
  }

  addPeople = () => {
    const { username } = this.state

    if (username === '') {
      this.setState({ errors: { username: true } })
    } else {
      this.setState({ errors: { username: false } })
    }
  }

  onChange = e => {
    this.setState({ username: e.target.value })
  }

  render() {
    // destructure object
    const { people, username, errors } = this.state
    // this.state.people

    return (
      <>
        <a href="#tes">go to tes</a>
        <div style={{ marginBottom: 1000 }}>
          <PeopleList people={people} />
          <input
            placeholder="input name"
            value={username}
            onChange={this.onChange}
          />
          {errors.username && (
            <p style={{ color: 'salmon', fontSize: 10 }}>
              Nama tidak boleh kosong
            </p>
          )}
          <div>
            <Button addPeople={this.addPeople} />
          </div>
        </div>
        <div id="tes">
          <p>tes</p>
        </div>
      </>
    )
  }
}

export default App
