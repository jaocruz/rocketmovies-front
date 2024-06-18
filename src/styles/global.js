import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  main {
    margin-top: 115px;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.MAIN_BG};
  }

  body, a, button, input {
    font-family: 'Roboto Slab';
    letter-spacing: 0.5px;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }
`;