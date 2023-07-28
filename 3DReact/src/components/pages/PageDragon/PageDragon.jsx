import { useEffect, useState } from "react";
import Dragon from "../../Dragon/Dragon";
import Scene from "../../Scene/Scene";

export default function PageDragon() {
  const [animation, setAnimation] = useState('flying')
  useEffect(()=>{

  }, [animation])
  return (
    <>
      <div style={{position: 'absolute', zIndex: 1,}}>
        <p onClick={()=>{setAnimation('flying')}}>Flying</p>
        <p onClick={()=>{setAnimation('idle')}}>Idle</p>
        <p onClick={()=>{setAnimation('running')}}>Running</p>
        {/* <p>Animation : 4</p>
        <p>Animation : 5</p> */}
      </div>
      <Scene>
        <Dragon anim={animation}/>
      </Scene>
    </>
  )
}
