import { IconType } from "react-icons"
import { IoHomeSharp } from "react-icons/io5"
import { FaUser, FaSuitcase, FaLaptopCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

interface innerNav {
  label: string,
  path: string,
  icon: IconType
}

interface outerNav {
  en: innerNav[],
  es: innerNav[],
  zh: innerNav[],
}

const navBar: outerNav = {
  /* English Letters */

  en: [
    {
      label: "Home",
      path: "home",
      icon: IoHomeSharp,
    },
    {
      label: "About",
      path: "about",
      icon: FaUser,
    },
    {
      label: "Experience",
      path: "experience",
      icon: FaSuitcase,
    },
    {
      label: "Tech",
      path: "tech",
      icon: FaLaptopCode,
    },
    {
      label: "Work",
      path: "work",
      icon: FaProjectDiagram,
    },
    {
      label: "Contact",
      path: "contact",
      icon: FaEnvelope
    }
  ],
  es: [
    {
      label: "Inicio",
      path: "home",
      icon: IoHomeSharp,
    },
    {
      label: "Acerca de",
      path: "about",
      icon: FaUser,
    },
    {
      label: "Experiencia",
      path: "experience",
      icon: FaSuitcase,
    },
    {
      label: "Tecnología",
      path: "tech",
      icon: FaLaptopCode,
    },
    {
      label: "Trabajo",
      path: "work",
      icon: FaProjectDiagram,
    },
    {
      label: "Contacto",
      path: "contact",
      icon: FaEnvelope
    }
  ],
  zh: [
    {
      label: "首页",
      path: "home",
      icon: IoHomeSharp,
    },
    {
      label: "关于我",
      path: "about",
      icon: FaUser,
    },
    {
      label: "经验",
      path: "experience",
      icon: FaSuitcase,
    },
    {
      label: "技术",
      path: "tech",
      icon: FaLaptopCode,
    },
    {
      label: "作品",
      path: "work",
      icon: FaProjectDiagram,
    },
    {
      label: "联系我",
      path: "contact",
      icon: FaEnvelope
    }
  ]
}



export {navBar}