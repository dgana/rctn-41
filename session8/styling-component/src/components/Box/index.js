import React from 'react'
import styles from './Box.module.css'

const getColor = {
  red: 'red_box',
  blue: 'blue_box',
  black: 'black_box'
}

/**
 * Literal String with CSS modules
 */

// var firstName = 'alex'
// var lastName = 'russel'
// var fullName = `${firstName} ${lastName}`

const Box = ({ color }) => {
  const warna = getColor[color]
  return (
    <div className={`${styles.box} ${styles[warna]}`}>
      <p style={{ color: 'white' }}>Box {color}</p>
    </div>
  )
}

/**
 * Without CSS modules and using inline style
 */

// const Box = ({ color }) => {
//   const boxStyle = {
//     width: 200,
//     height: 200,
//     background: color
//   }

//   const paragraphStyle = {
//     color: 'white',
//     fontSize: 16
//   }

//   return (
//     <div style={boxStyle}>
//       <p style={paragraphStyle}>Box {color}</p>
//     </div>
//   )
// }

export default Box
