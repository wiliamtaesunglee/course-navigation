'use strict'
import * as type from './actionsTypes'
import * as courseApi from '../../api/courseApi'

export const createCourse = (course) => ( { type: type.CREATE_COURSE, course } )

export const leadCourseSuccess = (courses) => ( { type: type.LOAD_COURSES_SUCCESS, courses } )

export function loadCourses() {
  return function (dispatch) {
    return courseApi
    .getCourses()
    .then(courses => {
      dispatch(leadCourseSuccess(courses))
    })
    .catch(error => {
      throw error
    })
  }
}
