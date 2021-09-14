import { AUTH_SAVE } from './action-types'

const Reducer = (state = [], action) => {
    switch (action.type) {
        case AUTH_SAVE:
            return save(state, action.payload)
        default:
            return state
    }
}

const save = (state, payload) => {
    state = payload
    return state
}

export default Reducer