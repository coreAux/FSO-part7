import React, { useState } from "react"

import { useDispatch } from "react-redux"

import { login } from "../../reducers/loginReducer"

import Input from "../Input"
import Button from "../Button"

import { LoginWrapper, ContentWrapper, Form } from "./styles"

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(login({ username, password }))
  }

  return (
    <LoginWrapper>
      <h1>Bloglist</h1>
      <Form onSubmit={handleLogin}>
        <ContentWrapper>
          <Input
            id="username"
            type="text"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </ContentWrapper>
        <ContentWrapper>
          <Input
            id="password"
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </ContentWrapper>
        <Button type="submit">log in</Button>
      </Form>
    </LoginWrapper>
  )
}

export default LoginForm
