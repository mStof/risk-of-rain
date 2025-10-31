"use client";
import { useGSAP } from "@gsap/react";
import Animation from "../components/home/Animation";
import { Ref, Suspense, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ScrollHorizontal from "@/components/home/scrollHorizontal";
import Card from "@/components/home/Card";
import test from "@/../public/logo.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  
  useGSAP(() => {
    const cameraTL = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => setProgress(self.progress)
      }
    });

    // cameraTL.to(cameraRef.current, {
    //   x: "15vw",
    //   y: "-20vh"
    // });
    cameraTL.to(cameraRef.current, {
      x: "35vw",
      y: "0vh"
    });
    cameraTL.to(cameraRef.current, {
      x: "-40vw",
      y: "0vh"
    });
    cameraTL.to(cameraRef.current, {
      x:0,y:0,
      position:"absolute"
    });
    return () => {
      // sectionAnimation.kill();
    };
  });

  return (
    <main
      ref={containerRef}
      className="bg-neutral-bg bg-(image:--bg-pattern) overflow-hidden relative"
    >
      <div
        ref={cameraRef}
        className="w-full h-screen fixed border border-red-900 z-0"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas ref={canvasRef} className="size-[25rem] z-0" onCreated={(e) => console.warn(e)} onInvalid={(e) => console.log(e)}>
            <Animation progressAnim={progress} />
          </Canvas>
        </Suspense>
      </div>
      <ScrollHorizontal />
      <section className="h-fit w-auto flex flex-col gap-4 px-40 py-20">
        <h6 className="text-h6 font-major-mono-display leading-8">Infos.</h6>
        <div className="flex flex-wrap gap-20 justify-between">
          <Card
            title="Como usar"
            subtitle="usabilidade"
            imgConfig={{ src: test, alt: "Test" }}
          />
          <Card
            title="Como usar"
            subtitle="usabilidade"
            imgConfig={{ src: test, alt: "Test" }}
          />
          <Card
            title="Como usar"
            subtitle="usabilidade"
            imgConfig={{ src: test, alt: "Test" }}
          />
          <Card
            title="Como usar"
            subtitle="usabilidade"
            imgConfig={{ src: test, alt: "Test" }}
          />
        </div>
      </section>
      <section className="bg-secondary-01/90 w-full h-screen flex flex-col gap-8 justify-center items-center ">
        <p className="font-chakra-petch uppercase -tracking-tighter font-medium text-h2 leading-16 text-dark-10">Acessibilidade</p>
        <p className="font-chakra-petch uppercase -tracking-tighter font-medium text-h2 leading-16">Proteção automática</p>
        <p className="font-chakra-petch uppercase -tracking-tighter font-medium text-h2 leading-16 text-dark-10">Técnologia inteligente</p>
        <p className="font-chakra-petch uppercase -tracking-tighter font-medium text-h2 leading-16">Solução acessivel</p>
        <p className="font-chakra-petch uppercase -tracking-tighter font-medium text-h2 leading-16 text-dark-10">Expansividade</p>

      </section>

      {/* <section className="bg-purple-800 w-screen h-screen"></section> */}
    </main>
  );
}
