import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  html{
  --white-200: #f5f5f5;
  --gray-100: rgb(228, 228, 228);
  --gray-500: #999;
  --gray-600: rgb(228, 228, 228);
  --gray-1000: #252b36;
  --blue-100: #596782;
  --text: #333;
  --border: rgba(0,0,0,.125);
  }
`;

export {Colors}