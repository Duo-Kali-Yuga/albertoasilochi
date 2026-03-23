"use client";
import React from "react";
import SeparatorLine from "../utils/UI/SeparatorLine";
import { aboutInfo } from "@/src/constants/aboutConstant";
import AboutRight from "../utils/UI/AboutRight";
import AboutLeft from "../utils/UI/AboutLeft";
import { useLang } from "../context/LangProvider";
import { motion } from "framer-motion";



const About = () => {

  const {lang} = useLang()
  

  if (lang !== "es" &&  lang !== "en" && lang !== "zh") {
    throw new Error("Language Problem")
  }
  
  return (
    <section
      className="wrapper flex-col h-fit radial-gradient relative"
      id="about"
    >

      <SeparatorLine sectionName={lang === 'zh' ? '关于我' : lang === 'es' ? 'Acerca de' : 'About'} activeId="about" />
      <div className={`grid grid-cols-2  w-full h-full`}>
        <div className="h-fit">
          {aboutInfo[lang].map((info, index) => (
            <AboutLeft content={info} key={index} />
          ))}
        </div>
        <div className="h-full w-full">
          <div className="h-full flex flex-col justify-evenly">
            {/* {aboutInfo.map((info, index) => (
              <AboutRight content={info} key={index} />
            ))} */}
            <AboutRight {...aboutInfo[lang]}/>
          </div>
        </div>
      <motion.a href={lang === "zh" ? "Curriculum CV - 2026Chinese.pdf" : lang === "en" ? "Curriculum CV - 2026English.pdf" : "Curriculum CV - 2026Spanish.pdf" }
        target="_blank"
        download={true}

        className="lg:text-[1.8rem] text-[1.1rem] font-bold mt-5 mb-8 bg-linear-to-br to-foreground via-brand from-(--color-accent-glow) col-span-2 justify-self-center rounded-full py-0.5 px-2 text-(--color-text)"

        initial = {{
          opacity: 0,
          y: 100 
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          ease: "linear",
          duration: 0.5
        }}

      >
        {
          lang === "zh" ? "下载简历" : lang === "es" ? "Descargar CV" : "Download CV"
        }
      </motion.a>
      </div>
    </section>
  );
};

export default About;
