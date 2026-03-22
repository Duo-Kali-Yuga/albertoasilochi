
import { StaticImageData } from "next/image";

import {

  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  blender,
  gsapLogo
} from "../../public/index";


interface Skill {
  name: string;
  icon: string; // Path to your icon SVG/PNG
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

type skillsType = {
  en: SkillCategory[];
  es: SkillCategory[];
  zh: SkillCategory[];
}

const techSkills: skillsType = {
  en: [
    {
      category: "Creative Engineering",
      skills: [
        { name: "React Three Fiber", icon: threejs },
        { name: "Three.js", icon: threejs },
        { name: "Blender", icon: blender },
        { name: "GSAP / Framer Motion", icon: gsapLogo }
      ]
    },
    {
      category: "Frontend Core",
      skills: [
        { name: "React / Next.js", icon: reactjs },
        { name: "TypeScript", icon: typescript },
        { name: "Tailwind CSS", icon: tailwind }
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js / Express", icon: nodejs },
        { name: "MongoDB / MySQL", icon: mongodb },
        // { name: "PHP / Django", icon: "/icons/backend.svg" }
      ]
    }
  ],
  es: [
    {
      category: "Ingeniería Creativa",
      skills: [
        { name: "React Three Fiber", icon: threejs },
        { name: "Three.js", icon: threejs },
        { name: "Blender", icon: blender },
        { name: "GSAP / Framer Motion", icon: gsapLogo }
      ]
    },
    {
      category: "Desarrollo Frontend",
      skills: [
        { name: "React / Next.js", icon: reactjs },
        { name: "TypeScript", icon: typescript },
        { name: "Tailwind CSS", icon: tailwind }
      ]
    },
    {
      category: "Backend y Bases de Datos",
      skills: [
        { name: "Node.js / Express", icon: nodejs },
        { name: "MongoDB / MySQL", icon: mongodb },
        // { name: "PHP / Django", icon: "/icons/backend.svg" }
      ]
    }
  ],
  zh: [
    {
      category: "创意工程",
      skills: [
        { name: "React Three Fiber", icon: threejs },
        { name: "Three.js", icon: threejs },
        { name: "Blender", icon: blender },
        { name: "GSAP / Framer Motion", icon: gsapLogo }
      ]
    },
    {
      category: "前端核心技术",
      skills: [
        { name: "React / Next.js", icon: reactjs },
        { name: "TypeScript", icon: typescript },
        { name: "Tailwind CSS", icon: tailwind }
      ]
    },
    {
      category: "后端与数据库",
      skills: [
        { name: "Node.js / Express", icon: nodejs },
        { name: "MongoDB / MySQL", icon: mongodb },
        // { name: "PHP / Django", icon: "/icons/backend.svg" }
      ]
    }
  ]
}
export {
  techSkills
}


