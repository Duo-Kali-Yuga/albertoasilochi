"use client"
import React, { useRef } from 'react'
import { type AT } from '@/src/constants/aboutConstant'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import {clsx} from 'clsx'
import { useMediaQuery } from 'react-responsive'



type Label = {
  content: AT
}

gsap.registerPlugin(ScrollTrigger)


const AboutLeft: React.FC<Label> = ({content}) => {

  const isMobile = useMediaQuery({maxWidth: 767})
  const end = isMobile ? "0% 20%" : "20% 40%"

  const divRef = useRef<HTMLDivElement>(null!)
  const {title, descriptionOne, descriptionTwo} = content


  useGSAP(()=>{

    const innerDiv = gsap.utils.toArray<HTMLElement>(divRef.current.children)

    innerDiv.forEach((box)=>{
      gsap.to(box, {
        opacity: 1,
        width: "90%",
        // height: "12.5rem",
        scrollTrigger: {
          trigger: box,
          start: "-100% bottom",
          end: "125% 40%",
          scrub: true
        },
        ease: "power1.inOut",
      })
    })
  }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center mt-10 gap-y-15 md:gap-y-20' ref={divRef} id='about-left-side'>

      <div className={clsx("col-start-1 left-side-left", {
        "sm:col-span-2": true
      })}
      >
        <div className='w-full h-full text-[1rem] md:text-[1.2rem] text-(--color-text) '>
          {title}
        </div>
      </div>
      <div className={clsx("col-start-1 sm:col-start-2 md:col-start-2 left-side-right", {
        "md:col-span-2": true
      })}
      >
        <div className='w-full h-full text-[0.8rem] md:text-[1rem] text-(--color-text) '>
          {descriptionOne}
        </div>
      </div>
      <div className={clsx("col-start-1 justify-self-center left-side-middle", {
        "sm:col-span-2 md:col-span-3": true
      })}
      >
        <div className='w-full h-full text-[0.8rem] md:text-[1rem] text-(--color-text) '>
          {descriptionTwo}
        </div>
      </div>
    </div>
  )
}

export default AboutLeft 
