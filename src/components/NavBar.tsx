"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { navBar } from '../constants/navbarLB'
import LangToggle from './LangToggle'
import ThemeToggle from './ThemeToggle'
import { useMediaQuery } from '@react-hooks-library/core'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { useLang } from '../context/LangProvider'
import clsx from 'clsx'

gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {
  const isMobile = useMediaQuery('max-width: 767px')

  const {lang} = useLang()

  if (lang !== "es" &&  lang !== "en" && lang !== "zh") {
    throw new Error("Language Problem")
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  
  const navRef = useRef<HTMLElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setOffsetTop(navRef.current.offsetTop);
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > offsetTop);

      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = currentScroll / windowHeight;
      setScrollPercent(progress);
    };

    window.addEventListener("scroll", handleScroll);
    
    window.addEventListener("resize", () => {
      if (navRef.current) setOffsetTop(navRef.current.offsetTop);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
    };
  }, [offsetTop]);

  useGSAP(() => {
    gsap.from("#logo", {
      opacity: 0,
      scale: 0.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
        end: "5% 30%",
        scrub: true
      }
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className={clsx('border-b-brand sticky top-0 ... rounded-3xl border-b-2 px-5 gap-5 sm:gap-10 md:gap-20 z-300 overflow-hidden nav-glass', !isScrolled ? "bg-background py-4" : "bg-background/80 py-2 blur-[10px")}
    >
      <header className='flex-center-all'>
        <a href="#top"
          className='flex items-center flex-col justify-start'
        >
          <Image
            src={"/logo-transparent.png"}
            width={!isMobile ? 20 : 40}
            height={!isMobile ? 20 : 40}
            alt='Logo Alberto'
            className={clsx(!isScrolled ? "inline" : "hidden")}
            />
          <p className='font-bold text-glow grow '
            id="logo"
          >Albert A. S.</p>
        </a>
      </header>
      <ul
        className='hidden sm:flex website'
      >
        {
          navBar[lang].map(({label, path}, index) => (
            <li key={index}>
              <a href={`#${path}`}
                >
                  {label}
                </a>
            </li>
          ))
        }
      </ul>
      <ul
        className='flex sm:hidden mobile'
      >
        {
          navBar[lang].map((nav, index) => (
            <li key={index}>
              <a href={`#${nav.path}`}
                >
                  <nav.icon/>
                </a>
            </li>
          ))
        }
      </ul>
      <div
        className={`flex justify-evenly gap-4 ${!isMobile ? "items-center" : ""}`} 
      >
        <LangToggle/>
        <ThemeToggle/>
      </div>
      <div className="progress-container rounded-3xl absolute transition-opacity duration-300 bottom-0 left-0 w-full">
        <div 
          className="progress-bar h-full w-full" 
          style={{ transform: `scaleX(${scrollPercent})` }} 
        />
      </div>
    </nav>
  )
}

export default NavBar
