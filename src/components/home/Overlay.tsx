"use client";
import { useGSAP } from "@gsap/react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Overlay = () => {
  const scroll = useScroll();
  const textRef = useRef<HTMLHeadingElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        markers:true,
        horizontal:true
      }
    });

    tl.current.to(textRef.current, {
      opacity: 1,
      duration: 0.5
    });
  }, []);

  return (
      <section className="flex">
        <section className="w-screen h-screen flex justify-center bg-red500 items-end pb-20">
          <h1 className="font-heading text-[120px] leading-24 w-fit">
            <span className="text-secondary-01">R</span>isk of RAin
          </h1>
        </section>

        <section ref={textRef} className="w-screen h-screen flex opacity-0 justify-center items-start bg-sky500 pl-16 flex-col p-20">
          <h2
            className="font-heading text-7xl leading-24 w-fit mt-auto"
          >
            <span className="text-secondary-01">s</span>istema <br />
            inteligente
          </h2>
          <p className="w-96 text-base font-light font-chakra-petch leading-normal text-justify -tracking-tighter mt-auto">
            Many designs and tests went into creating a recording tool that
            would fit the widest range of drummer ergonomy and style as well
            as.
          </p>
        </section>
      </section>
   );
};

export default Overlay;
