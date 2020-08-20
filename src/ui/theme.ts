const theme = {
  unit: 'rem',
  fontFamily: 'Source sans',
  fontSize: {
    text: '1rem',
    sub: '0.8rem',
    heading1: 'calc(1.625rem + 1.6vw)',
    heading2: 'calc(1.375rem + 1.5vw)',
    heading3: 'calc(1.25rem + 1vw)',
  },
  color: {
    base: '#383855',
    text: '#333',
    primary: '#195a63',
    secondary: '#f50057',
    disable: '#cccccc',
    link: '#2460c3',
    white: '#ffffff',
    red: '#c13636',
    green: '#6a9e6b',
    back: '#E8E9E8',
    gray: 'rgba(0,0,0,0.2)',
    darkGray: 'rgba(0,0,0,0.6)'
  },
  fonts: {
  
  },
  space(...args: any[]) {
    const result = (args.length ? [...args] : [1]).reduce((str, curr) => `${str} ${curr}rem`, '')
    return result
  },
  css: {
    centered: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);',
    transition: 'all 300ms ease-in-out;',
  }
}

export default theme
