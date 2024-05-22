import React from "react";
import GeometricCircle from "./geometry";
import ThreeCanvas from "./ThreeCanvas";

function Canvas() {
  return (
    <div
      id="canvas"
      style={{ position: "absolute", backgroundColor: "#0060B5" }}
    >
      {/* <GeometricCircle/> */}
      <ThreeCanvas />
    </div>
  );
}

export default Canvas;
