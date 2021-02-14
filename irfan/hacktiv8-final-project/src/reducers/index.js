import {combineReducers} from 'redux'
import covidReducer from './table'
import dailyReducer from './home'


const reducers = combineReducers({
    covid: covidReducer,
    daily: dailyReducer,
    

})

export default reducers