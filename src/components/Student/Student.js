import React, { Component } from 'react';
import axios from 'axios'

export default class Student extends Component {
  constructor() {
    super();

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          studentInfo: res.data
        });
      });
  }

  render() {
    const { first_name, last_name, email, grade } = this.state.studentInfo
    return (
      <div className="box">
        <h1>{first_name} {last_name}</h1>
        <h2>Grade: {grade}</h2>
        <h3>Email: {email}</h3>

      </div>
    )
  }
}