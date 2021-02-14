import {combineReducers} from 'redux'
import rateReducer from './rates'

const reducers = combineReducers({
    rates: rateReducer
})

export default reducers