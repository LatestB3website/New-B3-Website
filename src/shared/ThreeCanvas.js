import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCanvas = () => {
  const containerRef = useRef(null);

  //   const styles = {
  //     body: {
  //       backgroundColor: "red",
  //       backgroundImage: `-webkit-gradient(linear, left top, right top, from(red), to(#f06d06)),
  //         -webkit-linear-gradient(left, red, #f06d06),
  //         -moz-linear-gradient(left, red, #f06d06),
  //         -o-linear-gradient(left, red, #f06d06),
  //         linear-gradient(to right, red, #f06d06)`,
  //       margin: 0,
  //       overflow: "hidden",
  //     },
  //   };
  const styles = {
    body: {
      margin: 0,
      overflow: "hidden",
      //   background: `linear-gradient(114.9deg, rgb(34, 34, 34) 8.3%, rgb(0, 40, 60) 41.6%, rgb(0, 143, 213) 93.4%)`,
    },
  };

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0,
      windowHalfX = window.innerWidth / 2,
      windowHalfY = window.innerHeight / 2;

    let camera, scene, renderer;

    const init = () => {
      const container = containerRef.current;

      scene = new THREE.Scene();

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.z = 100;

      // Particles
      const PI2 = Math.PI * 2;
      const material = new THREE.SpriteMaterial({
        map: new THREE.CanvasTexture(generateSprite()),
        blending: THREE.AdditiveBlending,
      });

      function generateSprite() {
        const canvas = document.createElement("canvas");
        canvas.width = 16;
        canvas.height = 16;
        const context = canvas.getContext("2d");

        // Draw circle
        context.beginPath();
        context.arc(8, 8, 8, 0, PI2, true);
        context.fillStyle = "white";
        context.stroke = "black";
        context.fill();

        return canvas;
      }

      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let i = 0; i < 100; i++) {
        const vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.normalize();
        vertex.multiplyScalar(Math.random() * 10 + 450);
        vertices.push(vertex.x, vertex.y, vertex.z);

        const particle = new THREE.Sprite(material);
        particle.position.set(vertex.x, vertex.y, vertex.z);
        particle.scale.x = particle.scale.y = 10;
        scene.add(particle);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      // Lines
      const line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ color: "#", opacity: 0.5 })
      );
      scene.add(line);

      document.addEventListener("mousemove", onDocumentMouseMove, false);
      document.addEventListener("touchstart", onDocumentTouchStart, false);
      document.addEventListener("touchmove", onDocumentTouchMove, false);

      window.addEventListener("resize", onWindowResize, false);

      animate();
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onDocumentTouchStart = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const onDocumentTouchMove = (event) => {
      if (event.touches.length === 1) {
        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderScene();
    };

    const renderScene = () => {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY + 200 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    init();

    return () => {
      // Clean up the event listeners on component unmount
      document.removeEventListener("mousemove", onDocumentMouseMove, false);
      document.removeEventListener("touchstart", onDocumentTouchStart, false);
      document.removeEventListener("touchmove", onDocumentTouchMove, false);
      window.removeEventListener("resize", onWindowResize, false);
    };
  }, []);

  return (
    <div style={styles.body}>
      <div ref={containerRef} />
    </div>
  );
};

export default ThreeCanvas;
