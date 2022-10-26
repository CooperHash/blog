export const BUTTON_CLICK = 'BUTTON_CLICK'
export const SET_ID = 'SET_ID'
export const SET_PERSON = 'SET_PERSON'
export const SAVE_TRANSLATE = 'SAVE_TRANSLATE'
export const SET_CODE = 'SET_CODE'
export function click() {
  return {
    type: BUTTON_CLICK
  }
}

export function setCode(payload) {
  return {
    type: SET_CODE,
    payload: payload
  }
}

export function setUid(payload) {
  return {
    type: SET_ID,
    payload: payload
  }
}

export function setPerson(payload) {
  return {
    type: SET_PERSON,
    payload: payload
  }
}

export function autosaveTranslate(payload) {
  return {
    type: SAVE_TRANSLATE,
    payload: payload
  }
}