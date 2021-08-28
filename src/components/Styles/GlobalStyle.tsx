import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto Slab';
    font-weight: 400;
    
    background-color: cadetblue;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab';
    font-weight: 700;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  ul,
  ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
  }

  address {
    font-style: normal;
  }
  
  .wrapper {
    min-height: 100vh;
    
    overflow: hidden;
  }
`;