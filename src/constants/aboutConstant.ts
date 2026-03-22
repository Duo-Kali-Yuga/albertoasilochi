import { StaticImageData } from "next/image";
import avatar from "@/public/about/avatar.jpg"
import kali from "@/public/about/Kali Picture.jpg"


interface AT {
  title: string,
  descriptionOne: string,
  descriptionTwo: string,
}

type aboutType = {
  en: AT[],
  es: AT[],
  zh: AT[],
}

const aboutInfo: aboutType = {
  en: [
    {
      title: "Hi, I'm Alberto Abaga Silochi",
      descriptionOne: "Computer Science professional and Master's student at Hohai University. I bridge the gap between complex logic and user-centric design with meticulous detail.",
      descriptionTwo: "With a strong foundation in React, I’ve led award-winning teams and developed high-impact solutions from educational platforms to e-commerce."
    },
    {
      title: "Creative Engineering & 3D",
      descriptionOne: "I specialize in the intersection of 3D art and web tech, using Blender and React Three Fiber (R3F) to build immersive, high-performance experiences.",
      descriptionTwo: "My goal is to transform static sites into interactive digital journeys, bringing technical precision and a creative edge to every project."
    }
  ],
  es: [
    {
      title: "Hola, soy Alberto Abaga Silochi",
      descriptionOne: "Profesional en Ciencias de la Computación y estudiante de maestría en Hohai. Conecto la lógica compleja con el diseño centrado en el usuario.",
      descriptionTwo: "Con base sólida en React, he liderado equipos premiados y desarrollado soluciones desde plataformas educativas hasta e-commerce."
    },
    {
      title: "Ingeniería Creativa y 3D",
      descriptionOne: "Especialista en arte 3D y tecnología web, utilizando Blender y R3F para crear experiencias inmersivas de alto rendimiento.",
      descriptionTwo: "Transformo sitios estáticos en viajes digitales interactivos, aportando precisión técnica y creatividad a cada proyecto."
    }
  ],
  zh: [
    {
      title: "你好，我是 Alberto A. S. (阿尔伯托)",
      descriptionOne: "计算机科学专业人士，河海大学硕士在读。致力于将复杂逻辑与以用户为中心的设计精准结合。",
      descriptionTwo: "拥有扎实的 React 基础，曾带领获奖团队开发从教育平台到电商系统的各类高影响力方案。",
    },
    {
      title: "创意工程与 3D",
      descriptionOne: "专注于 3D 艺术与网页技术交叉领域，利用 Blender 和 R3F 打造高性能沉浸式体验。",
      descriptionTwo: "我的目标是将静态网站转化为互动数字旅程，为每个项目注入技术精准度与创意优势。"
    }
  ]
};

export {
  type AT ,
  type aboutType,
  aboutInfo
}