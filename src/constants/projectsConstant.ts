import { Program } from "three/examples/jsm/transpiler/AST.js";
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
} from "@/public/index";

import { StaticImageData } from "next/image";
import { projectOne } from "@/public/projects";


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];


type ProjectType = {
  title: string;
  description: string;
  technologies: {
    name: string,
    color: string,
    icon: StaticImageData | string
  }[];
  features: string[];
  sectionClass: string;
  liveLink: string;
  repoLink?: string;
  projectImages?: StaticImageData[] | string[];
};

type projectCT = {
  title: string;
  description: string;
  btn: string;
}

type projectsContentType = {
  en: projectCT;
  es: projectCT;
  zh: projectCT;
}

const projectsContent: projectsContentType = {
  en: {
    title: "Featured Projects",
    description: "A collection of my recent work, ranging from award-winning educational platforms to immersive 3D web experiences. Each project reflects my focus on performance, clean code, and interactive design.",
    btn: "Learn More"
  },
  es: {
    title: "Proyectos Destacados",
    description: "Una colección de mis trabajos recientes, que van desde plataformas educativas galardonadas hasta experiencias web inmersivas en 3D. Cada proyecto refleja mi enfoque en el rendimiento, el código limpio y el diseño interactivo.",
    btn: "Saber más"
  },
  zh: {
    title: "精选项目",
    description: "我近期的作品集，涵盖了从获奖的教育平台到沉浸式 3D 网页体验。每个项目都体现了我对性能、整洁代码和交互设计的追求。",
    btn: "了解更多"
  },
}


const projectsData: Record<string, ProjectType[]> = {
  "en": [
    {
      title: "Global Admission Portal",
      description: "A comprehensive platform helping students secure international scholarships through automated matching algorithms.",
      technologies: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
          icon: nodejs
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
          icon: typescript
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
          icon: tailwind
        },
        {
          name: "Frame-Motion",
          color: "blue-text-gradient",
          icon: nodejs
        },
      ],
      features: [
        "Dynamic scholarship filtering",
        "Automated visa document generator",
        "Real-time application tracking",
      ],
      sectionClass: "top-[5.5%] bg-gradient-to-br from-slate-900 to-slate-800",
      liveLink: "https://example.com",
      repoLink: "https://github.com/youruser/project",
      projectImages: [nodejs]
    },
    {
      title: "Personal Portfolio Website",
      description: "A creative portfolio designed to showcase the design and graphic design skills of a freelancer, with a focus on interactive animations and clean, modern UI.",
      technologies: [
        {
          name: "React",
          color: "blue-text-gradient",
          icon: reactjs
        },
        {
          name: "CSS",
          color: "green-text-gradient",
          icon: css
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
          icon: tailwind
        },
      ],
      features: [
        "Responsive design with smooth transitions",
        "Interactive 3D elements",
        "Clean, minimalistic layout",
      ],
      sectionClass: "top-[5.5%] bg-gradient-to-br from-slate-900 to-slate-800",
      liveLink: "https://staeljesusroxann.vercel.app/",
      repoLink: "https://github.com/youruser/portfolio",
      projectImages: projectOne
    }
  ],
  "es": [
    {
      title: "Portal de Admisión Global",
      description: "Una plataforma integral que ayuda a los estudiantes a asegurar becas internacionales mediante algoritmos de emparejamiento automatizados.",
      technologies: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
          icon: nodejs
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
          icon: typescript
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
          icon: tailwind
        },
        {
          name: "Frame-Motion",
          color: "blue-text-gradient",
          icon: nodejs
        },
      ],
      features: [
        "Filtrado dinámico de becas",
        "Generador automatizado de documentos de visa",
        "Seguimiento de solicitudes en tiempo real",
      ],
      sectionClass: "top-[5.5%] bg-gradient-to-br from-slate-900 to-slate-800",
      liveLink: "https://example.com",
      projectImages: [nodejs]
    },
    {
      title: "Portafolio Personal",
      description: "Un portafolio creativo diseñado para mostrar las habilidades de diseño y diseño gráfico de un freelancer, con un enfoque en animaciones interactivas y una interfaz moderna y limpia.",
      technologies: [
        {
          name: "React",
          color: "blue-text-gradient",
          icon: reactjs
        },
        {
          name: "CSS",
          color: "green-text-gradient",
          icon: css
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
          icon: tailwind
        },
      ],
      features: [
        "Diseño responsivo con transiciones suaves",
        "Elementos interactivos en 3D",
        "Diseño limpio y minimalista",
      ],
      sectionClass: "top-[5.5%] bg-gradient-to-br from-slate-900 to-slate-800",
      liveLink: "https://staeljesusroxann.vercel.app/",
      repoLink: "https://github.com/youruser/portfolio",
      projectImages: projectOne
    }
  ],
  "zh": [
    {
      title: "全球入学门户",
      description: "一个通过自动匹配算法帮助学生获得国际奖学金的综合平台。",
      technologies: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
          icon: nodejs
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
          icon: typescript
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
          icon: tailwind
        },
        {
          name: "Frame-Motion",
          color: "pink-text-gradient",
          icon: nodejs
        },
      ],
      features: [
        "动态奖学金筛选",
        "自动化签证文件生成器",
        "实时申请状态追踪",
      ],
      sectionClass: "top-[5.5%] bg-gradient-to-br from-slate-900 to-slate-800",
      liveLink: "https://example.com",
      projectImages: [nodejs]
    },
    {
      title: "个人作品集网站",
      description: "一个创意作品集，旨在展示自由职业者的设计和图形设计技能，重点是互动动画和干净、现代的UI。",
      technologies: [
        {
          name: "React",
          color: "blue-text-gradient",
          icon: reactjs
        },
        {
          name: "CSS",
          color: "green-text-gradient",
          icon: css
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
          icon: tailwind
        },
      ],
      features: [
        "响应式设计与流畅的过渡效果",
        "互动式3D元素",
        "简洁、极简的布局",
      ],
      sectionClass: "top-[5.5%] bg-gradient-to-br from-slate-900 to-slate-800",
      liveLink: "https://staeljesusroxann.vercel.app/",
      repoLink: "https://github.com/youruser/portfolio",
      projectImages: projectOne
    }
  ]
};

export {
  projectsData,
  projectsContent,
  type ProjectType
};