"use client"
import Image, { StaticImageData } from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

import { type innerExpe } from '@/src/constants/experienceConstant'

import { useMediaQuery } from '@react-hooks-library/core'

gsap.registerPlugin(ScrollTrigger)


const ExperienceLeft: React.FC<innerExpe> = ({id, title, company_name, icon}) => {
  
  const isMobile = useMediaQuery('(min-width: 1024px)')

  const imageRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {

    const index = imageRef.current.id

    // const y = Number(id) * 100
    // const yInverse = -1 * y - 100
    // const depth = -Number(id) * 400

    const t1 = gsap.timeline(
      {
        scrollTrigger: {
          // trigger: "#experience-left-side",
          trigger: `#${index}`,
          start: isMobile? "-10% 60%" : "-20% 50%",
          end: isMobile? "-80% center" : "bottom 50%",
          scrub: true
        },
      }
    )

    t1.fromTo(`#${index}`, {
      // y,
      y: 80,
      scale: 0.6,
    }, {
      // y: Number(id) === 1? -100 : -200,
      y: 0,
      scale: 1,
    })

    const t3 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: `#${index}`,
          start: "50% 80%",
          scrub: true,
        },
      }
    )



    const cardElements = gsap.utils.toArray<HTMLElement>(imageRef.current.children)

    cardElements.forEach((card, index) => {  
      if(index === 1) {
        t3.fromTo(card, {
          width: "100%",
          height: "100%"
        },{
          width: "0%",
          height: "0%"
        })
      } else {
        t3.fromTo(card, {
          width: "0%",
          height: "0%"
          // backgroundImage: `url(${image})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover"
        }, {
          width: "100%",
          height: "100%"
        })
      }
    })

  }, [])

  return(
    <div className="gallery-item"
      id={`experience-item-left-${id}`}
      ref={imageRef}
      >
        <div className=' image-card'>
          <Image
            src={icon}
            alt={`Gallery image ${id}`}
            className="object-fill w-full h-full"
            fill
          /> 
        </div>
        <div className="px-5 py-10 letter-card back-card text-center z-10 flex flex-col justify-start items-center">
          <h3 className='text-(--color-text) text-[1.2rem] md:text-2xl lg:text-3xl py-2 mb-4'>
            {title}
          </h3>
          <p 
            className='text-[1rem] md:text-[1.2rem] lg:text-2xl text-(--color-muted) py-4'
          >
            {company_name}
          </p>
          <Image
            className='w-30'
            src={"/logo-transparent.png"}
            width={40}
            height={40}
            alt='logo'
          />
        </div>


    </div>
  )
}

export default ExperienceLeft
