import React, { useState } from 'react'
import {
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core'

import Routes from './Routes'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#4caf50'
      },
      secondary: {
        main: darkMode ? '#fff' : '#000'
      },
      background: {
        
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Routes setDarkMode={setDarkMode} darkMode={darkMode} />
    </ThemeProvider>
  )
}

export default App;
