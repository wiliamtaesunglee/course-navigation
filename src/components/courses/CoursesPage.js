'use strict'

import React, { Component } from 'react'

class CoursesPage extends Component {

    state = {
      course: {
        title: ''
      }
    }

 handleChange = event => {

  const course = { ...this.props.course, title: event.target.value }
  this.setState({course})
 }

 handleSubmit = event => {
  event.preventDefault()
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input type='text' onChange={this.handleChange} value={this.state.course.title}/>
        <input type='submit' value='save'/>
      </form>
    )
  }
}

export default CoursesPage
