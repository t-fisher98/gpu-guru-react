import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Colors } from './styles/Colors';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Colors />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
