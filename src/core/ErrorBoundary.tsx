import React, { Component } from 'react'

const ErrorContent = ({ error, ...props }: any) => (
  <div {...props}>
    <h1>Error</h1>
    <p>{error}</p>
  </div>
)

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorText: 'Something went wrong'
  }
  
  static getDerivedStateFromError(error: string) {
    return { hasError: true, errorText: error }
  }
  
  // @ts-ignore
  componentDidCatch(error: string, errorInfo: string) {
    console.log(error, errorInfo)
  }
  
  render() {
    const { children } = this.props
    const isErrorPage = window.location?.pathname === '/error'
    const is404 = window.location?.pathname === '/404'
    
    if (is404) return <ErrorContent error={'404'} />
    if (isErrorPage || this.state.hasError) return <ErrorContent error={this.state.errorText} />
    return children
  }
}

export default ErrorBoundary as any
