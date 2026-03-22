import { Suspense, useEffect, useState } from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import { useMediaQuery } from "@react-hooks-library/core"
import Loader from "../UI/Loader"
import { MathUtils, Vector3 } from "three"


const Figure = ({ isMobile }) => {

  const kuribo = useGLTF('linkuriboh/scene.gltf')

  const waypoints = [
    [MathUtils.randFloatSpread(6), MathUtils.randFloatSpread(6), MathUtils.randFloatSpread(6)],
    [MathUtils.randFloatSpread(6), MathUtils.randFloatSpread(6), MathUtils.randFloatSpread(6)],
    [MathUtils.randFloatSpread(6), MathUtils.randFloatSpread(6), MathUtils.randFloatSpread(6)]
  ]

  const [initialPosition, setInitialPosition] = useState([0, 0, 0])

  const [targetPosition, setTargetPosition] = useState(waypoints[0])

  const randomMovement = () => {
    return [
      MathUtils.randFloatSpread(1),
      MathUtils.randFloatSpread(1),
      MathUtils.randFloatSpread(2)
    ]
  }

  const lerpPosition = (start, target, alpha = 0.05) => {
    return start.map((value, index) => {
      return MathUtils.lerp(value, target[index], alpha)
    })
  };

  useFrame(() => {

    const newPosition = lerpPosition(initialPosition, targetPosition, 0.1)
    setInitialPosition(newPosition)

    if (new Vector3(...newPosition).distanceTo(new Vector3(...targetPosition)) < 0.1) {
      const nextWaypoint = waypoints[Math.floor(Math.random() * waypoints.length)]
      setTargetPosition(nextWaypoint)
    }
  });

  // useFrame(() => {
  //   const randomOffset = randomMovement()

  //   setInitialPosition((prevPosition) => {
  //     return [
  //       prevPosition[0] + randomOffset[0], 
  //       prevPosition[1] + randomOffset[1], 
  //       0
  //     ]
  //   })
  // })


  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black"/>
      <pointLight intensity={8}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.40}
        penumbra={40}
        intensity={8}
        castShadow
        shadow-mapSize={1024}/>
        <primitive
        object = {kuribo.scene}
        scale={isMobile ? 3.5 : 9.5}
        position={isMobile ? [0, 0, 10] : initialPosition}
        rotation={[0.01, 1.5, -0.1]}
      />
    </mesh>
  )
}

const FigureCanvas = () => {

  const isMobile = useMediaQuery("max-width: 767px")

  return (<Canvas 
    frameloop="demand"
    shadows
    camera={{position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<Loader/>}>

        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        ></OrbitControls>
        <Figure isMobile = {isMobile}/>
      </Suspense>

      <Preload all/>

  </Canvas>)
}

export default FigureCanvas