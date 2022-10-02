export const BUTTON_CLICK = 'BUTTON_CLICK'
export const SET_ID = 'SET_ID'
export const SET_PERSON = 'SET_PERSON'
export function click() {
  return {
    type: BUTTON_CLICK
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