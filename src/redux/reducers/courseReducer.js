'use strict'

import * as types from '../actions/actionsTypes'

const courseReducer = (state = [], action) => {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }]
    default:
      return state
  }
}

export default courseReducer
