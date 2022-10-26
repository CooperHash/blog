import { combineReducers } from "@reduxjs/toolkit";
import { BUTTON_CLICK, SAVE_TRANSLATE, SET_PERSON, SET_CODE } from "../actions/actions";
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


function translate(
    state = "",
    action
) {
    switch (action.type) {
        case SAVE_TRANSLATE:
            return state = action.payload
        default:
            return state
    }
}


function code(
    state = {
        value: "",
        tag: "",
        info: ""
    },
    action
) {
    switch (action.type) {
        case SET_CODE:
            return Object.assign({},action.payload)
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    click, id, person, translate, code
})

export default rootReducer