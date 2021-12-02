import loginService from "../services/login"
import { setNotification } from "./notificationReducer"
import blogService from "../services/blogs"

export const recurringUser = (localStorageUser) => {
  return async dispatch => {
    blogService.setToken(localStorageUser.token)
    dispatch({
      type: "LOGIN",
      data: localStorageUser
    })
  }
}

export const login = (credentials) => {
  return async dispatch => {
    try {
      const currentUser = await loginService.login(credentials)
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(currentUser))
      dispatch({
        type: "LOGIN",
        data: currentUser
      })
      blogService.setToken(currentUser.token)
      dispatch(setNotification(`${currentUser.username} logged in!`, "success", 3))
    } catch (err) {
      console.error("Error: ", err)
      dispatch(setNotification("Wrong username or password.", "error", 5))
    }

  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.removeItem("loggedBlogappUser")
    dispatch({
      type: "LOGOUT",
      data: null
    })
    dispatch(setNotification("You logged out", "notification", 5))
  }
}

const currentUserReducer = (state = null, action) => {
  switch (action.type) {
  case "LOGIN":
    return action.data
  case "LOGOUT":
    return action.data
  default:
    return state
  }
}

export default currentUserReducer
