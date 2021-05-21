const initialState ={
    inquiry: {
        courseId:"",
        courseName: "",
        name: "",
        email: "",
        phone: "",
        message: "",
    },
    inquiries: {}
}

export default function(state=initialState, action){

    switch(action.type){
        case "GET_INQUIRY_LIST": 
            return {...state, inquiries : action.payload};
            case "ADD_INQUIRY": 
            return {...state, inquiry : action.payload};
        default: return state;
    }
}