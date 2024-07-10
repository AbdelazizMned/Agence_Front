import React from "react";
import "./css/ImageGrid.css";
import grid1 from "../assets/Images/grid1.jpg";
import grid2 from "../assets/Images/grid2.jpg";
import grid3 from "../assets/Images/grid3.jpg";
import grid4 from "../assets/Images/grid4.jpg";
import grid5 from "../assets/Images/grid5.jpg";
import grid6 from "../assets/Images/grid6.jpg";
import grid7 from "../assets/Images/grid7.jpg";
import grid8 from "../assets/Images/grid8.jpg";

function ImageGrid() {
  return (
    <div className="grid-parent">
      <div className="grid-container">
        <div className="first-Grid">
          <div className="card span-card" style={{backgroundImage:`url(${grid1})`}}></div>
          <div className="card" style={{backgroundImage:`url(${grid2})`}}></div>
          <div className="card" style={{backgroundImage:`url(${grid3})`}}></div>
          <div className="card" style={{backgroundImage:`url(${grid4})`}}></div>
          <div className="card" style={{backgroundImage:`url(${grid5})`}}></div>
        </div>
        <div className="Second-Grid">
          <div className="card row-span" style={{backgroundImage:`url(${grid6})`}}></div>
          <div className="card" style={{backgroundImage:`url(${grid7})`}}></div>
          <div className="card" style={{backgroundImage:`url(${grid8})`}}></div>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
