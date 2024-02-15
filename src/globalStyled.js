import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    background: #f2f2f2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1{
    font-size: 40px;
    margin-top: 10px;
  }
`

export default GlobalStyled