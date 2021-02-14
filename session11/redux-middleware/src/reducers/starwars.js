import { PEOPLE_LIST } from '../actions/contants'

const initialState = []

const starwarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_LIST:
      return action.payload
    default:
      return state
  }
}

export default starwarsReducer
