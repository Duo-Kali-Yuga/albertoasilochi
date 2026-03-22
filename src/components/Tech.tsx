"use client";

import React from "react";
import BallCanvas from "../utils/3DModels/BallCanvas";
import Image from "next/image"; // Use Next.js Image for optimization
import SeparatorLine from "../utils/UI/SeparatorLine";
import { techSkills } from "../constants/technologies";
import { useMediaQuery } from "@react-hooks-library/core";
import clsx from "clsx";
import { useLang } from "../context/LangProvider";


const Tech = () => {
  const {lang} = useLang()
  const isMobile = useMediaQuery("max-width: 767px");

  if (lang !== "es" &&  lang !== "en" && lang !== "zh") {
    throw new Error("Language Problem")
  }

  const currentSkills = techSkills[lang];

  return (
    <section className="wrapper flex-col h-fit relative flex-center-all  radial-gradient " id="tech">
      
      <SeparatorLine sectionName={lang === 'zh' ? '技术栈' : lang === 'es' ? 'Tecnologías' : 'Tech'} activeId="tech" />

      {currentSkills.map((category) => (
        <div key={category.category} className="w-full mb-12">
          <h3 className="text-brand text-2xl font-bold mb-8 px-4 border-l-4 border-brand">
            {category.category}
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
            {category.skills.map((tech) => (
              <div
                className={clsx(
                  "relative group flex flex-col items-center justify-center",
                  isMobile ? "w-20 h-20" : "w-36 h-36"
                )}
                key={tech.name}
              >
                {isMobile ? (
                  <div className="w-16 h-16 p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                    <Image 
                      src={typeof tech.icon === 'string' ? tech.icon : tech.icon.src} 
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <BallCanvas icon={tech.icon} />
                )}
                <p className={clsx(
                  "mt-2 text-[10px] md:text-xs font-bold text-gray-400 transition-colors duration-300 group-hover:text-brand",
                  !isMobile && "opacity-0 group-hover:opacity-100"
                )}>
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Tech;