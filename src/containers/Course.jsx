import React, { Component } from "react";
import CourseList from "../component/CourseList";
import {connect} from "react-redux";
import {courseList} from "../actions"
import {bindActionCreators} from 'redux'

export class Course extends Component {

  componentDidMount() {
      this.props.courseList();
  }
  render() {
    return (
      <div className="row">
        <h1>Course List</h1>
       <CourseList courseList={this.props.course} /> 
      </div>
    );
  }
}
function mapStateToProps(state){
  console.log(state)
  return {
      course : state.course
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({courseList}, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(Course);
