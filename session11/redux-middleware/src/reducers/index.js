import { combineReducers } from 'redux'

import counterReducer from './counter'
// import todoReducer from './todo'
import starwarsReducer from './starwars'

const reducers = combineReducers({
  counter: counterReducer,
  // todo: todoReducer,
  starwars: starwarsReducer
})

export default reducers
