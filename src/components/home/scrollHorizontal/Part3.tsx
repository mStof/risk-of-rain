import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Part1 = () => {
  const sectionThree = useRef<HTMLElement>(null);
  useGSAP(() => {
    const sectionAnimationThree = gsap.to(sectionThree.current, {
      opacity: 1,
      translateX: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionThree.current,
        start: "900vh top",
        end: "1350vh top",
        scrub: true,
        // markers:true
      }
    });
    return () => {
      sectionAnimationThree.kill();
    };
  }, []);

  return (
    <section
      ref={sectionThree}
      id="sec"
      className="bg-red-500/50 z-90 opacity-0 w-screen h-full flex justify-center items-end pr-70 flex-col gap-[4.5vh]  translate-x-20"
    >
      <div className=" w-8/12 h-fit flex flex-col-reverse items-end gap-1">
        <div className="flex items-end h-5 w-full justify-end ">
          <span className="block h-px flex-1 -translate-y-[1.75px] translate-x-0.5 bg-white relative after:size-5 after:rounded-full after:border-2 after:border-white after:absolute after:-translate-y-1/2 after:top-1/2 after:-translate-x-full"></span>
          <span className="block h-px w-20 bg-white -translate-y-2.5 --x-0.5 -rotate-12"></span>
          <span className="block h-px w-52 border-t border-t-white bg-white self-start  -translate-x-1 "></span>
        </div>
        <p className=" font-medium font-chakra-petch text-2xl leading-6 -translate-x-1">
          Status de conexão
        </p>
      </div>

      <div className=" w-8/12 h-fit flex flex-col-reverse items-end gap-1">
        <div className="flex items-end h-5 w-full justify-end ">
          <span className="block h-px flex-1 -translate-y-[1.75px] translate-x-0.5 bg-white relative after:size-5 after:rounded-full after:border-2 after:border-white after:absolute after:-translate-y-1/2 after:top-1/2 after:-translate-x-full"></span>
          <span className="block h-px w-20 bg-white -translate-y-2.5 --x-0.5 -rotate-12"></span>
          <span className="block h-px w-52 border-t border-t-white bg-white self-start -translate-x-1"></span>
        </div>
        <p className=" font-medium font-chakra-petch text-2xl leading-6 -translate-x-1">
          Status de sistema
        </p>
      </div>

      <div className=" w-8/12 h-fit flex flex-col-reverse items-end gap-1">
        <div className="flex items-end h-5 w-full justify-end ">
          <span className="block h-px flex-1 -translate-y-[1.75px] translate-x-0.5 bg-white relative after:size-5 after:rounded-full after:border-2 after:border-white after:absolute after:-translate-y-1/2 after:top-1/2 after:-translate-x-full"></span>
          <span className="block h-px w-20 bg-white -translate-y-2.5 --x-0.5 -rotate-12"></span>
          <span className="block h-px w-72 border-t border-t-white bg-white self-start -translate-x-1"></span>
        </div>
        <p className=" font-medium font-chakra-petch text-2xl leading-6 -translate-x-1">
          Conexão com o aplicativo
        </p>
      </div>

      <div className=" w-8/12 h-fit flex flex-col-reverse items-end gap-1">
        <div className="flex items-end h-5 w-full justify-end ">
          <span className="block h-px flex-1 -translate-y-[1.75px] translate-x-0.5 bg-white relative after:size-5 after:rounded-full after:border-2 after:border-white after:absolute after:-translate-y-1/2 after:top-1/2 after:-translate-x-full"></span>
          <span className="block h-px w-20 bg-white -translate-y-2.5 --x-0.5 -rotate-12"></span>
          <span className="block h-px w-[19rem] border-t border-t-white bg-white self-start -translate-x-1"></span>
        </div>
        <p className=" font-medium font-chakra-petch text-2xl leading-6 -translate-x-1">
          Status do sensor de chuva
        </p>
      </div>

      <div className=" w-8/12 h-fit flex flex-col-reverse items-end gap-1">
        <div className="flex items-end h-5 w-full justify-end ">
          <span className="block h-px flex-1 -translate-y-[1.75px] translate-x-0.5 bg-white relative after:size-5 after:rounded-full after:border-2 after:border-white after:absolute after:-translate-y-1/2 after:top-1/2 after:-translate-x-full"></span>
          <span className="block h-px w-20 bg-white -translate-y-2.5 --x-0.5 -rotate-12"></span>
          <span className="block h-px w-[22.5rem] border-t border-t-white bg-white self-start -translate-x-1"></span>
        </div>
        <p className=" font-medium font-chakra-petch text-2xl leading-6 -translate-x-1">
          Status dos Módulos das Janelas
        </p>
      </div>
    </section>
  );
};

export default Part1;
