import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
}

*:focus {
   outline:none;
  }

body {
  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1{ 
  font-size:32px;
}

p{ 
  font-size:16px;
}

ul,ol{ 
  padding-left:20px;
}

img{ 
  max-width:100%;
  object-fit:contain
}

a{ 
  all:unset;
  cursor:pointer;
  color:black;
  font-weight:bold;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  
}

button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
