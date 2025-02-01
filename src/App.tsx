
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
import { createTheme } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#7752FE',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>

    <Layout>
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
        </Routes>
      </Layout>
    </ThemeProvider>
   
    
  )
}

export default App
