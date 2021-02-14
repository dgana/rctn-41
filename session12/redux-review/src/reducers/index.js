import { combineReducers } from 'redux'

import counterReducer from './counter'
import todoReducer from './todo'
import starwarsReducer from './starwars'

const reducers = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  starwars: starwarsReducer
})

export default reducers
