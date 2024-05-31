import React from "react";
import GeometricCircle from "./geometry";
import ThreeCanvas from "./ThreeCanvas";
function Canvas() {
  return (
    <div
      id="canvas"
      style={{
        position: "absolute",
        backgroundColor: "rgb(0, 96, 181)"
      }}
    >
      {/* <GeometricCircle/> */}
      <ThreeCanvas />
    </div>
  );
}

export default Canvas;
