import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {Routes, Route} from 'react-router-dom'
import { LoginPage, DashboardPage, PageNotFound } from './pages'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;