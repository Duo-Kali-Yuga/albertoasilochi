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
import { projectOne, projectTwo } from "@/public/projects";


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
    },
    {
      title: "CulinaShare Mobile",
      description: "A full-stack recipe discovery application that allows users to explore international cuisines, filter by ingredients, and manage personal favorites.",
      technologies: [
        {
          name: "React Native (Expo)",
          color: "blue-text-gradient",
          icon: reactjs
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
          icon: nodejs
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
          icon: mongodb // Ensure you have this icon imported
        },
        {
          name: "Clerk",
          color: "purple-text-gradient",
          icon: nodejs // Ensure you have this icon imported
        },
      ],
      features: [
        "Real-time recipe discovery via The Meal DB API",
        "Secure User Authentication and Syncing with Clerk",
        "Personalized 'Favorite' collection stored on Render-hosted API",
        "Advanced filtering by categories and step-by-step instructions",
      ],
      sectionClass: "top-[15.5%] bg-gradient-to-br from-indigo-950 to-slate-900",
      liveLink: "https://recipe-favorite-api.onrender.com", 
      repoLink: "https://github.com/youruser/recipe-app-repo",
      projectImages: projectTwo
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
    },
    {
      title: "CulinaShare Mobile",
      description: "Una aplicación móvil full-stack para el descubrimiento de recetas que permite explorar cocinas internacionales y gestionar favoritos personales.",
      technologies: [
        { name: "React Native", color: "blue-text-gradient", icon: reactjs },
        { name: "Express.js", color: "green-text-gradient", icon: nodejs },
        { name: "MongoDB", color: "green-text-gradient", icon: mongodb },
        { name: "Clerk", color: "purple-text-gradient", icon: reactjs },
      ],
      features: [
        "Búsqueda de recetas en tiempo real mediante The Meal DB API",
        "Autenticación segura de usuarios sincronizada con Clerk",
        "Colección de 'Favoritos' almacenada en API alojada en Render",
        "Filtrado avanzado por categorías e instrucciones detalladas",
      ],
      sectionClass: "top-[15.5%] bg-gradient-to-br from-indigo-950 to-slate-900",
      liveLink: "https://recipe-favorite-api.onrender.com",
      repoLink: "https://github.com/youruser/recipe-app-repo",
      projectImages: projectTwo
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
    },
    {
      title: "CulinaShare 移动端",
      description: "一个全栈食谱发现移动应用程序，允许用户探索国际美食、按配料过滤并管理个人收藏夹。",
      technologies: [
        { name: "React Native", color: "blue-text-gradient", icon: reactjs },
        { name: "Express.js", color: "green-text-gradient", icon: nodejs },
        { name: "MongoDB", color: "green-text-gradient", icon: mongodb },
        { name: "Clerk", color: "purple-text-gradient", icon: reactjs },
      ],
      features: [
        "通过 The Meal DB API 实时获取食谱",
        "使用 Clerk 进行安全的端用户身份验证",
        "存储在 Render 托管 API 上的个性化“收藏”集合",
        "按类别和详细烹饪步骤进行高级过滤",
      ],
      sectionClass: "top-[15.5%] bg-gradient-to-br from-indigo-950 to-slate-900",
      liveLink: "https://recipe-favorite-api.onrender.com",
      repoLink: "https://github.com/youruser/recipe-app-repo",
      projectImages: projectTwo
    }
  ]
};

export {
  projectsData,
  projectsContent,
  type ProjectType
};