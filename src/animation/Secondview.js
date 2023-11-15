import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
// import Model from './Scene';

import { Suspense } from "react";
import Animatedspear from "./Animatedspear";


function Secondview (){
    return (
        <div className="h-screen w-full background-image ">
                <Canvas className="flex justify-end">
            <OrbitControls enableZoom={false}  />
            <ambientLight intensity={0.5}  />
            <directionalLight position={[-2,1,0]} intensity={1}  />
            <Suspense fallback={null}  />
           <Animatedspear  />
        </Canvas>
        <Canvas className="flex justify-end">
            <OrbitControls enableZoom={false}  />
            <ambientLight intensity={0.5}  />
            <directionalLight position={[-2,1,0]} intensity={1}  />
            <Suspense fallback={null}  />
            <Box  />
        </Canvas>
  
       
        </div>
    )
}

export default Secondview;