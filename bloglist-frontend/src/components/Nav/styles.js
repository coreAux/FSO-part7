import styled from "styled-components"

export const StyledNav = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  position: sticky;
  top: 45px;
`

export const NavSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div,
  & > p,
  & > button {
    margin: 0 20px;
  }
`

export const MenuItem = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
  text-decoration: ${({ $active }) => $active ? "underline" : "none"};

  @media (hover) {
    &:hover {
      color: var(--purple);
    }
  }
`
