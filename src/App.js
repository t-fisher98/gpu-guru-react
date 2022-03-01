import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashBoardPage from "./pages/DashboardPage"

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashBoardPage/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;