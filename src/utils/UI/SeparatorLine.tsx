"use client"

import React, { useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { useMediaQuery } from '@react-hooks-library/core'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const SeparatorLine = ({
  sectionName, activeId
}: {
  sectionName: string,
  activeId: string
}) => {

  const isMobile = useMediaQuery("max-width: 767px")
  const end = isMobile ? "0% 20%" : "0% 40%"
  const separatorRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    const allSeparator = gsap.utils.toArray(separatorRef.current)

    allSeparator.forEach(() => {
      gsap.from(allSeparator, {
        x: -300,
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: `#${activeId}`,
          start: "top 80%",
          end,
          scrub: true
        }
      })
    })

  }, [])

  return (
    <div className='flex-center-all w-full mt-2 separator-bar z-100'>
      <div className='h-1 rounded-full grow-2'/>
      <h2 className='grow flex-center-all' ref={separatorRef}>
        {sectionName}
      </h2>
      <div className='h-1 rounded-full grow-2'/>
    </div>
  )
}

export default SeparatorLine
