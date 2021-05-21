import {combineReducers} from 'redux'
import course from './courseReducer'
import inquiry from './inquiryReducer'

const rootReducer = combineReducers({course, inquiry})

export default rootReducer