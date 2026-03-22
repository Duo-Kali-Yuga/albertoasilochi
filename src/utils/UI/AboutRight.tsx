"use client"
import React, { useLayoutEffect, useRef, Suspense } from 'react'
import Image from 'next/image'
import { type AT } from '@/src/constants/aboutConstant'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Stage, ContactShadows } from '@react-three/drei'
import Loader from "../UI/Loader"
import { useTheme } from '@/src/context/ThemeProvider'



gsap.registerPlugin(ScrollTrigger)


const About = ({overlayRef}) => {

  const cubeRef = useRef()
  const { theme } = useTheme();

  const {camera} = useThree()

  const girl = useGLTF("models/GirlLow.glb")

  useGSAP(() => {
    if (!cubeRef.current) return;

    const scroller = overlayRef.current;

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });

    t1.to(cubeRef.current.scale, {
      x: 1.5,
      y: 1.5,
      z: 1.5,
      ease: "power2.inOut"
    }, 0);

    t1.to(cubeRef.current.rotation, {
      y: Math.PI * 2.23,
      ease: "none"
    }, 0);

    t1.to(cubeRef.current.position, {
      y: -10,
      ease: "power1.inOut"
    }, 0);

    t1.to(camera.position, {
      z: 6,
      y: 2
    }, 0);

  }, { scope: overlayRef, dependencies: [girl] });

  return (
    <>
      {/* <color attach="background" args={[theme === "dark" ? '#0b0b0d' : '#f8f9fa']}/> */}
      {/* <Environment preset={theme === "dark" ? 'night' : 'city'}/> */}
      <ambientLight intensity={theme === "dark" ? 0.2 : 0.5}/>
      <ContactShadows
        opacity={theme === "dark" ? 0.4 : 0.3}
        scale={10}
        blur={2}
        far={4.5}
      />
      <directionalLight position={[10, 10, 5]} intensity={theme === "dark" ? 1 : 1} />
      <OrbitControls enableZoom={false} enableRotate={false}/>
      <group>
        <primitive
          ref = {cubeRef}
          object = {girl.scene}
          scale={2.1}
          position={[0, 0, 0]}
          rotation={[0, 0.8, 0]}
        />
      </group>
      {/* <Stage environment="city" intensity={0.6}>
        <primitive
          ref = {cubeRef}
          object = {girl.scene}
          scale={3.5}
          position={[0, 0, 0]}
          rotation={[0, 0.8, 0]}
        />
      </Stage> */}
    </>
  )
}


const AboutRight: React.FC<AT[]> = (aboutInfo) => {


  const isMobile = useMediaQuery({maxWidth: 767})
  const start = isMobile ? "-20% 20%" : "top 20%"
  const end = isMobile ? "100% 30%" : "bottom 16%"

  const imageRef = useRef<HTMLDivElement>(null!)

  
  const {img, alt, id} = aboutInfo

  // useGSAP(()=>{

  //   const t1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: `#about-group-i-${id}`,
  //       start,
  //       end,
  //       scrub: true,
  //       pin: true
  //     }
  //   })

  //   t1.to(`#about-image-${id}`, {
  //     maskSize: 3000,
  //     maskPosition: "40% 35%",
  //     // maskSize: 600,
  //     // maskPosition: "center",
  //     ease: "power1.in",
  //   })

  // },[])



  return (
    <div className='w-full h-full' id={`about-group-${id}`} ref={imageRef}>

      {/* <div className=' h-80 '
        id={`about-group-i-${id}`}
      >
        <Image src={img} alt={alt}
          className='object-fit h-full masked-img image-about-right relative' id={`about-image-${id}`}
        />
      </div> */}
      <Canvas
        camera={{ position: [5, 0, 5], fov: 75 }}
        gl={{ antialias: true, toneMappingExposure: 1.5 }}
        dpr={[1, 2]}
      >
        <Suspense fallback = {<Loader/>}>
          <About overlayRef={imageRef} />
        </Suspense>

      </Canvas>
    </div>
  )
}

export default AboutRight
