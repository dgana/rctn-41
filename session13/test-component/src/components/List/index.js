import React from 'react'

const List = ({ items }) => {
  return items.length ? (
    <ul>
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  ) : (
    'no itemss'
  )
}

export default List
