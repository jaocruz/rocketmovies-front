import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-weight: 400;
    font-family: 'Roboto Slab';

    -webkit-font-smoothing: antialiased;
  }

  main {
    margin-top: 115px;
    padding: 0 125px;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.MAIN_BG};
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