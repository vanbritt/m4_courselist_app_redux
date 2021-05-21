import axios from 'axios'
const courseUrl = "http://localhost:8900/courses"
const inquiryUrl = "http://localhost:8900/enquiries"

export function courseList(){
    const courses = fetch(courseUrl, {method: 'GET'}).then(res => res.json());

    return {
        type: "GET_COURSE_LIST",
        payload: courses
    }

}

export function courseDetails(){
    const courses = fetch(courseUrl, {method: 'GET'}).then(res => res.json());

    return {
        type: "GET_COURSE_LIST",
        payload: courses
    }

}

export function inquiryList(){
    const inquiries = fetch(inquiryUrl, {method: 'GET'}).then(res => res.json());

    return {
        type: "GET_INQUIRY_LIST",
        payload: inquiries
    }

}

export function addEnquiry(data){

   const inquiry= axios.post(inquiryUrl,data).then(res => res.data)
   
    return {
        type: "ADD_ENQUIRY",
        payload: inquiry
    }

}