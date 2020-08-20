import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/styles'
import { BrowserRouter as Router } from 'react-router-dom'

import ErrorBoundary from './ErrorBoundary'
import Routes from './Routes'
import GlobalStyles from './GlobalStyles'

import { theme } from '@src/ui'

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <GlobalStyles />
          <Router>
            <Routes />
          </Router>
        </StylesProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
