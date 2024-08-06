import React from "react";
import "../assets/styles/components/HeroPage.css"

function HeroPage({ title, src }) {
  return (
    <>
      <div className="hero-page">
        <img src={src} alt="hero" />
        <div className="opacity-medium"></div>
        <h1>{title}</h1>
      </div>
    </>
  );
}

export default HeroPage;
