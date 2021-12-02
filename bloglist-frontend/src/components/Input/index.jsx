import React from "react"

import { StyledInput, P } from "./styles"

const Input = ({ ...props }) => {

  return (
    <label>
      <P>{props.name}</P>
      <StyledInput
        {...props}
      />
    </label>
  )
}

export default Input
