import Image from "next/image";
import React, { createElement, useRef } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type CardType = {
  title: string;
  subtitle?: string;
  imgConfig: { src: string | StaticImport; alt: string };
};

const Card = ({ imgConfig, subtitle, title }: CardType) => {
  const viewRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const xRef = useRef<gsap.QuickToFunc | null>(null);
  const yRef = useRef<gsap.QuickToFunc | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      xRef.current = gsap.quickTo(viewRef.current, "x", {
        duration: 1
        // ease: "power3"
      });
      yRef.current = gsap.quickTo(viewRef.current, "y", {
        duration: 1
        // ease: "power3"
      });
    },
    { scope: sectionRef }
  );

  const handleHover = contextSafe(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {

      if (xRef.current && yRef.current && sectionRef.current) {
        xRef.current(e.clientX - sectionRef.current.offsetLeft + 24);
        yRef.current(e.pageY - sectionRef.current.offsetTop + 24);
      }
    }
  );
  const handleIn = contextSafe(() => {
    gsap.to(viewRef.current, {
      opacity: 1,
      duration: 0.2
    });
  });
  const handleOut = contextSafe(() => {
    gsap.to(viewRef.current, {
      opacity: 0,
      duration: 0.2
    });
  });

  return (
    <section
      ref={sectionRef}
      onMouseEnter={handleIn}
      onMouseLeave={handleOut}
      onMouseMove={(e) => handleHover(e)}
      className="cursor-(--cursor-pointer) w-fit h-fit backdrop-blur-none relative  bg-emerald00 py-16 px-20 border-2 border-secondary-01 "
    >
      <a href="./infos/slug" className="flex flex-col gap-12">
        <p
          ref={viewRef}
          className="absolute font-major-mono-display opacity-0 text-secondary-01 text-2xl leading-6 z-30 inset-0"
        >
          View
        </p>
        <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm inset-0 isolate"></div>
        <div className="flex flex-col gap-2 isolate">
          <p className="font-major-mono-display text-h6 leading-8 text-center text-dark-05">
            {subtitle}
          </p>
          <h2 className="font-major-mono-display text-h4 leading-12 text-secondary-10">
            {title}
          </h2>
        </div>
        <Image
          src={imgConfig.src}
          alt={imgConfig.alt}
          className="w-full isolate"
        />
      </a>
    </section>
  );
};

export default Card;
