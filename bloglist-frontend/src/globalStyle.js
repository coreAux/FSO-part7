import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  :root {
    --white: #f1f0f5;
    --green: hsl(150, 90%, 80%);
    --red: #ff6347;

    // SUCCESS
    --i: #4b0082;

    // ERROR
    --deeppink: #ff1493;

    // NOTIFICATION
    --mp: #9370db;



    --blue: #9370db;

    --gray: hsl(0, 0%, 80%);
    --pink: #ffc0cb;
    --pl: #dda0dd;
    // --purple: #663399;
    --purple: #800080;

    --bv: #8a2be2;
    --dm: #8b008b;
    --do: #9932cc;
    --dv: #9400d3;
    --dp: #ff1493;
    --violet: #ee82ee;
    --hp: #ff69b4;

    --lp: #ffb6c1;

    --mo: #ba55d3;

    --mvr: #c71585;
    --mr: #ffe4e1;
    --o: #da70d6;
    --pvr: #db7093;





    --f: #ff00ff;
    --p2: #800080;



  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background-color: var(--pink);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: "VT323", -apple-system, sans-serif;
    font-size: 16px;
    margin-top: 45px;
  }

  body:before {
    z-index: 2;
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 40px;
    transform: rotate(180deg);
    background: linear-gradient(0deg, var(--p2) 30%, transparent 30%, transparent 35%, var(--p2) 35%, var(--p2) 55%, transparent 55%, transparent 60%, var(--p2) 60%, var(--p2) 75%, transparent 75%, transparent 80%, var(--p2) 80%, var(--p2) 90%, transparent 90%, transparent 95%, var(--p2) 95%, var(--p2) 100%);
  }

  body:after {
    z-index: 2;
    content: "";
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 40px;
    background: linear-gradient(0deg, var(--p2) 30%, transparent 30%, transparent 35%, var(--p2) 35%, var(--p2) 55%, transparent 55%, transparent 60%, var(--p2) 60%, var(--p2) 75%, transparent 75%, transparent 80%, var(--p2) 80%, var(--p2) 90%, transparent 90%, transparent 95%, var(--p2) 95%, var(--p2) 100%);
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    font-weight: 400;
  }

  #root {
    isolation: isolate;
  }

  *::selection {
    background: var(--p2);
    color: white;
  }

  h1 {
    line-height: 1;
    color: var(--purple);
    text-transform: uppercase;
    font-size: 64px;
    text-align: center;
  }

  a {
    color: black;
    text-decoration: underline;
  }

  @media (hover) {
    a:hover {
      color: var(--purple);
      text-decoration: none;
    }
  }

`

export const Layout = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding-bottom: 40px;

  @media (min-width: 1021px) {
    width: 70vw;
  }
`

export const ItemWrapper = styled.div`
  margin: 20px 0;
  padding: 5px;
  border: 1px solid var(--purple);
  box-shadow: 1px 1px 0 0 var(--purple);
  background-color: var(--pl);
  border-radius: .4em;
  cursor: pointer;

  @media (hover) {
    &:hover {
      box-shadow: 1px 2px 0 0 var(--purple);
      transform: translateY(-1px);
    }
  }
`

export const UL = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
