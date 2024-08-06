import React from "react";
import "../assets/styles/components/BlockLoading.css"

const BlockLoading = () => {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BlockLoading;
