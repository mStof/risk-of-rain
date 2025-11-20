import Image from "next/image";
import React from "react";
import perfil from "@/../public/img/images.jpg";
import PerfilCase from "@/components/PerfilCase";
import { Email, Github, Instagram } from "@/components/icons";

const Desenvolvedores = () => {
  return (
    <main className="bg-dark-10 bg-(image:--bg-pattern) h-screen flex overflow-hidden">
      <article className="group relative flex-1 w-full border-r-secondary-01 border-r-2">
        <article className="z-50 bg-dark-10 bg-(image:--bg-pattern) w-full group-hover:max-h-full group-hover:py-8 max-h-0 overflow-hidden flex items-center h-full duration-500 transition-all absolute">
          <div className="flex flex-col w-full items-center px-24 pt-10 gap-16">
            <PerfilCase img={perfil} sizes="lg3" />
            {/* <Image src={mstof} alt="mstof" className="bg-red-500 object-contain w-full h-full" /> */}
            <div className="flex flex-col gap-16 w-full">
              <div className="flex flex-col gap-4 w-full items-center">
                <span className="w-full h-0.5 bg-secondary-01"></span>
                <h1 className="text-h6 font-major-mono-display leading-8">
                  Mstof
                </h1>
                <span className="w-full h-0.5 bg-secondary-01"></span>
              </div>
              <div className="flex flex-col gap-4">
                {/* <div className="w-full flex justify-between"> */}
                  <a href="https://github.com/mStof" className="flex gap-2 items-center group/link external" target="_blank">
                    <div className="relative size-8 border-2 border-secondary-01 overflow-hidden flex justify-center items-center text-3 group-hover/link:before:scale-100 group-hover/link:border-dark-10 before:size-16 before:scale-0 before:rounded-full before:transition before:duration-200 before:bg-secondary-01 before:absolute before:inset-1/2 before:-translate-1/2 ">
                      <Github className="group-hover/link:*:fill-secondary-01 group-hover/link:**:stroke-dark-10 isolate" />
                    </div>
                    <p className="font-chakra-petch text-base font-medium -tracking-tighter">
                      mStof
                    </p>
                  </a>
                  <a href="https://www.instagram.com/_mstofel" className="flex gap-2 items-center group/link external" target="_blank">
                    <div className="relative size-8 border-2 border-secondary-01 overflow-hidden flex justify-center items-center text-3 group-hover/link:before:scale-100 group-hover/link:border-dark-10 before:size-16 before:scale-0 before:rounded-full before:transition before:duration-200 before:bg-secondary-01 before:absolute before:inset-1/2 before:-translate-1/2 ">
                      <Instagram className="group-hover/link:*:fill-secondary-01 group-hover/link:**:stroke-dark-10 isolate" />
                    </div>
                    <p className="font-chakra-petch text-base font-medium -tracking-tighter">
                      @_mstofel
                    </p>
                  </a>
                {/* </div> */}
                <a href="" className="flex gap-2 items-center group/link external" target="_blank">
                  <div className="relative size-8 border-2 border-secondary-01 overflow-hidden flex justify-center items-center text-3 group-hover/link:before:scale-100 group-hover/link:border-dark-10 before:size-16 before:scale-0 before:rounded-full before:transition before:duration-200 before:bg-secondary-01 before:absolute before:inset-1/2 before:-translate-1/2 ">
                    <Email className="group-hover/link:*:fill-dark-10 isolate" />
                  </div>
                  <p className="font-chakra-petch text-base font-medium -tracking-tighter">
                    mateus.stofel.brito@gmail.com
                  </p>
                </a>

              </div>

            </div>
          </div>
        </article>
        <Image
          src={perfil}
          alt="eu"
          className="w-full h-full object-cover z-60 isolate"
        />
      </article>
      <article className="flex-1 w-full bg-blue-900 border-x-secondary-01 border-x-2">
        <Image
          src={perfil}
          alt="eu"
          className="w-full h-full object-cover z-60 isolate"
        />
      </article>
      <article className="flex-1 w-full bg-green-900 border-l-secondary-01 border-l-2">
        <Image
          src={perfil}
          alt="eu"
          className="w-full h-full object-cover z-60 isolate"
        />
      </article>
    </main>
  );
};

export default Desenvolvedores;
