import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Material } from "three";
function Animatedspear(){

    return (
        <Sphere visible args={[1,100,200]} scale={2} >
            <MeshDistortMaterial color="red" attach="material" distort={0.3} speed={1.5} roughness={0}  />
        </Sphere>
    )

}

export default Animatedspear;