import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MarketingApp from './components/MarketingApp'
import Header from './components/Header';

const theme = createTheme({
  // Add your theme configuration here
});

const customClassName = 'ma-custom'; // Customize the class name prefix here

const App = () => {
  return (
    <div className={customClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <hr />
          <MarketingApp />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App