import React from "react"

import { ItemWrapper } from "../../globalStyle"

import { useNavigate } from "react-router-dom"

const User = ({ user }) => {
  const navigate = useNavigate()

  return (
    <ItemWrapper
      onClick={() => navigate(`/users/${user.id}`)}
    >
      <h2>{user.username}</h2>
      <p>{user.blogs.length} blogs created</p>
    </ItemWrapper>
  )
}

export default User
