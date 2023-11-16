import React from 'react';
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three'; // Import from 'three' instead of 'three/src/loaders/TextureLoader'
// import texture from '../assets/text.jpg';

function Box() {
  // const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh rotation={[90, 0, 20]}>
      {/* <boxBufferGeometry attach="geometry" args={[3, 3, 3]} /> */}
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material"  />
    </mesh>
  );
}

export default Box;
