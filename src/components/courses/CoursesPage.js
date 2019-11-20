'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

class CoursesPage extends Component {
  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
    </>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = ({courses}) => ({
  courses
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(courseActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
