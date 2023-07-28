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
  useEffect(() => {
    switch (anim) {
        case 1:
            actions.flying.play();
            break;
        case 2:
            actions.idle.play();
            break;
        case 3:
            actions.running.play();
            break;
        default:
            actions.flying.play();
            break;
    }
    // actions.RoutNode.0.play();
    
  }, [anim,actions]);
  return (
    <group scale={1.5} position={[0, -6, 0]}>
    <primitive object={mondelDragon.scene} />
    </group>
  );
}
