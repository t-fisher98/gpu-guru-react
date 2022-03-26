import React from 'react';
import {Routes, Route} from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react';
import { LoginPage, DashboardPage, PageNotFound } from './pages'
import { AllProductPanel, AddProductPanel, EditProductPanel} from 'components/panels'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}>
			<Route index element={<AllProductPanel title="Product Listings" />}/>
			<Route path="add" element={<AddProductPanel title="Add Product" />}/>
			<Route path="edit" element={<EditProductPanel title="Edit Product" />}/>
		</Route>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;