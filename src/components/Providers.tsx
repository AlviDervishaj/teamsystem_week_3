import { StrictMode } from 'react'
import { ReactNode } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StrictMode>
      <ThemeProvider theme={darkTheme}>
        <ScopedCssBaseline />
        <BrowserRouter>
          <Routes>
            {children}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  )
}
