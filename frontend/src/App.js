import React from 'react';
import Data from './pages/Data';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultTheme from './DefaultTheme';
import Home from './pages/Home';

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
    <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/data' element={<Data />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;