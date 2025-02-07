import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { Transactions } from './pages/Transactions/index.tsx'
import { GlobalStyle } from './styles/global.ts'
import { TransactionsProvider } from './contexts/TransactionsContext.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}