import React from 'react'
import Scene from '../../Scene/Scene'
import Cube from '../../Cube/Cube'

export default function PageCubes() {
  return (
    <Scene>
        <Cube position={[-1.2, 0, 0]} />
        <Cube position={[1.2, 0, 0]} />
    </Scene>
  )
}
