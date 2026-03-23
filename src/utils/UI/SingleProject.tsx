"use client"
import React, { useRef } from 'react'
import Image from 'next/image';
import Tilt from 'react-parallax-tilt'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { projectsData, projectsContent, type ProjectType } from '@/src/constants/projectsConstant';
import { useLang } from '@/src/context/LangProvider';
import { github, web } from '@/public';


gsap.registerPlugin(ScrollTrigger)

const SingleProject: React.FC<ProjectType> = ({title, description, technologies, sectionClass, liveLink, repoLink, projectImages}) => {

  const {lang} = useLang()

  if (lang !== "es" &&  lang !== "en" && lang !== "zh") {
    throw new Error("Language Problem")
  }

  const servicesType = useRef<HTMLDivElement>(null!)
  const lastValue = projectsData[lang][projectsData[lang].length - 1].title

  useGSAP(()=>{
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: servicesType.current,
        scrub: true
      }
    })

    t1.from(servicesType.current, {
      scale: 0.9,
      rotateX: "25deg",
      scrollTrigger: {
        start: "top 90%",
        // end: "80% top",
        end: "95% top"
      }
    }).to (servicesType.current, {
      rotateX: (title !== lastValue) ? "-45deg" : "0deg",
      // translateZ: (title !== lastValue) ? "-4rem" : "0rem",
      opacity: 0.8,
      // scrollTrigger: {
      //   start: "top 10%",
      //   // end: "",
      // }
    }, ">")

  },[])

  return (
    <section
      className={`h-screen max-h-[101vh] sticky z-2 snap-start flex-center-all flex-col overflow-hidden ${sectionClass} services-type`}
      ref={servicesType}
    >

      <div className="absolute inset-0 grid grid-cols-3 auto-rows-[200px] gap-2">
        {projectImages!.map((imageUrl, index) => (
          <div
            key={index}
            className={`
              relative w-full h-full rounded-lg
              ${(index === 2 ) ? "row-start-2 col-start-1 col-span-2" : ""}
              ${(index === 3) ? "row-start-1 col-start-3 row-span-3" : ""}
              overflow-hidden
            `}
          >
            <Image
              src={imageUrl}
              alt={`${title}-image-${index + 1}`}
              fill
              className="object-cover "
            />
          </div>
        ))}
      </div>


      <Tilt className="relative z-10 dark:bg-(--color-surface)/60 backdrop-blur-md sm:p-8 p-4 rounded-2xl w-[70%] h-[70%] text-center ">
        <div
          className='relative w-full h-40 rounded-2xl overflow-hidden border-2 border-brand'
        >
          <Image
            className='-z-10 object-cover'
            src={projectImages![0]}
            alt={`${projectImages![0]}`}
            fill
          />
          <div
            className='absolute right-1 flex gap-2'
          >
            <div
              onClick={() => window.open(liveLink, "_blank")}
              className='w-10 h-10 rounded-full flex-center-all cursor-pointer z-100 bg-(--color-bg)'
            >
              <Image
                src={web}
                alt={title}
                width={40}
                height={40}
                className='w-full h-full object-contain'
              />
            </div>
            <div
              onClick={() => window.open(repoLink, "_blank")}
              className='w-10 h-10 rounded-full flex-center-all cursor-pointer z-100 bg-(--color-bg)'
            >
              <Image
                src={github}
                alt={title}
                width={40}
                height={40}
                className='w-full h-full object-contain'
              />
            </div>

          </div>
        </div>
        <div
          className='flex flex-col px-5 mt-4 gap-6 '
        >
          <h1 className=" font-bold  text-(--color-text) text-[0.9rem] md:text-[1.2rem] lg:text-2xl">{title}</h1>
          <p className="text-(--color-muted) mt-2 text-secondary text-[0.6rem] md:text-[0.8rem] lg:text-[1rem]">{description}</p>

          <ul className="flex-center-all flex border rounded-2xl py-2 px-4 mt-4">
            {technologies.map(({name, color, icon}, index) => (
              <li
                className="relative cursor-default mb-1 w-full text-center transition-all "
                key={index}
              >
                <div
                  className='flex-center-all flex-col text-(--color-text) text-[0.5rem] md:text-[0.9rem] flex-wrap'
                >
                  <Image
                    className='w-8 h-8'
                    src={icon}
                    width={40}
                    height={40}
                    alt={name}
                  />
                 <p
                  className={`${color}`}
                 >#{name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Tilt>
    </section>

  )
}

export default SingleProject
