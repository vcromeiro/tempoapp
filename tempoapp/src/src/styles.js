import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
   *{
      margin:0;
      padding:0;
      outline:0;
      box-sizing: border-box;
   }
   body{
      font-family: Arial, Helvetica, sans-serif;
      /* background: #FAFAFA; */
      /* da552f75 */
      background: #B7CCE3;
      color:#333;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
   }
   a { color: #069; text-decoration: none}
`;

export default GlobalStyle;