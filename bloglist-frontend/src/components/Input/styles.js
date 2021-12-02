import styled from "styled-components"

export const StyledInput = styled.input`
  border: none;
  border-radius: .4em;
  background-color: var(--mr);
  box-shadow: 1px 1px 0 0 var(--purple);
  width: 100%;
  padding: 0 10px;
  font-size: 32px;

  &:focus {
    background: var(--pl);
    outline: none;
    box-shadow: 0 0 0 1px var(--purple);
  }
`

export const P = styled.p`
  text-transform: uppercase;
`
