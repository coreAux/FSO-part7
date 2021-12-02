import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { Routes, Route, useLocation } from "react-router-dom"

import { Layout } from "./globalStyle"

import { initBlogs } from "./reducers/blogReducer"
import { initUsers } from "./reducers/userReducer"
import { recurringUser } from "./reducers/loginReducer"

import Toast from "./components/Toast"
import Nav from "./components/Nav"
import Blogs from "./components/Blogs"
import BlogInfo from "./components/BlogInfo"
import Users from "./components/Users"
import UserInfo from "./components/UserInfo"
import FourOhFour from "./components/FourOhFour"
import LoginForm from "./components/LoginForm"

const App = () => {
  const user = useSelector(state => state.currentUser)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(recurringUser(user))
    }
  }, [])

  useEffect(() => {
    if (user) {
      dispatch(initUsers())
    }
  }, [user])

  useEffect(() => {
    if (user) {
      dispatch(initBlogs())
    }
  }, [user])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Toast />
      {user ?
        <>
          <Nav />

          <Layout>
            <Routes>
              <Route path="/" element={<><h1>Welcome</h1></>} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogInfo />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UserInfo />} />
              <Route path="*" element={<FourOhFour />} />
            </Routes>
          </Layout>
        </>
        :
        <>
          <LoginForm />
        </>
      }
    </>
  )
}

export default App
