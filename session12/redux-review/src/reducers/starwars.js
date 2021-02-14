import { PEOPLE_LIST } from '../actions/contants'

const initialState = {
  results: [],
  count: 0
}

const starwarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_LIST:
      return action.payload
    default:
      return state
  }
}

export default starwarsReducer
