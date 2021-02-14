import {COVID_INDO} from '../actions/constants'

const initialState = []

const covidReducer = (state = initialState, action) => {
    switch(action.type) {
        case COVID_INDO:
            return action.payload
        default:
            return state
    }
}

export default covidReducer