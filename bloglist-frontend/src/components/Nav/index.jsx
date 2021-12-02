import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { logout } from "../../reducers/loginReducer"

import Button from "../Button"
import { StyledNav, NavSection, MenuItem } from "./styles"

const Nav = () => {
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <StyledNav>
      <NavSection>
        <MenuItem
          $active={location.pathname.includes("/blogs")}
          onClick={() => navigate("blogs")}
        >
          Blogs
        </MenuItem>
        <MenuItem
          $active={location.pathname === "/users"}
          onClick={() => navigate("users")}
        >
          Users
        </MenuItem>
      </NavSection>
      <NavSection>
        <p>
          {currentUser.username} logged in
        </p>
        <Button
          onClick={() => dispatch(logout())}
          warning
        >
          Log out
        </Button>
      </NavSection>
    </StyledNav>
  )
}

export default Nav
