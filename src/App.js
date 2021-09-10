import Routes from './routes'

import Theme from './styles/theme'
import GlobalStyles from './styles/globalStyle'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
