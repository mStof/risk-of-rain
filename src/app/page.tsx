"use client";
import { useGSAP } from "@gsap/react";
import Animation from "../components/home/Animation";
import { StrictMode, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const sectionTwo = useRef<HTMLElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);


  useGSAP(() => {
    const sectionAnimation = gsap.to(sectionTwo.current, {
      opacity: 1,
      translateX: 0,
      duration: 1,
      markers:true,
      scrollTrigger: {
        trigger: sectionTwo.current,
        start: "80% top",
        end: "120% top",
        scrub: true
      }
    });
    const scrollAnimation = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "2000"
        }
      }
    );

    const cameraTL = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => setProgress(self.progress)
      }
    });

    cameraTL.to(cameraRef.current, {
      x: "15vw",
      y: "-20vh"
    });
    cameraTL.to(cameraRef.current, {
      x: "35vw",
      y: "0vh"
    });

    return () => {
      sectionAnimation.kill();
      scrollAnimation.kill();
    };
  });

  return (
    <main
      ref={containerRef}
      className="bg-neutral-bg bg-(image:--bg-pattern) overflow-x-hidden"
    >
      <div
        ref={cameraRef}
        className="w-screen h-screen border border-red-900 fixed z-10"
      >
        <Canvas className="size-[25rem] z-0">
          <Animation progressAnim={progress} />
        </Canvas>
      </div>
      <div ref={triggerRef}>
        <section ref={sectionRef} className="h-screen w-[200vw] flex ">
          <section
            id="sec"
            className="w-screen h-full flex justify-center items-end pb-20"
          >
            <h1 className="font-heading text-[120px] leading-24 w-fit z-20">
              <span className="text-secondary-01">R</span>isk of RAin
            </h1>
          </section>

          <section
            ref={sectionTwo}
            id="sec"
            className="opacity-0 z-20 translate-x-20 w-screen h-full flex opacity justify-center items-start pl-16 flex-col p-20 "
          >
            <h2 className="font-heading text-7xl leading-24 w-fit mt-auto">
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
      </div>
      {/* <section className="bg-purple-800 w-screen h-screen"></section> */}
    </main>
  );
}
