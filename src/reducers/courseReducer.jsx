export default function (state = {}, action) {
  switch (action.type) {
    case "GET_COURSE_LIST":
      return  action.payload ;

    default:
      return state;
  }
}
