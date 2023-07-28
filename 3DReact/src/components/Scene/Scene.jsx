import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Scene({children, camera}) {
  return (
    <div style={{backgroundColor: 'grey', height: "100vh", width:"100%"}}>
      <Canvas camera={camera}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Environment preset='forest'/>
        <OrbitControls/>

        {children}
      </Canvas>
    </div>
  )
}
