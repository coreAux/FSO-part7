import React, { useState, useImperativeHandle, forwardRef } from "react"

import Button from "../Button"
import { TogglableDiv, ButtonWithMargin } from "./styles"

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return { toggleVisibility }
  })

  return (
    <div>
      <TogglableDiv
        $visible={visible}
      >
        <Button id="togglable-toggler" onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </TogglableDiv>
      <TogglableDiv
        $visible={!visible}
      >
        {props.children}
        <ButtonWithMargin
          id="togglable-cancel"
          onClick={toggleVisibility}
        >
          Cancel
        </ButtonWithMargin>
      </TogglableDiv>
    </div>
  )
})

Togglable.displayName = "Togglable"

export default Togglable
