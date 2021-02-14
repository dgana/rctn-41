import React from 'react'
import PropTypes from 'prop-types'

/**
 * Function Based
 */
const PeopleList = props => {
  return (
    <ol>
      {props.people.map(item => (
        <li key={item.id}>
          {item.name} - {item.gender}
        </li>
      ))}
    </ol>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array
  // username: PropTypes.string
}

/**
 * Class Based
 */
// class PeopleList extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(this.props)
//   }

//   render() {
//     return this.props.people.map(item => <li>{item.name}</li>)
//   }
// }

export default PeopleList
