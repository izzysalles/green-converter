import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html, body, #root {
    margin: 0;
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body {
    background: #FFFFFF;
  }

  h1, p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;

    &:hover {
        opacity: 0.8;
      }
  }
`;