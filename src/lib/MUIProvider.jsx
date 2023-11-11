'use client'

import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux'
function MUIProvider({ children}) {
    // Get the darkMode value from the Redux store
    const { darkMode } = useSelector(state => state.site)

    // Create a theme with the mode set based on the darkMode value
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
            {children}
      </ThemeProvider>
  )
}

export default MUIProvider