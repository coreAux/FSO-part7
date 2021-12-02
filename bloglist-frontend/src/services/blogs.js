import axios from "axios"
const baseUrl = "/api/blogs"

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.get(baseUrl, config)
  return response.data
}

const create = async (newBlog) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const remove = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${blog.id}`, config)
  return response.data
}

const upvote = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }

  const newBlog = {
    likes: blog.likes + 1,
    author: blog.author,
    title: blog.title,
    comments: blog.comments,
    url: blog.url,
  }

  const response = await axios.put(`${baseUrl}/${blog.id}`, newBlog, config)
  return response.data
}

const addComment = async (blog, comment) => {
  const config = {
    headers: { Authorization: token }
  }

  const blogWithComments = {
    likes: blog.likes,
    author: blog.author,
    title: blog.title,
    comments: [...blog.comments, comment],
    url: blog.url,
  }

  const response = await axios.put(`${baseUrl}/${blog.id}/comments`, blogWithComments, config)
  return response.data
}

const blogService = { getAll, create, remove, setToken, upvote, addComment }

export default blogService
