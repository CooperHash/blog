import { combineReducers } from "@reduxjs/toolkit";
import { BUTTON_CLICK, SET_PERSON } from "../actions/actions";
import { SET_ID } from '../actions/actions'
function click(
    state = {},
    action
) {
    switch (action.type) {
        case BUTTON_CLICK:
            return Object.assign({}, { message: 'click one time' })
        default:
            return state
    }
}

function id(
    state = 0,
    action
) {
    switch (action.type) {
        case SET_ID:
            return state = action.payload
        default:
            return state
    }
}


function person(
    state = "",
    action
) {
    switch (action.type) {
        case SET_PERSON:
            return state = action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    click, id, person
})

export default rootReducer