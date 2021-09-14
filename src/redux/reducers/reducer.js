import { combineReducers } from 'redux'
import auth from './auth/reducer'
import menu from './menu/reducer'

const Reducer = combineReducers({
    menu,
    auth
})

export default Reducer