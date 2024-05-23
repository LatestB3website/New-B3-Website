import React from "react";
import GeometricCircle from "./geometry";
import ThreeCanvas from "./ThreeCanvas";
function Canvas() {
  return (
    <div
      id="canvas"
      style={{
        position: "absolute",
        backgroundImage:
          "  linear-gradient(109.5deg, rgb(13, 11, 136) 9.4%, rgb(86, 255, 248) 78.4%)",
      }}
    >
      {/* <GeometricCircle/> */}
      <ThreeCanvas />
    </div>
  );
}

export default Canvas;
