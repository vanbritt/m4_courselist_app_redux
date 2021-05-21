import React from 'react'
import { Link } from 'react-router-dom'

const url = "http://localhost:8900/";

const CourseList = (props) => {
    const renderList = ({courseList})=>{
        if(courseList && courseList.length>0){
                return (
                    courseList.map((course)=>{
                        return (   
                        <div class="card col-md-3" key={course.id}>

                        <img src={`${url}/images/${course.img}`} height="200" class="card-img-top" alt={course.name} />
                        <div class="card-body">
                          <h5 class="card-title">{course.name}</h5>
                          <p class="card-text">
                            {course.description}
                          </p>

                          <Link to={`/addEnquiry/${course.id}`} className="btn btn-primary mr-1">
                            Enquire
                          </Link>
                          <Link  to={`/course/${course.id}`} className="btn btn-success m-2">
                            Details
                          </Link>
                        </div>
                        </div>
                      )
                    })
                )
        }
    }
    return (
        <div className="row">
                {renderList(props)}
        </div>
    )
}

export default CourseList
