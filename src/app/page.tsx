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
      <div
        ref={cameraRef}
        className="w-full h-screen fixed z-0"
      >
        <Animation3D progress={progress} />
      </div>
      <ScrollHorizontal />
      <CardsContainer />
      <Yellow />

      <section className="bg-purple-800 w-full h-screen flex">
        <p className="text-9x font-major-mono-display m-auto">Model 3D casa</p>
      </section>
      <section className="bg-rose-800 w-full h-screen flex">
        <p className="text-9x font-major-mono-display m-auto">Model 3D motor</p>
      </section>
      <Footer />
    </main>
  );
}
