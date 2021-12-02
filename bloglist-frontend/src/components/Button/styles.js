import styled from "styled-components"

export const StyledButton = styled.button`
  width: 100px;
  background-color: ${({ $warning }) => $warning ? "var(--deeppink)" : "inherit"};
  text-transform: uppercase;
  color: black;
  border: 1px var(--purple) solid;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 1px 1px 0 0 var(--purple);
  /* transition: transform .1s, box-shadow .1s; */

  @media (hover) {
    &:hover {
      border: 1px var(--purple) solid;
      box-shadow: 1px 2px 0 0 var(--purple);
      transform: translateY(-1px);
    }
  }

  &:active {
    border: 1px var(--purple) solid;
    box-shadow: inset 1px 1px 0 0 var(--purple);
    transform: translateY(1px)
  }
`
