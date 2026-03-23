"use client";
import React, { useEffect, useRef } from "react";
import SeparatorLine from "../utils/UI/SeparatorLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import {
  projectsData,
  projectsContent,
  type ProjectType,
} from "../constants/projectsConstant";
import SingleProject from "../utils/UI/SingleProject";
import Link from "next/link";
import { useLang } from "../context/LangProvider";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { lang } = useLang();

  if (lang !== "es" && lang !== "en" && lang !== "zh") {
    throw new Error("Language Problem");
  }

  const boxRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
    });

    t1.fromTo(
      boxRef.current,
      {
        width: "10dvw",
        opacity: 0,
      },
      {
        width: "98dvw",
        opacity: 1,
      },
    );
  }, []);

  return (
    <section
      id="work"
      className="wrapper flex justify-start items-center flex-col relative z-80 "
    >
      <SeparatorLine sectionName={lang === 'zh' ? '作品' : lang === 'es' ? 'Trabajo' : 'Work'} activeId="work" />
      <div
        className="mt-10 sticky top-0 bg-brand/25 h-screen border-work animated-border"
        ref={boxRef}
      >
        <section className="relative w-full  bg-linear-to-br from-background via-brand to-foreground p-1 sm:p-5 flex-center-all flex-col h-full overflow-hidden">
          <div className="max-w-4xl text-center sm:mb-12">
            <h1 className="font-extrabold sm:mb-4 mb-2 text-(--color-text) text-[1.2rem] md:text-2xl lg:text-3xl">
              {projectsContent[lang].title}
            </h1>
            <p className="max-sm:mb-2 text-[1rem] md:text-[1.2rem] lg:text-2xl text-(--color-text) py-4">
              {projectsContent[lang].description}
            </p>
          </div>

          <div
            className="grid sm:gap-8 gap-2 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 w-full items-center"
            id="work-overview"
          >
            {projectsData[lang].map(({ title, liveLink }, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:p-4 p-3 w-full"
              >
                <h2 className="font-bold sm:mb-2 mb-2">{title}</h2>
                <Link
                  href={liveLink}
                  target="_blank"
                  className="sm:px-4 sm:py-2 px-2 py-1 rounded-lg font-semibold transition"
                >
                  {projectsContent[lang].btn}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="h-full w-full z-100 " id="work-types">
        {projectsData[lang].map((project, index) => (
          <SingleProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
