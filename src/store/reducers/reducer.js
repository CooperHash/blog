import { combineReducers } from "@reduxjs/toolkit";
import { BUTTON_CLICK } from "../actions/actions";

function posts(
    state = {
        log: {}
    },
    action
) {
    switch (action.type) {
        case BUTTON_CLICK:
            return Object.assign({}, state.log, {
                log: 'i am log'
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    posts
})

export default rootReducer