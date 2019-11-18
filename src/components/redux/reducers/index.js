import { combineReducers } from 'redux'
import courses from './combineReducers'

const rootReducers = combineReducers({
  courses: courses
})

export default rootReducers
