import React, { Component } from "react";
import { connect } from "react-redux";
const baseUrl = "http://localhost:8900";
export class CourseDetails extends Component {

  render() {
    const renderDetails = ({ detaildata }) => {
      if (detaildata) {
        return (
          <div className="row">
            <div className="col-md-6">
              <h1>{detaildata.name}</h1>
              <img
                width="600"
                src={`${baseUrl}/images/${detaildata.img}`}
                alt={detaildata.name}
                className="img-responsive"
              />
            </div>
            <div className="col-md-6">
              <h2>Description</h2>
              <p>{detaildata.description}</p>
            </div>
          </div>
        );
      }
    };
    return renderDetails(this.props);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    detaildata: state.course.find((item) => {
      return item.id === Number(ownProps.match.params.courseId);
    }),
  };
}

export default connect(mapStateToProps)(CourseDetails);
