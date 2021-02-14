import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Ini Page Dynamic Path</h1>
      <p>{id}</p>
    </div>
  )
}

export default Detail
