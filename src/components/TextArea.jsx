import React from "react";
import "../assets/styles/components/TextArea.css"

function TextArea({ ...props }) {
  return (
    <>
      <textarea {...props} className="message"></textarea>
    </>
  );
}

export default TextArea;
