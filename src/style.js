import { createGlobalStyle } from "styled-components"

const GlobalStyle= createGlobalStyle `
   
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box; 
   }

   :root {
       --primary-color: #673AE7;
       --secondary-color: #b5b5b5;
    }

`

export default GlobalStyle 