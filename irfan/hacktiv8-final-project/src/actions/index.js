import {COVID_INDO, COVID_DAILY} from './constants'


const covidIndo = (payload) => {
    return {
        type: COVID_INDO,
        payload
    }
}

const covidDaily = (payload) => {
    return {
        type: COVID_DAILY,
        payload
    }
}


export const getCovidIndo = () => {
    return dispatch => {
        fetch('https://opendata.arcgis.com/datasets/0c0f4558f1e548b68a1c82112744bad3_0.geojson')
        .then(response => response.json())
        .then(response => dispatch(covidIndo(response.features)))
    }
}


export const getCovidDaily = () => {
    return dispatch => {
        fetch("https://api.kawalcorona.com/")
        .then(response => response.json())
        .then(response => dispatch(covidDaily(response)))
    }
}


