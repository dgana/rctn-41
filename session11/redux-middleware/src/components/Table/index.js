import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPeopleList } from '../../actions'

class Table extends Component {
  componentDidMount() {
    this.props.getPeopleList()
  }
  
  render() {
    return (
      <div className="container">
        <h1>Star Wars API</h1>
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
            {this.props.starwars.map((x, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{x.name}</td>
                <td>{x.height}</td>
                <td>{x.mass}</td>
                <td>{x.gender}</td>
                <td>{x.skin_color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    starwars: state.starwars
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPeopleList: () => dispatch(getPeopleList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
