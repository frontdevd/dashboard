import {COLLAPSE_MENU, COLLAPSE_TOGGLE, THEME_MODE} from "../constans";

const initialState = {
  isOpen: [],
  isTrigger: [],
  collapseMenu: false,
  headerBackColor: 'header-default',
  rtlLayout: false,
  headerFixedLayout: false,
  isFullScreen: false,
  themeMode: 'light'
}

const dashboardReducer = (state = initialState, action) => {
  let trigger = []
  let open = []

  switch (action.type) {
    case THEME_MODE:
      return {
        ...state,
        themeMode: action.payload
      }

    case COLLAPSE_MENU:
      return {
        ...state,
        collapseMenu: !state.collapseMenu
      }
    case COLLAPSE_TOGGLE:
      if (action.menu.type === 'sub') {
        open = state.isOpen
        trigger = state.isTrigger

        const triggerIndex = trigger.indexOf(action.menu.id)
        if (triggerIndex > -1) {
          open = open.filter(item => item !== action.menu.id)
          trigger = trigger.filter(item => item !== action.menu.id)
        }

        if (triggerIndex === -1) {
          open = [...open, action.menu.id]
          trigger = [...trigger, action.menu.id]
        }
      } else {
        open = state.isOpen
        const triggerIndex = (state.isTrigger).indexOf(action.menu.id)
        trigger = (triggerIndex === -1) ? [action.menu.id] : []
        open = (triggerIndex === -1) ? [action.menu.id] : []
      }

      return {
        ...state,
        isOpen: open,
        isTrigger: trigger
      }

    default:
      return state
  }
}

export default dashboardReducer
