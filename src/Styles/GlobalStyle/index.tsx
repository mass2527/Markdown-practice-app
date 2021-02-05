import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin:0; 
}

*:focus {
   outline:none;
}

*::-webkit-scrollbar {
  width: 13px;
  height:13px;
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
}

body {
  font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x:hidden;
}

h1{ 
  font-size:32px;
}

main h1{
  border-bottom:1px solid lightgray;
  padding-bottom:5px;
}

p{ 
  font-size:16px;
}

aside p{
  max-width:500px;
}

section p,ul,ol,h1,h2,h3,h4,h5,h6,hr,table{
  margin-bottom:18px;
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
  color:#0366d6;
  font-weight:bold; 
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace; 
}

button {
  cursor: pointer;
}

table {
  border:1px solid lightgray;
}

th,td {
  border:1px solid lightgray;
  padding:5px;
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

.react-codemirror2{
  min-height:100px;
  height:100%;
}

.CodeMirror {
  height:100%;
}

blockquote{ 
  background-color: rgba(255,229,100,0.3);
  border-left: 18px solid #ffe564;
  padding: 20px 45px 20px 26px;
  margin:5px 0px;
}

pre code{
  background-color: #f2f2f2;
  padding:20px;
  margin:10px 0px;
  display: block;
}

`;

export default GlobalStyle;
