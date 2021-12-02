import blogService from "../services/blogs"
import { setNotification } from "./notificationReducer"

export const createBlog = (content, currentUser) => {
  return async dispatch => {
    try {
      const newBlog = await blogService.create(content)
      dispatch({
        type: "NEW_BLOG",
        data: {
          ...newBlog,
          user: currentUser
        }
      })
      dispatch(setNotification(`${newBlog.title} added!`, "success", 3))
    } catch (err) {
      console.error("Error: ", err)
      dispatch(setNotification("Couldn't add blog at the moment, please try again later.", "error", 5))
    }

  }
}

export const deleteBlog = (blog) => {
  return async dispatch => {
    try {
      await blogService.remove(blog)
      dispatch({
        type: "DELETE_BLOG",
        data: blog
      })
      dispatch(setNotification(`Deleted ${blog.title}.`, "success", 3))
    } catch (err) {
      console.error("Error: ", err)
      dispatch(setNotification("Couldn't delete this blog at the moment, please try again later.", "error", 5))
    }
  }
}

export const upvote = (blog) => {
  return async dispatch => {
    try {
      const upvotedBlog = await blogService.upvote(blog)
      dispatch({
        type: "UPVOTE",
        data: upvotedBlog
      })
      dispatch(setNotification(`${blog.title} +1 like!`, "success", 3))
    } catch (err) {
      console.error("Error: ", err)
      dispatch(setNotification("Couldn't like this blog at the moment, please try again later.", "error", 5))
    }
  }
}

export const addComment = (blog, comment) => {
  return async dispatch => {
    try {
      const commentedBlog = await blogService.addComment(blog, comment)
      dispatch({
        type: "COMMENT",
        data: commentedBlog
      })
    } catch (err) {
      console.error("Error: ", err)
      dispatch(setNotification("Couldn't add comment to this blog at the moment, please try again later.", "error", 5))
    }
  }
}

export const initBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: "INIT_BLOGS",
      data: blogs
    })
  }
}

const blogReducer = (state = { data: [], didFetch: false }, action) => {
  switch (action.type) {
  case "INIT_BLOGS":
    return {
      data: action.data,
      didFetch: true
    }
  case "NEW_BLOG":
    return {
      data: [...state.data, action.data],
      didFetch: true
    }
  case "UPVOTE":
    return {
      data: state.data.map((b) => b.id !== action.data.id ? b : action.data),
      didFetch: true
    }
  case "COMMENT":
    return {
      data: state.data.map((b) => b.id !== action.data.id ? b : action.data),
      didFetch: true
    }
  case "DELETE_BLOG":
    return {
      data: state.data.filter((b) => b.id !== action.data.id),
      didFetch: true
    }
  default:
    return state
  }
}

export default blogReducer
