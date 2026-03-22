"use client"

import React from "react";
import { useLang } from "../context/LangProvider";
import {motion} from "framer-motion"

const LangToggle = () => {

  const {lang, toggleLang} = useLang()
  const langSettings = ["en", "es", "zh"]

  return (
    <div
      className="flex justify-between gap-2"
    >
      {
        langSettings.map((lan, index) => (
          <div
            key={index}
          >
            <motion.div
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              
              <button
                type="button"
                onClick={() => toggleLang(lan)}
                className={`cursor-pointer rounded border px-1 py-0.2 text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] font-bold border-brand bg-(--color-muted)/60 hover:bg-(--color-primary-light)  ${lang === lan? "pointer-events-none bg-linear-to-br via-brand from-(--separator-bar) to-background)": ""}`}
                
              >
                {lan.toUpperCase()}
              </button>

            </motion.div>
          </div>
        ))
      }
    </div>
  );
};

export default LangToggle;
