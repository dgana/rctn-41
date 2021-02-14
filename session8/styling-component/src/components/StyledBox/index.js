import React from 'react'
import { Div, Paragraph } from './styles.js'

const StyledBox = ({ color }) => {
  return (
    <Div color={color}>
      <Paragraph>{color}</Paragraph>
    </Div>
  )
}

export default StyledBox
