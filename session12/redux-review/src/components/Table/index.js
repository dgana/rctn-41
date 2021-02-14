import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPeopleList } from '../../actions'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1
    }
  }

  componentDidMount() {
    this.props.getPeopleList(this.state.currentPage)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.props.getPeopleList(this.state.currentPage)
    }
  }

  onClickPrev = () => {
    this.setState(state => ({ currentPage: state.currentPage - 1 }))
  }

  onClickNext = () => {
    this.setState(state => ({ currentPage: state.currentPage + 1 }))
  }

  render() {
    const { currentPage } = this.state
    const { starwars } = this.props

    const maxPage = Math.ceil(starwars.count / 10)

    return (
      <div className="container">
        <h1>Star Wars API</h1>
        <p>People Count: {starwars.count}</p>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Gender</th>
              <th>Skin Color</th>
            </tr>
          </thead>
          <tbody>
            {starwars.results.map((x, i) => (
              <tr key={i}>
                <td>{i + 1 * (currentPage * 10 - 9)}</td>
                <td>{x.name}</td>
                <td>{x.height}</td>
                <td>{x.mass}</td>
                <td>{x.gender}</td>
                <td>{x.skin_color}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          {currentPage} of {maxPage}
        </p>
        <div className="button-container">
          <button disabled={currentPage === 1} onClick={this.onClickPrev}>
            Prev
          </button>
          <button disabled={currentPage === maxPage} onClick={this.onClickNext}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    starwars: state.starwars // { count, results }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPeopleList: page => dispatch(getPeopleList(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
