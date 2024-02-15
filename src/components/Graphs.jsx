import React from "react";
import "../App.css";
import { Slideshow } from "../exports";

export default function Graphs() {
  return (
    <div className="graphs">
      <div className="graph-heading">
        <h1>Market Price Index</h1>
        </div>
        <div className="graph-wrapper">
          <Slideshow />     
      </div>
    </div>
  );
}
