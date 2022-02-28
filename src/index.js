import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Colors } from './styles/Colors';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Colors />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
