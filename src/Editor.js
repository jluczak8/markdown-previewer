import React from "react";

function Editor({ input, onChange }) {
  return (
    <div className="editor">
      <div className="editor-header">
        <h2>Editor</h2>
      </div>
      <textarea id="editor" onChange={onChange} value={input} />
    </div>
  );
}

export default Editor;
