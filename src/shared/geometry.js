// import React from "react";
// import * as THREE from "three";

// class GeometricCircle extends React.Component {
//   render() {
//     return null;
//   }
//   constructor(props) {
//     super(props);
//     this.renderer = "";
//     this.scene = "";
//     this.camera = "";
//     this.composer = "";
//     this.circle = "";
//     this.skelet = "";
//     this.particle = "";
//   }
//   componentDidMount() {
//     this.init();
//     this.animate();
//     this.onWindowResize();
//   }
//   componentWillUnmount() {
//     this.stopanimate();
//   }

//   init = () => {
//     var renderer, scene, camera, composer, circle, skelet, particle;
//     renderer = this.renderer;
//     scene = this.scene;
//     camera = this.camera;
//     composer = this.composer;
//     circle = this.circle;
//     skelet = this.skelet;
//     particle = this.particle;
//     renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setPixelRatio(
//       window.devicePixelRatio ? window.devicePixelRatio : 1
//     );
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.autoClear = false;
//     renderer.setClearColor(0x000000, 0.0);
//     document.getElementById("canvas").appendChild(renderer.domElement);

//     scene = new THREE.Scene();

//     camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       1,
//       1000
//     );
//     camera.position.z = 330;
//     scene.add(camera);

//     circle = new THREE.Object3D();
//     skelet = new THREE.Object3D();
//     particle = new THREE.Object3D();

//     scene.add(skelet);
//     scene.add(particle);

//     var geometry = new THREE.TetrahedronGeometry(2, 0);
//     var geom = new THREE.IcosahedronGeometry(7, 1);
//     var geom2 = new THREE.IcosahedronGeometry(15, 1);

//     var material = new THREE.MeshPhongMaterial({
//       color: 0xffffff,
//       shading: THREE.FlatShading,
//     });

//     for (var i = 0; i < 1000; i++) {
//       var mesh = new THREE.Mesh(geometry, material);
//       mesh.position
//         .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
//         .normalize();
//       mesh.position.multiplyScalar(90 + Math.random() * 700);
//       mesh.rotation.set(
//         Math.random() * 2,
//         Math.random() * 2,
//         Math.random() * 2
//       );
//       particle.add(mesh);
//     }

//     var mat = new THREE.MeshPhongMaterial({
//       color: 0xffffff,
//       //,shading: THREE.FlatShading
//     });

//     var mat2 = new THREE.MeshPhongMaterial({
//       color: 0xffffff,
//       wireframe: true,
//       side: THREE.DoubleSide,
//     });

//     var planet = new THREE.Mesh(geom, mat);
//     planet.scale.x = planet.scale.y = planet.scale.z = 16;
//     circle.add(planet);

//     var planet2 = new THREE.Mesh(geom2, mat2);
//     planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
//     skelet.add(planet2);

//     var ambientLight = new THREE.AmbientLight(0xffffff);
//     scene.add(ambientLight);

//     this.renderer = renderer;
//     this.scene = scene;
//     this.camera = camera;
//     this.composer = composer;
//     this.circle = circle;
//     this.skelet = skelet;
//     this.particle = particle;

//     window.addEventListener("resize", this.onWindowResize, false);
//   };

//   onWindowResize = () => {
//     this.camera.aspect = window.innerWidth / window.innerHeight;
//     this.camera.updateProjectionMatrix();
//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//   };

//   stopanimate = () => {
//     this.scene.clear();
//   };
//   animate = () => {
//     requestAnimationFrame(this.animate);

//     this.particle.rotation.x += 0.0;
//     this.particle.rotation.y -= 0.0004;
//     this.circle.rotation.x -= 0.0002;
//     this.circle.rotation.y -= 0.0005;
//     this.skelet.rotation.x -= 0.0001;
//     this.skelet.rotation.y += 0.0012;
//     this.renderer.clear();

//     this.renderer.render(this.scene, this.camera);
//   };
// }

// export default GeometricCircle;

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const GeometricCircle = () => {
  const rendererRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const circleRef = useRef();
  const skeletRef = useRef();
  const particleRef = useRef();
  const mountRef = useRef();

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 330;
    scene.add(camera);

    const circle = new THREE.Object3D();
    const skelet = new THREE.Object3D();
    const particle = new THREE.Object3D();

    scene.add(skelet);
    scene.add(particle);

    const geometry = new THREE.TetrahedronGeometry(2, 0);
    const geom = new THREE.IcosahedronGeometry(7, 1);
    const geom2 = new THREE.IcosahedronGeometry(15, 1);

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
    });

    for (let i = 0; i < 1000; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position
        .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .normalize();
      mesh.position.multiplyScalar(90 + Math.random() * 700);
      mesh.rotation.set(
        Math.random() * 2,
        Math.random() * 2,
        Math.random() * 2
      );
      particle.add(mesh);
    }

    const mat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
    });

    const mat2 = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      side: THREE.DoubleSide,
    });

    const planet = new THREE.Mesh(geom, mat);
    planet.scale.x = planet.scale.y = planet.scale.z = 16;
    circle.add(planet);

    const planet2 = new THREE.Mesh(geom2, mat2);
    planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
    skelet.add(planet2);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    rendererRef.current = renderer;
    sceneRef.current = scene;
    cameraRef.current = camera;
    circleRef.current = circle;
    skeletRef.current = skelet;
    particleRef.current = particle;

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    const animate = () => {
      requestAnimationFrame(animate);

      particle.rotation.x += 0.0;
      particle.rotation.y -= 0.0004;
      circle.rotation.x -= 0.0002;
      circle.rotation.y -= 0.0005;
      skelet.rotation.x -= 0.0001;
      skelet.rotation.y += 0.0012;

      renderer.clear();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="canvas" ref={mountRef} />;
};

export default GeometricCircle;
