"use client"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { useMediaQuery } from "@react-hooks-library/core"



const Earth = () => {
  const isMobile = useMediaQuery("max-width: 767")

  const scaleAstro = isMobile ? 2.5 : 3.5

  const earth = useGLTF("./planet/scene.gltf")
  return (
    <primitive 
      object = {earth.scene}
      // scale = {2.5}
      scale = {scaleAstro}
      position-y={0}
      rotation-y={0}
      color = {"blue"}
    />
  )
}


const PlanetEarth = () => {

  return (
    <div className="h-full w-full" id="planetEarth">
    <Canvas>
      <Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
          />
        <Earth/>
        {/* <ambientLight color="white" intensity={2}/> */}
        <directionalLight color="white" intensity={100}/>

      </Suspense>
    </Canvas>
    </div>
  )
}

export default PlanetEarth










