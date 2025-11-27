"use client";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollHorizontal from "@/components/home/scrollHorizontal";
import Footer from "@/components/Footer";
import CardsContainer from "@/components/home/CardsContainer";
import Yellow from "@/components/home/Yellow";
import Animation3D from "@/components/home/animation3D";
import Image from "next/image";
import motor from "@/../public/img/home/motor.png";
import casa from "@/../public/img/home/casa.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const cameraTL = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 1,

        onUpdate: (self) => setProgress(self.progress)
      }
    });

    cameraTL.to(cameraRef.current, {
      x: "35vw",
      y: "0vh"
    });
    cameraTL.to(cameraRef.current, {
      x: "-25vw",
      y: "0vh"
    });
    cameraTL.to(cameraRef.current, {
      x: "-100vw"
    });
  });

  return (
    <main
      ref={containerRef}
      className="bg-neutral-bg bg-(image:--bg-pattern) overflow-hidden relative text-secondary-10"
    >
      <div ref={cameraRef} className="w-full h-screen fixed z-0">
        <Animation3D progress={progress} />
      </div>
      <ScrollHorizontal />
      <CardsContainer />
      <Yellow />

      <section className="w-full h-screen flex items-center justify-center">
        <div className="bg-red500 flex flex-col h-full flex-1 pl-28 justify-around">
          <div className="flex flex-col gap-1 relative">
            <p className="font-medium font-chakra-petch text-2xl leading-6">Custo-Benefício e Acessibilidade</p>
            <span className="h-0.5 w-full bg-secondary-10 block"></span>
            <span className="h-0.5 w-15 rotate-45 bg-secondary-10 block absolute left-full top-13 -translate-x-2.5 translate-y-5"></span>
          </div>
          <div>
            <p className="font-medium font-chakra-petch text-2xl leading-6">Acessibilidade Aprimorada</p>
            <span className="h-0.5 w-11/12 bg-secondary-10 block"></span>

          </div>
          <div className="flex flex-col gap-1 relative">
          <p className="font-medium font-chakra-petch text-2xl leading-6">Sistema Modular e Expansível</p>
            <span className="h-0.5 w-full bg-secondary-10 block"></span>
            <span className="h-0.5 w-15 -rotate-45 bg-secondary-10 block absolute left-full top-13 -translate-x-2.5 -translate-y-11"></span>
          </div>
        </div>

        <div className="aspect-square h-10/12 rounded-full backdrop-blur-none relative flex">
        <Image src={motor} alt="Motor" className="w-9/12 object-contain m-auto"/>
          <div className="absolute w-full h-full bg-white/5 border-4 border-white/5 backdropblur-sm inset-0 rounded-full isolate"></div>
        </div>

        <div className="bg-blue500 flex flex-col h-full flex-1 pr-28 justify-around">
          <div className="flex flex-col gap-1 relative">
            <p className="font-medium font-chakra-petch text-2xl leading-6">Conectividade Wi-Fi</p>
            <span className="h-0.5 w-full bg-secondary-10 block"></span>
            <span className="h-0.5 w-15 -rotate-45 bg-secondary-10 block absolute right-full top-13 translate-x-2.5 -translate-y-1"></span>
          </div>
          <div className=" items-end flex flex-col">
            <p className="font-medium font-chakra-petch text-2xl leading-6">Controle de Atuadores</p>
            <span className="h-0.5 w-11/12 bg-secondary-10 block"></span>

          </div>
          <div className="flex flex-col gap-1 relative">
            <p className="font-medium font-chakra-petch text-2xl leading-6">Alimentação interna</p>
            <span className="h-0.5 w-full bg-secondary-10 block"></span>
            <span className="h-0.5 w-15 rotate-45 bg-secondary-10 block absolute right-full top-13 translate-x-2.5 -translate-y-11"></span>
          </div>
        </div>
      </section>
      <section className="w-full h-screen flex">
        <p></p>
        <Image src={casa} alt="Casa"  className="object-contain scale-80"/>
      </section>
      <Footer />
    </main>
  );
}
