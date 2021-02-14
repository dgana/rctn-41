import {
  INCREMENT,
  DECREMENT,
  PEOPLE_LIST,
  ADD_TODO,
  DELETE_TODO
} from './contants'

export const addCounter = () => {
  return {
    type: INCREMENT
  }
}

export const addCounterAsync = () => {
  return dispatch => {
    setTimeout(() => dispatch(addCounter()), 1000)
  }
}

export const subtractCounter = () => {
  return {
    type: DECREMENT
  }
}

export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

const peopleList = payload => {
  return {
    type: PEOPLE_LIST,
    payload
  }
}

export const getPeopleList = (page = 1) => {
  return dispatch => {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then(response => response.json())
      .then(response => dispatch(peopleList(response)))
  }
}

/**
 * Buatlah action untuk todo
 */
