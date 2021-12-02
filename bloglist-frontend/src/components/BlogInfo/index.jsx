import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { upvote, deleteBlog, addComment } from "../../reducers/blogReducer"

import { useMatch, useNavigate, Link } from "react-router-dom"

import Button from "../Button"
import Input from "../Input"

import { UL } from "../../globalStyle"
import { TitleWrapper, H1, H2, ButtonWrapper, RelativeButton, PurpleHeart, AbsoluteSpan, OpacityZero, CommentsWrapper } from "./styles"

const BlogInfo = () => {
  const [comment, setComment] = useState("")
  const [likeIcon, setLikeIcon] = useState("❤️")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const match = useMatch("/blogs/:id")
  const didFetch = useSelector(state => state.blogs.didFetch)
  const blog = useSelector(state => state.blogs.data.find((b) => b.id === match.params.id))
  const currentUser = useSelector(state => state.currentUser)

  useEffect(() => {
    if (didFetch && !blog) {
      navigate(-1)
    }
  }, [blog, didFetch])

  useEffect(() => {
    if (likeIcon !== "❤️") {
      const timer = setTimeout(() => {
        setLikeIcon("❤️")
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [blog, likeIcon])

  const handleAddLike = async (e) => {
    e.preventDefault()
    dispatch(upvote(blog))
    setLikeIcon("😘")
  }

  const handleRemoveBlog = async (e) => {
    e.preventDefault()

    if (window.confirm(`Do you really want to delete ${blog.title} by ${blog.author}?`)) {
      dispatch(deleteBlog(blog))
    }
  }

  const handleAddComment = async (e) => {
    e.preventDefault()
    dispatch(addComment(blog, comment))
    setComment("")
  }

  return (
    <>
      {blog && didFetch && currentUser ?
        <div>
          <Button
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <TitleWrapper>
            <H1>{blog.title}</H1>
            <H2>by {blog.author}</H2>
          </TitleWrapper>
          <p>
            🔗{" "}
            <a href={blog.url} target="_blank" rel="noreferrer">{blog.url}</a>
          </p>
          <p>
            <PurpleHeart $likeIcon="❤️">
              ❤️
            </PurpleHeart>
            {" "}
            {blog.likes} likes
          </p>
          <p>
            ➕{" "}
            added by <Link to={`/users/${blog.user.id}`}>{blog.user.username}</Link>
          </p>

          <ButtonWrapper>
            <RelativeButton
              onClick={handleAddLike}
            >
              <AbsoluteSpan
                $likeIcon={likeIcon}
              >
                {likeIcon}
              </AbsoluteSpan>
              <OpacityZero>
                {likeIcon}
              </OpacityZero>
            </RelativeButton>

            {(currentUser.id === blog.user.id || currentUser.id === blog.user) && <Button
              onClick={handleRemoveBlog}
              warning
            >
              Delete
            </Button>}
          </ButtonWrapper>

          <CommentsWrapper>
            <h2>Comments</h2>

            <form onSubmit={handleAddComment}>
              <Input
                id="comment"
                type="text"
                value={comment}
                placeholder="Add comment..."
                onChange={(e) => setComment(e.target.value)}
              />
              <ButtonWrapper>
                <Button type="submit">
                  Add comment
                </Button>
              </ButtonWrapper>
            </form>

            {blog.comments?.length > 0 ?
              <UL>
                {blog.comments.map((c) => (
                  <li key={c}>
                    {c}
                  </li>
                ))}
              </UL>
              :
              <p>No comments yet...</p>
            }
          </CommentsWrapper>
        </div>
        :
        <>
          Loading...
        </>
      }
    </>
  )
}

export default BlogInfo
