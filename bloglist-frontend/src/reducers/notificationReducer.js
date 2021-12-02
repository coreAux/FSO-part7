const initialState = {
  content: "If you're seeing this it's working!",
  show: false,
  type: "notification",
  timeout: 3,
  icon: "☝️"
}

export const setNotification = (content, type, timeout) => {
  return async dispatch => {
    let icon = ""
    switch(type) {
    case "success":
      icon = "👍"
      break
    case "error":
      icon = "✋"
      break
    case "notification":
      icon = "☝️"
      break
    default:
      icon = ""
      break
    }

    dispatch({
      type: "SET_NOTIFICATION",
      data: {
        content,
        type,
        timeout,
        icon
      }
    })
  }
}

export const hideNotification = () => {
  return async dispatch => {
    dispatch({
      type: "HIDE_NOTIFICATION"
    })
  }
}

const notificationReducer = ( state = initialState, action ) => {
  switch (action.type) {
  case "SET_NOTIFICATION":
    return {
      content: action.data.content,
      type: action.data.type,
      show: true,
      timeout: action.data.timeout,
      icon: action.data.icon
    }
  case "HIDE_NOTIFICATION":
    return {
      content: state.content,
      type: state.type,
      show: false,
      timeout: 0,
      icon: state.icon
    }
  default:
    return state
  }
}

export default notificationReducer
