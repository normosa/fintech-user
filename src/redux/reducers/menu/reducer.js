import { MENU_ACTIVE_ITEM, MENU_TOGGLE } from './action-types'

const Reducer = (state = [], action) => {
    switch (action.type) {
        case MENU_ACTIVE_ITEM:
            return activeItem(state, action.payload)
        case MENU_TOGGLE:
                return toggleMenu(state)
        default:
            return state
    }
}

const activeItem = (state, payload) => {
    state.activeItem = payload.key
    return state
}

const toggleMenu = (state) => {
    state.showMenu = !state.showMenu
    return state
}

export default Reducer