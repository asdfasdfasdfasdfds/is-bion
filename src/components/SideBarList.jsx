import React from "react";
import "../assets/styles/components/SideBarList.css"

function SideBarList({ SideBarListContents }) {
  return (
    <>
      <div className="side-bar-list">
        <ul>
          {SideBarListContents && SideBarListContents.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideBarList;
