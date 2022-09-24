export const BUTTON_CLICK = 'BUTTON_CLICK'

export function click(store) {
    return {
      type: BUTTON_CLICK,
      store
    }
  }