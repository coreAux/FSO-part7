import React from "react"
import { useNavigate } from "react-router-dom"

import { ItemWrapper } from "../../globalStyle"

const Blog = ({ blog }) => {
  const navigate = useNavigate()

  return (
    <ItemWrapper
      onClick={() => navigate(`/blogs/${blog.id}`)}
    >
      <h2>
        {blog.title}
      </h2>
      <p>
        by {blog.author}
      </p>
    </ItemWrapper>
  )
}

export default Blog
