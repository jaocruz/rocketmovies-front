import React from 'react'
import ReactDOM from 'react-dom/client'

import { MoviePreview } from './pages/moviePreview'
import { Home } from './pages/home'

import { Review } from './components/review'

import theme from './styles/theme'

import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>,
)
