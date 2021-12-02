import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { hideNotification } from "../../reducers/notificationReducer"

import { ToastWrapper } from "./styles"

const Toast = () => {
  const notification = useSelector(state => state.notification)
  const { content, type, show, timeout, icon } = { ...notification }
  const dispatch = useDispatch()

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatch(hideNotification())
      }, timeout * 1000)

      return () => clearTimeout(timer)
    }
  }, [notification])

  return (
    <ToastWrapper
      $show={show}
      $type={type}
    >
      <p>{icon} {content}</p>
    </ToastWrapper>
  )
}

export default Toast
