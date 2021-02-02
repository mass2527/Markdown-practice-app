import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  
}

*:focus {
   outline:none;
}

*::-webkit-scrollbar {
  width: 5px;
  height:13px;
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
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

.material{
  background-color:#263238 !important; ;
  color:white !important;
}

.material-ocean{
  background-color:#0f111a !important;
  color:#8f93a2 !important;
}

.cobalt{
  background-color:#002240 !important; 
  color:white !important;
}

.duotone-light{
  background-color:#faf8f5 !important;
  color:#b29762 !important; 
}

.dracula{
  background-color:#282a36 !important;
  color:#f8f8f2 !important;
}

.blackboard{
  background-color:#0c1021 !important;
  color:#f8f8f8 !important;
}

.paraiso-light{
  background-color:#e7e9db !important;
  color:#41323f !important;
}

`;

export default GlobalStyle;
