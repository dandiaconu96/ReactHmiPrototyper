import { render } from '@testing-library/react'
import { Display14 } from './Display14'
import { THEME } from '../../shared/theme'
import { ThemeProvider } from 'styled-components'

test('renders', () => {
  render(
    <ThemeProvider theme={THEME}>
      <Display14 />
    </ThemeProvider>
  )
})
