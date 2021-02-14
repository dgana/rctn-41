import React from 'react'

const Button = ({ addPeople }) => {
  return <button onClick={addPeople}>Add People</button>
}

/**
 * Implicit Return
 */
// const Button = () => <button>Add People</button>

export default Button
