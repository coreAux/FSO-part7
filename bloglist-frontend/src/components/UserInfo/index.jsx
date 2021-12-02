import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import { useMatch, useNavigate, Link } from "react-router-dom"

import Button from "../Button"

import { UL } from "../../globalStyle"

const UserInfo = () => {
  const navigate = useNavigate()
  const match = useMatch("/users/:id")
  const didFetch = useSelector(state => state.users.didFetch)
  const user = useSelector(state => state.users.data.find((u) => u.id === match.params.id))

  useEffect(() => {
    if (didFetch && !user) {
      navigate(-1)
    }
  }, [user, didFetch])

  return (
    <>
      {user && didFetch ?
        <div>
          <Button
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <h1>{user.username}</h1>
          {user.blogs.length > 0 &&
            <>
              <h2>
                Added blogs:
              </h2>
              <UL>
                {user.blogs.map((b) => (
                  <li key={b.id}>
                    <Link to={`/blogs/${b.id}`}>
                      {b.title}
                    </Link>
                  </li>
                ))}
              </UL>
            </>
          }
          {user.blogs.length === 0 &&
            <h2>This user has not added any blogs yet.</h2>
          }
        </div>
        :
        <>
          Loading...
        </>
      }
    </>
  )
}

export default UserInfo
