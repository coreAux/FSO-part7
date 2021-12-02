import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./store"
import { GlobalStyle } from "./globalStyle"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"))
