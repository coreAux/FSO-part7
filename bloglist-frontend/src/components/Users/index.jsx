import React from "react"
import { useSelector } from "react-redux"

import User from "../User"

const Users = () => {
  const users = useSelector(state => state.users.data)

  return (
    <div>
      <h1>Users</h1>
      {users.map((u) => (
        <User
          key={u.id}
          user={u}
        />
      ))}
    </div>
  )
}

export default Users
