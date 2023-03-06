import { createGlobalStyle } from "styled-components"

const GlobalStyle= createGlobalStyle `
   
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box; 
   }

   :root {
       --primary-color: #000;
       --secondary-color: #f8f9fb;
    }

`

export default GlobalStyle 