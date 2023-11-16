// src/components/ModelViewer.js
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/';

const ModelViewer = () => {
  const gltfRef = useRef();

  const onModelLoad = (gltf) => {
    gltfRef.current = gltf.scene;
  };

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={gltfRef.current} />
      <GLTFLoader onLoad={onModelLoad} url="../assets//scene.gltf" />
      {gltfRef.current && <primitive object={gltfRef.current} />}
    </Canvas>
  );
};

export default ModelViewer;
