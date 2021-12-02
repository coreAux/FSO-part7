import userService from "../services/users"

export const initUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: "INIT_USERS",
      data: users
    })
  }
}

const userReducer = (state = { data: [], didFetch: false }, action) => {
  switch (action.type) {
  case "INIT_USERS":
    return {
      data: action.data,
      didFetch: true
    }
  default:
    return state
  }
}

export default userReducer
