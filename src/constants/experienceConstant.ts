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
  imgTemp
} from "@/public/index";
import { StaticImageData } from "next/image";


import { maggiePortfolio, putonghua, thesisProject } from "@/public/experiences";



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


interface innerExpe  {
  id: number,
  title: string,
  company_name: string,
  icon: StaticImageData,
  iconsBg: string,
  date: string,
  points: string[]
}

interface expeInterface {
  en: innerExpe[],
  es: innerExpe[],
  zh: innerExpe[]
}


const experiences: expeInterface = {
  en: [
    {
      id: 1,
      title: "Freelance Web Developer",
      company_name: "MalikaWearings / Portfolio Systems",
      icon: maggiePortfolio,
      iconsBg: "#E6DEDD",
      date: "April 2024 - Present",
      points: [
        "Engineering custom Shopify storefronts using Liquid and CSS to transform standard templates into high-conversion designs.",
        "Collaborating with creative professionals to build bespoke, performance-optimized portfolios for drone photography and visual media.",
        "Implementing responsive layouts and ensuring high-speed performance for media-heavy websites.",
        "Providing end-to-end freelance solutions from initial design in Figma to final deployment."
      ]
    },
    {
      id: 2,
      title:"Lead Frontend Developer",
      company_name: "Award-Winning Chinese Learning Platform",
      icon: putonghua,
      iconsBg: "#383E56",
      date:"April 2022 - May 2022",
      points: [
        "Architected the frontend of an interactive educational platform using React.js and Bootstrap.",
        "Managed a cross-functional development team, overseeing task delegation and version control via Git.",
        "Ensured a professional and consistent user experience through meticulous UI/UX implementation.",
        "Awarded Third Place in the 15th China College Students Computer Design Competition."
      ]
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      company_name: "Social Media Thesis Project",
      icon: thesisProject,
      iconsBg: "#E6DEDD",
      date:"February 2023 - April 2023",
      points: [
        "Designed and deployed a responsive social media platform from scratch using a PHP, MySQL, and JavaScript stack.",
        "Implemented secure user authentication, profile management, and real-time content sharing features.",
        "Optimized database queries for efficient data handling and user interaction.",
        "Successfully documented and presented the entire SDLC for a formal academic thesis."
      ]
    }
  ],
  es: [
    {
      id: 1,
      title: "Desarrollador Web Freelance",
      company_name: "MalikaWearings / Sistemas de Portafolio",
      icon: maggiePortfolio,
      iconsBg: "#E6DEDD",
      date: "Abril 2024 - Presente",
      points: [
        "Ingeniería de tiendas personalizadas en Shopify utilizando Liquid y CSS para transformar plantillas estándar en diseños de alta conversión.",
        "Colaboración con profesionales creativos para construir portafolios optimizados para fotografía con drones y medios visuales.",
        "Implementación de diseños responsivos y garantía de alto rendimiento para sitios web con alta carga de medios.",
        "Provisión de soluciones freelance integrales, desde el diseño inicial en Figma hasta el despliegue final."
      ]
    },
    {
      id: 2,
      title: "Líder de Desarrollo Frontend",
      company_name: "Plataforma de Aprendizaje de Chino (Premiada)",
      icon: putonghua,
      iconsBg: "#383E56",
      date: "Abril 2022 - Mayo 2022",
      points: [
        "Arquitectura del frontend de una plataforma educativa interactiva utilizando React.js y Bootstrap.",
        "Gestión de un equipo de desarrollo multidisciplinario, supervisando la delegación de tareas y el control de versiones vía Git.",
        "Garantía de una experiencia de usuario profesional y consistente mediante una implementación meticulosa de UI/UX.",
        "Ganador del tercer lugar en la 15ª Competencia de Diseño Informático para Estudiantes Universitarios de China."
      ]
    },
    {
      id: 3,
      title: "Desarrollador Full-Stack",
      company_name: "Proyecto de Tesis: Red Social",
      icon: thesisProject,
      iconsBg: "#E6DEDD",
      date: "Febrero 2023 - Abril 2023",
      points: [
        "Diseño y despliegue de una plataforma de red social responsiva desde cero utilizando PHP, MySQL y JavaScript.",
        "Implementación de autenticación segura de usuarios, gestión de perfiles y funciones de intercambio de contenido en tiempo real.",
        "Optimización de consultas de base de datos para un manejo eficiente de datos e interacción del usuario.",
        "Documentación y presentación exitosa de todo el ciclo de vida de desarrollo de software (SDLC) para una tesis académica formal."
      ]
    }
  ],
  zh: [
    {
      id: 1,
      title: "自由职业网页开发员",
      company_name: "MalikaWearings / 作品集系统",
      icon: maggiePortfolio,
      iconsBg: "#E6DEDD",
      date: "2024年4月 - 至今",
      points: [
        "使用 Liquid 和 CSS 开发自定义 Shopify 店铺，将标准模板转变为高转化率的专业设计。",
        "与创意专业人士合作，为无人机摄影和视觉媒体构建量身定制、性能优化的作品集。",
        "实现响应式布局，确保媒体密集型网站的高速加载性能。",
        "提供从 Figma 初始设计到最终部署的全方位自由职业解决方案。"
      ]
    },
    {
      id: 2,
      title: "前端开发组长",
      company_name: "获奖教育平台（中文学习网站）",
      icon: putonghua,
      iconsBg: "#383E56",
      date: "2022年4月 - 2022年5月",
      points: [
        "使用 React.js 和 Bootstrap 构建交互式教育平台的辅助前端架构。",
        "管理跨职能开发团队，负责任务分配和通过 Git 进行版本控制。",
        "通过细致的 UI/UX 实现，确保专业且一致的用户体验。",
        "荣获第15届中国大学生计算机设计大赛三等奖。"
      ]
    },
    {
      id: 3,
      title: "全栈开发员",
      company_name: "社交媒体毕业设计项目",
      icon: thesisProject,
      iconsBg: "#E6DEDD",
      date: "2023年2月 - 2023年4月",
      points: [
        "使用 PHP、MySQL 和 JavaScript 栈从零开始设计并部署响应式社交媒体平台。",
        "实现安全的用户身份验证、个人资料管理和实时内容共享功能。",
        "优化数据库查询，以实现高效的数据处理和用户交互。",
        "成功完成并记录了正式学术论文的整个软件开发生命周期 (SDLC)。"
      ]
    }
  ]
}


export { technologies, experiences, type expeInterface, type innerExpe};

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];
