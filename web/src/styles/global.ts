import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #323238;
  }

  body, input, textarea, button, span {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`;
