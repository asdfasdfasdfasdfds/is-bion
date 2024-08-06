import React from "react";
import Button from "./Button";
import "../assets/styles/components/Hero.css"

function Hero({ title, text, button, src, href }) {
  return (
    <div>
      <div className="Hero">
        <img src={src} alt="" />
        <div className="opacity-medium"></div>
        <div className="Hero-box">
          <h3>{title}</h3>
          <div className="text-md text-color-white text-center">{text}</div>
          <Button href={href} button={button} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
