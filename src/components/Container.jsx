import React from "react";
import "../assets/styles/components/Container.css"

function Container({ title, text, bold }) {
  const paragraphs = text.split("\n").map((str, index) => {
    return str == "" ? <br key={index} /> : <p key={index}>{str}</p>;
  });

  return (
    <div>
      <div className="container-white">
        <div className="container-white-box">
          <h3 className="title-color-red">{title}</h3>
          <div className="text-md text-center">{paragraphs}</div>
          <div className="bold">{bold}</div>
        </div>
      </div>
    </div>
  );
}

export default Container;
