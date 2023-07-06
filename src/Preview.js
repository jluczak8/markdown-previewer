import React from "react";

function Preview({ markdown }) {
  return (
    <div className="preview">
      <div className="preview-header">
        <h2>Preview</h2>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
    </div>
  );
}

export default Preview;
