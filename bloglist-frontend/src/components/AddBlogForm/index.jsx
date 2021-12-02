import React, { useState } from "react"
import { act } from "react-dom/test-utils"

import { useDispatch, useSelector } from "react-redux"
import { createBlog } from "../../reducers/blogReducer"

import Button from "../Button"
import Input from "../Input"

import { ContentWrapper } from "./styles"

const AddBlogForm = ({ blogFormRef }) => {
  const currentUser = useSelector(state => state.currentUser)
  const [blog, setBlog] = useState({ title: "", author: "", url: "" })
  const dispatch = useDispatch()

  const handleAddBlog = async (e) => {
    e.preventDefault()
    dispatch(createBlog(blog, currentUser))
    act(() => setBlog({ title: "", author: "", url: "" }))
    blogFormRef.current.toggleVisibility()
  }

  return (
    <div>
      <h2>Add blog</h2>
      <form onSubmit={handleAddBlog}>
        <ContentWrapper>
          <Input
            id="title"
            type="text"
            value={blog.title}
            name="title"
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </ContentWrapper>
        <ContentWrapper>
          <Input
            id="author"
            type="text"
            value={blog.author}
            name="author"
            onChange={(e) => setBlog({ ...blog, author: e.target.value })}
          />
        </ContentWrapper>
        <ContentWrapper>
          <Input
            id="url"
            type="text"
            value={blog.url}
            name="url"
            onChange={(e) => setBlog({ ...blog, url: e.target.value })}
          />
        </ContentWrapper>
        <Button
          id="add-new-blog"
          type="submit"
        >
          Add blog
        </Button>
      </form>
    </div>
  )
}

export default AddBlogForm
