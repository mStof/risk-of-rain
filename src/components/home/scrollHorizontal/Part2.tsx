import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Part2 = () => {
  const sectionTwo = useRef<HTMLElement>(null);
  useGSAP(() => {
    const sectionAnimation = gsap.to(sectionTwo.current, {
      opacity: 1,
      translateX: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionTwo.current,
        start: "450vh top",
        end: "700vh top",
        scrub: true
      }
    });
    return () => {
      sectionAnimation.kill();
    };
  }, []);
  return (
    <section
      ref={sectionTwo}
      id="sec"
      className="opacity-0 z-20 translate-x-20 w-screen h-full flex justify-center items-start pl-16 flex-col p-20"
    >
      <h2 className="font-heading text-7xl leading-24 w-fit mt-auto">
        <span className="text-secondary-01">s</span>istema <br />
        inteligente
      </h2>
      <p className="w-96 text-base font-light font-chakra-petch leading-normal text-justify -tracking-tighter mt-auto">
        Muitos projetos e testes foram realizados para criar uma ferramenta de
        gravação que se adaptasse à mais ampla gama de ergonomia e estilo de
        bateristas.
      </p>
    </section>
  );
};

export default Part2;
