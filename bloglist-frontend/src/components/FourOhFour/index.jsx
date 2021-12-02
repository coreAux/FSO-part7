import React, { useEffect, useState } from "react"
import  { useNavigate } from "react-router-dom"

const FourOhFour = () => {
  const [time, setTime] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    let timer = setTimeout(() => {
      setTime((time) => time - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [time])

  useEffect(() => {
    setTimeout(() => {
      navigate("/blogs")
    }, time * 1000)
  }, [])

  return (
    <>
      <h1>404</h1>
      <p>Whatever you were looking for, it&lsquo;s not here.</p>
      <p>Sending you to a page that actually exist in ... {time}</p>
    </>
  )
}

export default FourOhFour
