// "use client"
// import React, { useRef } from 'react'
// import Image from 'next/image'
// import { type aboutType } from '@/src/constants/aboutConstant'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
// import { useMediaQuery } from 'react-responsive'


// type Label = {
//   content: aboutType
// }

// gsap.registerPlugin(ScrollTrigger)

// const AboutRight: React.FC<Label> = ({content}) => {


//   const isMobile = useMediaQuery({maxWidth: 767})
//   const start = isMobile ? "-20% 20%" : "top 20%"
//   const end = isMobile ? "100% 30%" : "bottom 16%"

//   const imageRef = useRef<HTMLDivElement>(null!)

  
//   const {img, alt, id} = content

//   useGSAP(()=>{

//     const t1 = gsap.timeline({
//       scrollTrigger: {
//         trigger: `#about-group-i-${id}`,
//         start,
//         end,
//         scrub: true,
//         pin: true
//       }
//     })

//     t1.to(`#about-image-${id}`, {
//       maskSize: 3000,
//       maskPosition: "40% 35%",
//       // maskSize: 600,
//       // maskPosition: "center",
//       ease: "power1.in",
//     })

//   },[])



//   return (
//     <div className='flex  flex-col text-center about-right-side grow-1' id={`about-group-${id}`} ref={imageRef}>

//       <div className=' h-80 '
//         id={`about-group-i-${id}`}
//       >
//         <Image src={img} alt={alt}
//           className='object-fit h-full masked-img image-about-right relative' id={`about-image-${id}`}
//         />
//       </div>
//     </div>
//   )
// }

// export default AboutRight
