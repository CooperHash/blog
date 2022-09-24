import { combineReducers } from "@reduxjs/toolkit";
import { BUTTON_CLICK } from "../actions/actions";

function logger(
    state = {
    },
    action
) {
    switch (action.type) {
        case BUTTON_CLICK:
            return Object.assign({},{message: 'click one time'})
        default:
            return state
    }
}

const rootReducer = combineReducers({
    logger
})

export default rootReducer