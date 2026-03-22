"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    const video = videoRef.current;

    setupScrollTrigger(video)

    function setupScrollTrigger(video: HTMLVideoElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: "+=2000",
          scrub: true,
          pin: true
        },
      });

      tl.to(video, {
        currentTime: video.duration || 1,
        ease: "none",
      });
    }
  }, []);

  return (
    <section className="w-full relative flex items-center justify-center">
      <div ref={containerRef} className="sm:relative absolute top-10 md:w-full w-25 h-25 sm:w-45 sm:h-45 md:h-75 z-10  rounded-full overflow-hidden ">
        <div className="h-full w-full box-video">
          <video
            src="/output.mp4"
            muted
            playsInline
            preload="auto"
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ScrollVideoSection;
