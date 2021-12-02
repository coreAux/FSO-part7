import styled from "styled-components"

export const LoginWrapper = styled.div`
  border: 0px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`

export const ContentWrapper = styled.div`
  width: 100%;

  &:first-of-type {
    margin: 0 0 20px 0;
  }

  &:last-of-type {
    margin: 0 0 40px 0;
  }
`
