import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cube from './components/Cube/Cube'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Dragon from './components/Dragon/Dragon'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageDragon from './components/pages/PageDragon/PageDragon'
import PageCubes from './components/pages/PageCubes/PageCubes'
import PageMyDesk from './components/pages/PageMyDesk/PageMyDesk'
import Header from './components/Header/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/cubes' element={<PageCubes/>}/>
        <Route path="/dragon" element={<PageDragon/>}/>
        <Route path='/mydesk' element={<PageMyDesk/>}/>
      </Routes>
    </BrowserRouter>
  )
}
{/* <div style={{backgroundColor: 'white', height: "100vh", width:"100%"}}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Environment preset='forest'/>
        <OrbitControls />

        <Cube position={[-1.2, 0, 0]} />
        <Cube position={[1.2, 0, 0]} />
        {/* <Dragon/> */}
    //   </Canvas>
    // </div> */}

