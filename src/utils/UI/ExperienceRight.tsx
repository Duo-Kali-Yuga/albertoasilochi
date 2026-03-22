"use client"
import Image, { StaticImageData } from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion"
import { type innerExpe } from '@/src/constants/experienceConstant'
import { useTheme } from '@/src/context/ThemeProvider'


gsap.registerPlugin(ScrollTrigger)

const ExperienceRight: React.FC<innerExpe> = ({id, title, company_name, icon, iconsBg, date, points}) => {

  const {theme} = useTheme()

//  const imageRef = useRef<HTMLDivElement>(null!)

//   useGSAP(() => {

//     const index = imageRef.current.id

//     const y = Number(id) * 100
//     const yInverse = -1 * y - 100
//     const depth = -Number(id) * 400

//     const t1 = gsap.timeline(
//       {
//         scrollTrigger: {
//           // trigger: `#${index}`,
//           trigger: "#passion-right-side",
//           start: "-10% 60%",
//           // end: "+=200",
//           end: "bottom 40%",
//           scrub: true,
//         },
//       }
//     )

//     t1.fromTo(`#${index}`, {
//       y,
//       scale: 0.6,
//     }, {
//       y: Number(id) === 1? -100 : -200,
//       scale: 1,
//     })

//     const t2 = gsap.timeline(
//       {
        
//         scrollTrigger: {
//           trigger: `#${index}`,
//           start: "-10% 80%",
//           // end: "+=200",
//           end: "80% 40%",
//           scrub: true,
//         },
//       }
//     )

//     t2.fromTo(`#${index}`, {
//       opacity: 0.6,
//       rotateY: "0deg",
//       backfaceVisibility: "none"
//     }, {
//       rotateY: "160deg",
//       scale: 1,
//     })

//     const t3 = gsap.timeline(
//       {
//         scrollTrigger: {
//           trigger: `#${index}`,
//           // start: "55% 60%",
//           start: "50% 80%",
//           // end: "80% 60%",
//           // end: "+=25",
//           scrub: true
//         },
//       }
//     )

//     const cardElements = gsap.utils.toArray<HTMLElement>(imageRef.current.children)

//     cardElements.forEach((card, index) => {  
//       if(index === 0) {
//         t3.fromTo(card, {
//           display: "none",
//         },{
//           display: "block",
//         })
//       } else {
//         t3.fromTo(card, {
//           display: "flex",
//         }, {
//           display: "none",
//         })
//       }
//     })


//   }, [])

  return(
    <Tilt 
      className="gallery-item"
      >
        <motion.div className='h-full w-full '
          initial={{
            opacity: 0,
            rotateY: 180
          }}
          whileInView={{
            opacity: 1,
            rotateY: 0
          }}
          transition={{
            duration: 0.8,
            ease: "linear",
          }}
        >
          <Image
            src={icon}
            alt={`Gallery image ${id}`}
            className="object-fill w-full h-full back-card opacity-40 bg-brand"
            fill
          />
          <Tilt
            className={clsx(" p-5 rounded-2xl w-full", theme !== 'dark' ? "bg-white/70" : "bg-brand/20")}>
  
              <div className="relative w-full sm:inline-block hidden h-20.5 lg:h-30">
                <Image 
                  src={icon}
                  alt={`Gallery image ${id}`}
                  className="w-full h-full m-auto object-cover rounded-2xl "/>
  
                {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center
                        items-center cursor-pointer"
                      >
                        <img src={github}
                        alt = "github"
                        className="w-1/2 h-1/2 object-contain"/>
                  </div>
                </div> */}
              </div>
  
  
              <div className="">
                <h3 className="text-(--color-text) font-bold text-[0.9rem] md:text-[1.2rem] lg:text-2xl">{title}</h3>
                <p className="text-(--color-muted) mt-2 text-secondary text-[0.6rem] md:text-[0.8rem] lg:text-[1rem]">{company_name}</p>
                <p className="text-(--color-muted) mt-2 text-secondary text-[0.5rem] md:text-[0.7rem]">{date}</p>
              </div>
              <ul className="sm:mt-2 mt-4 ml-2 sm:space-y-2 space-y-4 list-none">

                {points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-(--color-text) text-[0.7rem] md:text-[1.1rem] tracking-wider line-clamp-2 border-l rounded-full border-r pl-2 py-0.5 shadow-(--shadow-soft)">
                      {point}
                    </li>
                ))}
              </ul>
          </Tilt>
        </motion.div>
    </Tilt>
  )
}

export default ExperienceRight


