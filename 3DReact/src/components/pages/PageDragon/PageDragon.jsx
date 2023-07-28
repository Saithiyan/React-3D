import { useEffect, useState } from "react";
import Dragon from "../../Dragon/Dragon";
import Scene from "../../Scene/Scene";

export default function PageDragon() {
  const [animation, setAnimation] = useState(1)
  useEffect(()=>{

  }, [animation])
  return (
    <>
      <div style={{position: 'absolute', zIndex: 1,}}>
        <p onClick={()=>{setAnimation(1)}}>Flying</p>
        <p onClick={()=>{setAnimation(2)}}>Idle</p>
        <p onClick={()=>{setAnimation(3)}}>Running</p>
        {/* <p>Animation : 4</p>
        <p>Animation : 5</p> */}
      </div>
      <Scene>
        <Dragon anim={animation}/>
      </Scene>
    </>
  )
}
