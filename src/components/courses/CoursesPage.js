'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

class CoursesPage extends Component {

    state = {
      course: {
        title: ''
      }
    }

 handleChange = event => {
  const course = { ...this.state.course, title: event.target.value }
  this.setState({course})
 }

 handleSubmit = event => {
  event.preventDefault()
  this.props.actions.createCourse(this.state.course)
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.course.title}/>

        <input type='submit' value='save'/>
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
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
