import { combineReducers } from 'redux'

import counterReducer from './counter'
// import todoReducer from './todo'

const reducers = combineReducers({
  counter: counterReducer
  // todo: todoReducer
})

export default reducers
