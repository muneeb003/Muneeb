import React, { useEffect } from "react";
import "./fluid.css";
import { initFluid } from "./script.js";
function FluidCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("fluid");
    if (canvas) {
      initFluid(canvas); // call the WebGL logic
    }
  }, []);

  return (
    <>
      {/* <h1 className="intro">Click & Drag to Create Effect</h1> */}
      <canvas id="fluid"></canvas>
    </>
  );
}

export default FluidCanvas;
