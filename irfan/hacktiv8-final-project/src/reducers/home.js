import {COVID_DAILY} from '../actions/constants'

const initialState = []

const dailyReducer = (state = initialState, action) => {
    switch(action.type) {
        case COVID_DAILY:
            return action.payload
        default:
            return state
    }
}
export default dailyReducer