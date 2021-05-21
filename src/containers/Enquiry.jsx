import React, { Component } from "react";
import EnquiryList from "../component/EnquiryList";
import {connect} from "react-redux"
import InquiryList from "../component/EnquiryList";
import {inquiryList} from "../actions"
import {bindActionCreators} from 'redux'

export class Inquiry extends Component {


componentDidMount() {
      this.props.inquiryList();
}

  render() {
    return (
      <div >
        <h1>Enquiry List</h1>
        <InquiryList inquiryList={this.props.inquiries}/>
      </div>
  );
  }
}

function mapStateToProps(state){
  return{
    inquiries : state.inquiry.inquiries
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({inquiryList}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inquiry);
