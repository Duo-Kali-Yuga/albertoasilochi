"use client";

import BallCanvas from "../utils/3DModels/BallCanvas";
import { technologies } from "../constants/technologies";
import SeparatorLine from "../utils/UI/SeparatorLine";
import clsx from "clsx";
import { useMediaQuery } from "@react-hooks-library/core";

const Tech = () => {
  console.log(technologies);
  const isMobile = useMediaQuery("max-width: 767px");
  const website = !isMobile;

  return (
    <section
      className="wrapper flex-col h-fit relative flex-center-all"
      id="tech"
    >
      <SeparatorLine sectionName="Tech" activeId="tech" />
      <div className="grid grid-cols-5 w-full h-full justify-items-center py-10 gap-y-5">
        {technologies.map((tech) => (
          <div
            className={clsx({ "w-24 h-24": website }, "relative group")}
            key={tech.name}
          >
            <p
              className="w-full h-[50%] bg-(--color-surface) text-brand text-center flex flex-wrap justify-center items-center border-2  absolute inset-0   transition-opacity duration-500
              opacity-0 z-10 group-hover:opacity-100"
            >
              {tech.name}
            </p>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
