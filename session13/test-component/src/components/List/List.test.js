import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import List from './'

// test('renders "no items" when list is empty', () => {
//   const container = document.createElement('div')
//   ReactDOM.render(<List items={[]} />, container)
//   expect(container).toBeDefined()
// })

test('renders "no items" when list is empty', () => {
  const linkElement = render(<List items={['apple']} />).getByText(/apple/)
  expect(linkElement).toBeInTheDocument()
})

// test('renders "no items" when list is empty', () => {
//   const { getByText } = render(<List items={[]} />)
//   const linkElement = getByText(/no items/i)
//   expect(linkElement).toBeInTheDocument()
// })
