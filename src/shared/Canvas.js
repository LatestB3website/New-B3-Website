import React from 'react'
import GeometricCircle from './geometry'
import ThreeCanvas from './ThreeCanvas'
function Canvas() {
    return (
        <div id="canvas" style={{ position: "absolute", backgroundImage: "  linear-gradient(109.6deg, rgb(0, 182, 255) 11.2%, rgb(102, 51, 153) 91.1%)" }}>
            {/* <GeometricCircle/> */}
            <ThreeCanvas />
        </div>
    )
}

export default Canvas
