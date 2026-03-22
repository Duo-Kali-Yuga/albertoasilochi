"use client";
import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button
        type="button"
        onClick={toggleTheme}>
        <motion.div
          initial={{
            rotate: -90,
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            rotate: 0,
            scale: 1,
            opacity: 1,
          }}
          exit={{
            rotate: 90,
            scale: 0.5,
            opacity: 0,
          }}
          transition={{ duration: 0.3 }}
          className="px-3 py-1 rounded border cursor-pointer flex items-center bg-(--color-text)/20"
        >
          {theme === "light" ? (
            <FaMoon color="gray" className="text-[0.6rem] md:text-[0.8rem] lg:text-[1rem]"/>
          ) : (
            <FaSun color="yellow" className="text-[0.6rem] md:text-[0.8rem] lg:text-[1rem]"/>
          )}
        </motion.div>
      </button>
    </div>
  );
};

export default ThemeToggle;
