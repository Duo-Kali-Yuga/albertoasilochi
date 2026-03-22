"use client";
import React, { useRef } from "react";
import SeparatorLine from "../utils/UI/SeparatorLine";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import ExperienceLeft from "../utils/UI/ExperienceLeft";
import ExperienceRight from "../utils/UI/ExperienceRight";
import { useMediaQuery } from "@react-hooks-library/core";

import ScrollVideoSection from "../utils/UI/ScrollVideoSection";
// import PassionsVideo from './passions/PassionVideo'

import { experiences } from "../constants/experienceConstant";
import { useLang } from "../context/LangProvider";

const information = [
  {
    id: "1",
    label: "This is my name",
    image: "/gallery1.jpg",
    classType: "rounded-br-2xl rounded-tr-2xl row-start-1",
  },
  {
    id: "2",
    label: "This is some information about here",
    image: "/gallery2.jpg",
    classType: "rounded-bl-2xl rounded-tl-2xl row-start-2 ",
  },
  {
    id: "3",
    label: "This is another information about here",
    image: "/gallery3.jpg",
    classType: "rounded-br-2xl rounded-tr-2xl row-start-4",
  },
  {
    id: "4",
    label: "This is my name",
    image: "/gallery4.jpg",
    classType: "rounded-bl-2xl rounded-tl-2xl row-start-5 ",
  },
  {
    id: "5",
    label: "lorem20  feibfibverbveb verjb",
    image: "/gallery5.jpg",
    classType: "rounded-br-2xl rounded-tr-2xl row-start-7",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  const { lang } = useLang();

  if (lang !== "es" && lang !== "en" && lang !== "zh") {
    throw new Error("Language Problem");
  }

  return (
    <section
      id="experience"
      className="wrapper flex-center-all flex-col radial-gradient"
    >
      <SeparatorLine sectionName={lang === 'zh' ? '经验' : lang === 'es' ? 'Experiencia' : 'Experience'} activeId="experience" />
      <div className="experience-divider w-full h-fit">
        <div
          className="w-full grow-2 gap-y-20 info-perspective pt-10"
          id="experience-left-side"
        >
          {experiences[lang].map((value, index) => (
            <ExperienceLeft {...value} key={index} />
          ))}
        </div>
        <div
          className=" sm:w-full w-1 h-1 sm:h-full grow relative"
          id="experience-middle-side"
        >
          <ScrollVideoSection />
        </div>
        <div
          className="w-full grow-2 gap-y-20 info-perspective pt-10 overflow-hidden"
          id="experience-right-side"
        >
          {experiences[lang].map((value, index) => (
            <ExperienceRight {...value} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
