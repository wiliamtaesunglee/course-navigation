'use strict'

import * as types from '../actions/actionsTypes'

const courseReducer = (state = [], action) => {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }]
    case types.LOAD_COURSES_SUCCESS:
      return action.courses
    default:
      return state
  }
}

export default courseReducer
