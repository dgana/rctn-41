import {CURRENCY_RATE} from './constants'

const currencyRate = (payload) => {
    return {
        type: CURRENCY_RATE,
        payload
    }
}

export const getCurrencyRate = () => {
    return dispatch => {
        fetch('https://api.exchangeratesapi.io/latest?base=IDR')
        .then(response => response.json())
        .then(response => dispatch(currencyRate(response.rates)))
    }
}