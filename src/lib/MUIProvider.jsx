'use client'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux'
function MUIProvider({ children}) {
    const { darkMode } = useSelector(state => state.site)
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