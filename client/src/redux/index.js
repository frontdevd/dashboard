import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import dashboardReducer from "./reducers/dashboardReducer"
import userReducer from "./reducers/userReducer"

const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
