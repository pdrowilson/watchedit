import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    background: #1c1d21;
    color: #dddddd;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font: 400 16px 'Poppins', sans-serif;
  }
  #root {
    min-height: 100vh;
    display:flex;
    flex-direction: column;
  }
`

export default GlobalStyles
