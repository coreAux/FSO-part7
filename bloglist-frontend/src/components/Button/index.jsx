import React from "react"

import { StyledButton } from "./styles"

const Button = ({ children, ...props }) => {

  return (
    <StyledButton
      {...props}
      $warning={props.warning}
    >
      {children}
    </StyledButton>
  )
}

export default Button
