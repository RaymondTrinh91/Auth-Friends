import {combineReducers} from 'redux'
import { friendReducer } from './friendsReducer'
import { loginReducer } from './loginReducer'

export default combineReducers ({
    friendReducer,
    loginReducer
})