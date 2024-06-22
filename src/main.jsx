import React from 'react'
import ReactDOM from 'react-dom/client'

import { CreateMovie } from './pages/createMovie'

import theme from './styles/theme'

import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <CreateMovie/>
    </ThemeProvider>
  </React.StrictMode>,
)
