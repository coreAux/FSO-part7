import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import blogReducer from "./reducers/blogReducer"
import loginReducer from "./reducers/loginReducer"
import notificationReducer from "./reducers/notificationReducer"
import userReducer from "./reducers/userReducer"

const reducer = combineReducers({
  blogs: blogReducer,
  currentUser: loginReducer,
  notification: notificationReducer,
  users: userReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
