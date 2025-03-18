import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import { ThemeProvider } from 'styled-components'
import { THEME } from '../../shared/theme'

test('renders', () => {
  render(
    <ThemeProvider theme={THEME}>
      <Button label="Test" />
    </ThemeProvider>
  )

  const element = screen.getByText(/Test/i)
  expect(element).toBeInTheDocument()
})
