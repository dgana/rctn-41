import {CURRENCY_RATE} from '../actions/constants'
import moment from 'moment'


const initialState = {
    "base": "IDR",
    "date": moment(),
    "rates": {}
        
 

}

const rateReducer = (state = initialState, action) => {
    switch(action.type) {
        case CURRENCY_RATE:
            return action.payload
        default:
            return state
    }
}
export default rateReducer