# Markdown - Everywhere <img src="./public/favicon.ico" width="25">

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png" width="100">
</center>

<br/>

### What is Markdown?

Markdown is a lightweight markup language for creating formatted text using a plain-text editor created by John Gruber and Aaron Swartz in 2004.

### Who are using Markdown?

Most of developers and even non-developers are using Markdown to explain their project or to record something important in their digital note since they are pretty easy to learn.

### Why did i make this project?

I thought that it's gonna be great if i deploy this app and let people learn markdown since it's widely used and pretty easy to learn.

### What did i use here?

- library

1. marked (preview)
2. react-codemirror2 (code editor)

- localStorage

  i used local storage so that code is not cleared after refreshing

- react-router

  every time user changes topic, route is changed and only aside component is rerendered so that code and preview section to be remained. Thought this would be great for user experience. If they forget something they can easily go back to any topic without code deleting.
