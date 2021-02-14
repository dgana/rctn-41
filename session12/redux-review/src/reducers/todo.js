/**
 * Buatlah reducer untuk todo
 */
import { ADD_TODO, DELETE_TODO } from '../actions/contants'

const initialState = [
  {
    id: 1,
    todo: 'eat'
  },
  {
    id: 2,
    todo: 'sleep'
  },
  {
    id: 3,
    todo: 'code'
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case DELETE_TODO:
      return state.filter(x => x.id !== action.payload)
    default:
      return state
  }
}
