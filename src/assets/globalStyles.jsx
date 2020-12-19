import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
  }

  body {
    color: '#1F1F1D'
    backgound-color: '#F2F1E4';
    overflow: hidden;
  }
  
  #root {
    height: 100vh;
  }
`;