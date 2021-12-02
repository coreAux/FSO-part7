import styled from "styled-components"
import { StyledButton } from "../Button/styles"

export const TogglableDiv = styled.div`
  display: ${({ $visible }) => $visible ? "none" : ""};
`

export const ButtonWithMargin = styled(StyledButton)`
  margin-top: 10px;
`
