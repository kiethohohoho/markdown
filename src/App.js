import React from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

function Markdown() {
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  return (
    <MdEditor
      style={{ height: "500px" }}
      renderHTML={(text) => mdParser.render(text)}
    />
  );
}
export default Markdown;
