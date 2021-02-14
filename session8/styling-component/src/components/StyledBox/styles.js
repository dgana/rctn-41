import styled from 'styled-components'

const Div = styled.div`
  background: ${props => (props.color ? props.color : 'red')};
  width: 200px;
  height: 200px;
`

const Paragraph = styled.p`
  color: white;
  font-size: 16px;
`

export { Div, Paragraph }
