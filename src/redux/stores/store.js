import { createStore } from 'redux'
import Reducer from '../reducers/reducer'
import DefaultMenuStore from './defaults/menu'
import DefaultAuthStore from './defaults/auth'

const store = createStore(Reducer, {
    "menu": DefaultMenuStore,
    "auth": DefaultAuthStore
})

export default store