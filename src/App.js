import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import { marked } from "marked";
import "./App.css";

const defaultState = `# Welcome to my Markdown Previewer App!

## Made by Jakub Łuczak

[for freeCodeCamp project](https://www.freecodecamp.org/)

\`console.log('Hello guys!');\`

\`\`\`
function test() {
  console.log('Give it a try.');
}
\`\`\`

- [my freeCodeCamp profile](https://www.freecodecamp.org/jluczak8)
- [my GitHub profile](https://github.com/jluczak8)

> My profiles above ^

![freeCodeCamp logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**Feel free to test this app!**
`;

function App() {
  const [input, setInput] = useState(defaultState);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const markdown = marked(input, { breaks: true });

  return (
    <div className="App">
      <Editor input={input} onChange={handleChange} />
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;
