import { createGlobalStyle, css } from 'styled-components'

import 'normalize.css'
import 'system-font-css'

const globalStyles = css`
  html {
    box-sizing: border-box;
    font-size: calc(12px + .25vw);
  }
  body {
    font-family: system-ui, sans-serif;
    color: #333;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    outline: none;
  }
  a {
    text-decoration: none;
    color: #2460c3;
    &:hover {
      border-bottom: 1px solid #4373c3;
    }
  }
`

const GlobalStyles = createGlobalStyle`${globalStyles}`

export default GlobalStyles

