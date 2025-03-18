export interface Theme {
  name: string
  colors: {
    background: string
    default: string
    primary: string
  }
}

export const THEME: Theme = {
  name: 'Default Theme',
  colors: {
    background: '#272727',
    default: '#ffffff',
    primary: '#ff9900',
  },
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
