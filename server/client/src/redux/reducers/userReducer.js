const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const SET_USER_ERROR = "SET_USER_ERROR"

const initializeState = {
  currentUser: {},
  isAuth: false,
  responseError: ''
}

export default function userReducer(state = initializeState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
        responseError: ''
      }
    case SET_USER_ERROR:
      return {
        ...state,
        responseError: action.payload
      }
    // case LOGOUT:
    //   localStorage.removeItem('token')
    //   return {
    //     ...state,
    //     currentUser: {},
    //     isAuth: false
    //   }
    default:
      return state
  }
}


export const setUser = user => ({type: SET_USER, payload: user})
export const setUserError = error => ({type: SET_USER_ERROR, payload: error})
export const logout = () => ({type: LOGOUT})
