import React from 'react'
import ReactDOM from 'react-dom'
import App from './core/App'

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
