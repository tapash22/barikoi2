import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
// import Model from './Scene';

import { Suspense, useRef, useState } from "react";
import Animatedspear from "./Animatedspear";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={2}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.usecolor.mesh}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.usecolor.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.usecolor.rebon} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  );
}

function Secondview() {

    const [rebon, setRebon] = useState("#fff");
    const [mesh, setMesh] = useState("#fff");
    const [sole, setSole] = useState("#fff");
  return (
    <div className="h-screen w-full background-image flex  ">
      <Canvas className="flex justify-end">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 1, 0]} intensity={1} />
        <Suspense fallback={null} />
        <Animatedspear />
      </Canvas>
      <Canvas className="flex justify-end">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 1, 0]} intensity={1} />
        <Suspense fallback={null} />
        <Box />
      </Canvas>
      <div className="block">
        <Canvas className="flex justify-end">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          {/* <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow  /> */}
          {/* <directionalLight position={[-2,1,0]} intensity={1}  /> */}
          <Suspense fallback={null} />
          <Model usecolor={{rebon, mesh, sole}}/>
        </Canvas>
        <div className="py-2 px-2 bg-white flex">
          <div className="block">
            <label className="text-lg font-medium tracking-wider py-2 px-2 text-red-600">
              Rebon
            </label>
            <input type="color" id="rebon" name="rebon" value={rebon}  onChange={(e)=>setRebon(e.target.value)} className="w-16 h-5" />
          </div>
          <div>
          <label className="text-lg font-medium tracking-wider py-2 px-2 text-red-600">
              sole
            </label>
            <input type="color" id="rebon" name="rebon" value={sole}  onChange={(e)=>setSole(e.target.value)} className="w-16 h-5" />
          </div>
          <div>
          <label className="text-lg font-medium tracking-wider py-2 px-2 text-red-600">
              mesh
            </label>
            <input type="color" id="rebon" name="rebon" value={mesh}  onChange={(e)=>setMesh(e.target.value)} className="w-16 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondview;
