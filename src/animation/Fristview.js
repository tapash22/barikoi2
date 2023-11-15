import { MeshWobbleMaterial, OrbitControls,useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef, useState } from "react";
import { DirectionalLightHelper } from "three";

// for create cube
// const Cube = ({position, size, color}) =>{
//     const ref =useRef();

//     useFrame((state,delta)=>{
//         ref.current.rotation.x += delta;
//         ref.current.rotation.y += delta * 2;
//         ref.current.position.z = Math.sin(state.clock.elapsedTime) *2
//         // console.log(state);
//     })
//     return (
//         <mesh position={position} ref={ref}>
//             <boxGeometry args={size} />
//             <meshStandardMaterial color={color}  />
//         </mesh>
//         )
// }

// const Sphere = ({ position, size, color }) => {
//   const ref = useRef();
//   const [isHover, setHover] = useState(false);
//   const [isClick, setClick] = useState(false);

//   useFrame((state, delta) => {
//     const speed = isHover ? 1 : 0.2;
//     ref.current.rotation.y += delta * speed;
//   });
//   return (
//     <mesh
//       position={position}
//       ref={ref}
//       onPointerEnter={(event) => (event.stopPropagation(), setHover(true))}
//       onPointerLeave={() => setHover(false)}
//       onClick={()=> setClick(!isClick)}
//       scale={ isClick ? 1.5 :1}
//     >
//       <sphereGeometry args={size} />
//       <meshStandardMaterial color={isHover ? "red" : "yellow"} wireframe />
//     </mesh>
//   );
// };

// const Torus =({position,size,color}) => {
//     const ref =useRef();

//     useFrame((state,delta)=>{
//         ref.current.rotation.x += delta;
//         ref.current.rotation.y += delta * 2;
//         ref.current.position.z = Math.sin(state.clock.elapsedTime) *2

//     })
//     return (
//         <mesh position={position} ref={ref}>
//             <torusGeometry args={size} />
//             <meshStandardMaterial color={color} wireframe />
//         </mesh>
//     )
// }

const Torusknot =({position,size}) => {
    const ref = useRef();

    const {color,radius} = useControls({
      color:"blue",
      radius:{
        value:5,
        max:5,
        min:0,
        step:0.5
      }
    })
    return (
        <mesh position={position} ref={ref}>
            <torusKnotGeometry args={[radius, ...size]} />
            {/* this use for animate  */}
            <MeshWobbleMaterial  factor={5} speed={5} color={color} /> 
            {/* this use for strict view */}
            {/* <meshStandardMaterial color={color}  /> */}
        </mesh>
    )
}

const Sceen = () =>{

  const directionalRef = useRef()

  const {lightColor, lightIntensity} = useControls ({
    lightColor:"white",
    lightIntensity:{
      value:0.5,
      min: 0,
      max:5
    }
  })

  useHelper(directionalRef, DirectionalLightHelper, 0.5, "white")
    return (
        <>
        <directionalLight position={[0, 1, 2]} intensity={lightIntensity} ref={directionalRef} color={lightColor}  />
        <ambientLight />
        {/* <group position={[0,-1,0]}>
        <Cube position={[1,0,0]} size={[1,1,1]} color={"orange"}  />
        <Cube position={[-1,0,0]} size={[1,1,1]} color={"green"}  />
        <Cube position={[-1,2,0]} size={[1,1,1]} color={"blue"}  />
        <Cube position={[1,2,0]} size={[1,1,1]} color={"yellow"}  />
        </group> */}
        {/* <Cube position={[1,0,0]} size={[2,2,2]} color={"red"} /> */}
        {/* <Cube position={[1,2,0]} size={[2,2,1]} color={"yellow"}  />
        <Cube position={[-1,0,0]} size={[2,2,1]} color={"green"}  />
        <Cube position={[-1,2,0]} size={[2,2,1]} color={"blue"}  /> */}
        {/* <Sphere position={[0, 0, 0]} size={[2, 20, 20]} color={"yellow"} />
        <Torus position={[2,0,0]} size={[0.8,0.1,30,30]} color={"blue"}  /> */}
        <Torusknot position={[0,0,0]} size={[0.1,1000,50]} color={"blue"}  />
        <OrbitControls enableZoom={false}  />
        </>
    )
}

function Firstview() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Canvas>
      <Sceen  />
      </Canvas>
    </div>
  );
}

export default Firstview;
