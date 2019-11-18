'use strict'

import React, { Component } from 'react'

class CoursesPage extends Component {

    state = {
      course: {
        title: ''
      }
    }

 handleChange = (event) => {
  event.preventDefault()
  const course = { ...this.props.course, title: event.target.value }
  this.setState({course})
 }

  render() {
    return (
      <form>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input type='text' onChange={this.handleChange} value={this.state.course.title}/>
        <input type='submit' value='save'/>
      </form>
    )
  }
}

export default CoursesPage
