"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import Loader from "../UI/Loader";

const Ball = ({ imgUrl }) => {

  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} intensity={1} />
      
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#fffff" 
          polygonOffset 
          polygonOffsetFactor={-5} 
          flatShading 
        />
        
        <Decal 
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]} 
          flatShading 
          map={decal} 
        />
        
        <Decal 
          position={[0, 0, -1]} 
          rotation={[0, Math.PI, 0]} 
          flatShading 
          map={decal} 
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{ position: [0, 0, 5] }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={4}
          enablePan={false}
        />

        <Ball imgUrl={typeof icon === 'string' ? icon : icon.src} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;