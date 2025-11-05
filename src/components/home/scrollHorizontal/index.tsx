import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Card from "@/components/home/Card";
import test from "@/../public/logo.svg";

const Index = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const scrollAnimation = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
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

    return () => {
      scrollAnimation.kill();
    };
  });

  return (
    <div ref={triggerRef} id="endTriggerSection">
      <section ref={sectionRef} className="h-screen w-[400vw] flex">
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
      </section>
    </div>
  );
};

export default Index;
