import { INCREMENT, DECREMENT, PEOPLE_LIST } from './contants'

export const add = () => {
  return {
    type: INCREMENT
  }
}

export const addCounter = () => {
  return dispatch => {
    setTimeout(() => dispatch(add()), 1000)
  }
}

export const subtractCounter = () => {
  return {
    type: DECREMENT
  }
}

const peopleList = (payload) => {
  return {
    type: PEOPLE_LIST,
    payload
  }
}

export const getPeopleList = () => {
  return dispatch => {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(response => dispatch(peopleList(response.results)))
  }
}

/**
 * Buatlah action untuk todo
 */
