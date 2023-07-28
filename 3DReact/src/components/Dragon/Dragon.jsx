import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import { Texture, TextureLoader } from "three";

export default function Dragon({anim}) {
  const mondelDragon = useGLTF("../../../public/Models/MyDragon/mydragon.glb");
  const { actions } = useAnimations(
    mondelDragon.animations,
    mondelDragon.scene
  );
  console.log(mondelDragon, actions);
  
  let x = 0, y = 0, z = 0;
  switch (anim){
    case 'flying':
        x = 0;
        y = -6;
        z = 0;
        break;
    case 'running':
    case 'idle':
        x = 0;
        y = 0;
        z = 0;
        break;
    default:
        x = 0;
        y = -6;
        z = 0;
        break;
  }

  function stopAllAnimation(){
    Object.keys(actions).map((e)=>{
        actions[e].stop();
    })
  }
  useEffect(() => {
    stopAllAnimation();
    actions[anim].play();
    // actions.RoutNode.0.play();
    
  }, [anim,actions]);
  return (
    <group scale={1.5} position={[x, y, z]}>
        <primitive object={mondelDragon.scene} />
    </group>
  );
}
