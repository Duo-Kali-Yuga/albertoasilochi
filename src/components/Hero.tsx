"use client"

import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useMediaQuery } from '@react-hooks-library/core'
import FigureCanvas from "../utils/3DModels/Figure"
import { useLang } from '../context/LangProvider'
import { greeting } from '../constants/heroConstant'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Hero = () => {

  const isMobile = useMediaQuery("(max-width: 767px)")
  const start = isMobile ? "top top" : "top top"
  const end = isMobile ? "60% 40%" : "bottom 20%"
  const y = isMobile ? "45vh" : "42vh"
  const [isHover, setIsHover] = useState<boolean>(false)

  const {lang} = useLang()

  if (lang !== "es" &&  lang !== "en" && lang !== "zh") {
    throw new Error("Language Problem")
  }

  useGSAP(()=>{

    const splitTxt = SplitText.create("#animatedText", {type: "chars"})


    splitTxt.chars.forEach((char) => {
      char.classList.add("image-fill-text") 
      char.classList.add("fill-text") 
    })

    gsap.fromTo(splitTxt.chars, {
      opacity: 0,
      duration: 0.5,
      stagger: {
        amount: 0.4
      },
      ease: "inline"
    },{
      opacity: 1
    })

    gsap.to(splitTxt.chars, {
      scale: 0.5,
      y,
      stagger: 0.8,
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#hero",
        start,
        end,
        scrub: true
      }
    })
  }, [])

  return (
    <section className='h-screen flex justify-end items-center overflow-x-hidden flex-col ' id='hero'>
      <div className='h-[50%] flex items-end'>
        <div className='relative' id='hero-body'>
          <div className='font-bold  z-20 image-fill-text' id='animatedText'>
            Alberto
          </div>
        </div>
      </div>
      <div className='h-[40%] relative text-center rounded-t-4xl border-4 border-b-0 border-background'
        onMouseMove={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {
          isHover ? 
            (<motion.span className='absolute text-2xl  rounded-[10px] left-[50%] translate-[-50%] py-1 px-2 transition-all duration-500 z-300 bg-linear-to-br from-brand via-(--color-accent-glow) to-(--color-text)'
              initial = {{
                y: 20,
                x: 0
              }}
              animate = {{
                y: [-20, 20]
              }}
              transition={{
                ease: "linear",
                duration: 4,
                repeat: Infinity
              }}

            >{greeting[lang]}</motion.span>): null
        }
        <FigureCanvas/>
      </div>
    </section>
  )
}

export default Hero
