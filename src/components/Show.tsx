// "use client"

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { projectsData, ProjectType } from '../constants/projectsConstant'

// interface ProjectSectionProps {
//   lang: 'en' | 'es' | 'zh';
// }

// const ProjectSection: React.FC<ProjectSectionProps> = ({ lang }) => {
//   // Fallback to English if the language key doesn't exist
//   const projects = projectsData[lang] || projectsData['en'];

//   return (
//     <section className="relative w-full py-20 px-6">
//       <div className="max-w-6xl mx-auto space-y-24">
//         {projects.map((project: ProjectType, index: number) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className={`flex flex-col md:flex-row gap-10 p-8 rounded-2xl sticky ${project.sectionClass}`}
//           >
//             {/* Text Content */}
//             <div className="flex-1 space-y-4">
//               <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
//               <p className="text-lg opacity-80 leading-relaxed">
//                 {project.description}
//               </p>

//               {/* Tech Stack Tags */}
//               <div className="flex flex-wrap gap-2 pt-2">
//                 {project.technologies.map((tech) => (
//                   <span 
//                     key={tech} 
//                     className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-md rounded-full border border-white/20"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Features List */}
//               <ul className="space-y-2 pt-4">
//                 {project.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2 text-sm opacity-70">
//                     <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               <div className="pt-6">
//                 <a 
//                   href={project.liveLink}
//                   className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg font-semibold"
//                 >
//                   {lang === 'zh' ? '查看项目' : lang === 'es' ? 'Ver Proyecto' : 'View Project'}
//                 </a>
//               </div>
//             </div>

//             {/* Image Preview */}
//             <div className="flex-1 relative min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
//               {/* {project.projectImages[0] && (
//                 <Image
//                   src={project.projectImages[0]}
//                   alt={project.title}
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-700"
//                 />
//               )} */}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;

// // Scene.js
// import React, { useRef, useLayoutEffect } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register GSAP Plugin
// gsap.registerPlugin(ScrollTrigger);

// // 3D Experience Logic (Must be inside <Canvas>)
// function Experience({ overlayRef }) {
//   const cubeRef = useRef();
//   const { scene, camera } = useThree();

//   // Load a model (Replace with your Blender model path)
//   // const { scene: myModel } = useGLTF('/path/to/your/model.glb');

//   useLayoutEffect(() => {
//     // 1. Get the scrollable container from App.js
//     const scroller = overlayRef.current;

//     // 2. Set up the GSAP ScrollTrigger
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: scroller,
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: 1, // Smooth scrolling transition
//         immediateRender: false,
//       },
//     });

//     // 3. Define the animations based on scroll
//     // Animation 1: Move the cube/model across the screen
//     tl.to(cubeRef.current.position, { x: 2, y: 1 }, 0);
//     // Animation 2: Rotate the camera
//     tl.to(camera.position, { z: 3, x: -1 }, 0);

//   }, [overlayRef, camera.position]);

//   return (
//     <>
//       <color attach="background" args={['#1a1a1a']} />
//       <Environment preset="city" />
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />

//       {/* OrbitControls (Disabled or restricted during scroll) */}
//       <OrbitControls enableZoom={false} />

//       {/* Replace this box with your actual Blender model <primitive object={myModel} /> */}
//       <mesh ref={cubeRef} position={[0, 0, 0]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color="mediumpurple" />
//       </mesh>
//     </>
//   );
// }

// // Canvas Container
// function Scene({ overlayRef }) {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 5], fov: 75 }}
//       gl={{ antialias: true, toneMappingExposure: 1.5 }}
//       dpr={[1, 2]} // Optimize for high DPI screens
//     >
//       <Experience overlayRef={overlayRef} />
//     </Canvas>
//   );
// }

// export default Scene;


// import { useState, useEffect } from 'react';

// export const useThemeDetector = () => {
//   const [theme, setTheme] = useState('dark'); // Default to dark

//   useEffect(() => {
//     // 1. Function to update state based on DOM attribute
//     const updateTheme = () => {
//       const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
//       setTheme(currentTheme);
//     };

//     // 2. Initial check
//     updateTheme();

//     // 3. Observe changes to the 'data-theme' attribute
//     const observer = new MutationObserver(updateTheme);
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ['data-theme'],
//     });

//     return () => observer.disconnect();
//   }, []);

//   return theme;
// };


// import React, { useRef, useState } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { Float, useCursor, Text } from '@react-three/drei'
// import gsap from 'gsap'

// const ThemeAstro = ({ currentTheme, toggleTheme }) => {
//   const meshRef = useRef()
//   const [hovered, setHovered] = useState(false)
  
//   // Changes cursor to pointer on hover
//   useCursor(hovered)

//   const handleClick = () => {
//     // 1. Animate the rotation using GSAP for a smooth "flip"
//     const targetRotation = currentTheme === 'dark' ? 0 : Math.PI
    
//     gsap.to(meshRef.current.rotation, {
//       y: targetRotation,
//       duration: 0.8,
//       ease: "back.out(1.7)"
//     })

//     // 2. Trigger the actual theme change logic
//     toggleTheme()
//   }

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
//       <group 
//         ref={meshRef} 
//         onClick={handleClick}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//         rotation={[0, currentTheme === 'dark' ? Math.PI : 0, 0]}
//       >
//         {/* THE SUN (Front Side) */}
//         <mesh position={[0, 0, 0.5]}>
//           <sphereGeometry args={[0.5, 32, 32]} />
//           <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1} />
//         </mesh>

//         {/* THE MOON (Back Side) */}
//         <mesh position={[0, 0, -0.5]}>
//           <sphereGeometry args={[0.4, 32, 32]} />
//           <meshStandardMaterial color="#C0C0C0" roughness={0.8} />
//         </mesh>

//         {/* Optional: Add labels that flip with the object */}
//         <Text position={[0, 0.8, 0]} fontSize={0.2} color="white">
//           {currentTheme === 'dark' ? 'MOON' : 'SUN'}
//         </Text>
//       </group>
//     </Float>
//   )
// }

// const ThemeToggleContainer = () => {
//   const theme = useThemeDetector() // Using the hook we made earlier

//   const toggleTheme = () => {
//     const nextTheme = theme === 'dark' ? 'light' : 'dark'
//     document.documentElement.setAttribute('data-theme', nextTheme)
//     // Optional: Save to localStorage here
//   }

//   return (
//     <div className="fixed top-5 right-5 w-32 h-32 z-50">
//       <Canvas camera={{ position: [0, 0, 3] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <ThemeAstro currentTheme={theme} toggleTheme={toggleTheme} />
//       </Canvas>
//     </div>
//   )
// }