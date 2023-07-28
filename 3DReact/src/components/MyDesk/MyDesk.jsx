import { useGLTF } from "@react-three/drei";
import Scene from "../Scene/Scene";

export default function MyDesk() {
    const mydesk = useGLTF('../../../public/Models/MyDesk/deskTabliotheque.glb');
    console.log(mydesk);
  return (

    <Scene camera={mydesk.cameras[0]}>
    <group   scale={2}>
        <primitive object={mydesk.scene}/>
    </group>
    </Scene>
  )
}
