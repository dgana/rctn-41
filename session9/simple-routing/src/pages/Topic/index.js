import React from 'react'
import { useParams } from 'react-router-dom'

const Topic = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <p>{params.topic}</p>
    </div>
  )
}

export default Topic
