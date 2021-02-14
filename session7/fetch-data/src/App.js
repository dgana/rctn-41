import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      people: [],
      next: '',
      page: 1
    }
  }

  getData = (url, page) => {
    this.setState({ isLoading: true })
    const site = page ? `${url}?page=${page}` : url

    axios.get(site).then(response =>
      this.setState(state => ({
        people: [...state.people, ...response.data.results],
        isLoading: false,
        next: response.data.next
      }))
    )
  }

  componentDidMount() {
    this.getData('https://swapi.dev/api/people/', this.state.page)
  }

  onClickPrev = () => {
    // Proses on click previous
  }

  onClickNext = () => {
    this.setState(state => ({ page: state.page + 1 }))
    this.getData(this.state.next)
  }

  render() {
    const { people, isLoading, page } = this.state

    if (isLoading) {
      return <h1>Fetching Data ...</h1>
    }

    return (
      <>
        <ol>
          {people.map((x, i) => (
            <li key={i}>
              {x.name} - {x.gender}
            </li>
          ))}
        </ol>
        <p>current page: {page}</p>
        <button disabled={page === 1} onClick={this.onClickPrev}>
          Prev
        </button>
        <button onClick={this.onClickNext}>Next</button>
      </>
    )
  }
}

export default App
