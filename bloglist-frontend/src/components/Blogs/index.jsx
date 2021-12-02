import React, { useRef } from "react"

import { useSelector } from "react-redux"

import Togglable from "../Togglable"
import AddBlogForm from "../AddBlogForm"
import Blog from "../Blog"

const Blogs = () => {
  const user = useSelector(state => state.currentUser)
  const blogs = useSelector(state => state.blogs.data)
  const blogFormRef = useRef()

  return (
    <>
      <h1>blogs</h1>

      <Togglable buttonLabel="Add blog" ref={blogFormRef}>
        <AddBlogForm
          blogFormRef={blogFormRef}
        />
      </Togglable>

      {blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          user={user}
        />
      )}

    </>
  )
}

export default Blogs
