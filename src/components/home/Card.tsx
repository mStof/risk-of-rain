import Image from "next/image";
import React, { useRef } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useMouse } from "@/context/useMouse";

gsap.registerPlugin(useGSAP);

type CardType = {
  link: string;
  title: string;
  subtitle?: string;
  imgConfig: { src: string | StaticImport; alt: string };
};

const Card = ({ link, imgConfig, subtitle, title }: CardType) => {
  const { setSelected } = useMouse();
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
    setSelected(true);
    gsap.to(viewRef.current, {
      opacity: 1,
      duration: 0.2
    });
  });
  const handleOut = contextSafe(() => {
    setSelected(false);
    gsap.to(viewRef.current, {
      opacity: 0,
      duration: 0.2
    });
  });

  return (
    <Link href={link} className="">
      <section
        ref={sectionRef}
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
        onMouseMove={(e) => handleHover(e)}
        className="cursor-(--cursor-pointer) w-[34rem] h-[40rem] backdrop-blur-none relative flex flex-col gap-12 bg-emerald00 py-16 px-20 border-2 border-secondary-01 "
      >
        <p
          ref={viewRef}
          className="absolute font-major-mono-display opacity-0 w-fit h-fit text-secondary-01 text-2xl leading-6 z-30 inset-0"
        >
          Veja
        </p>
        <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm inset-0 isolate"></div>
        <div className="flex flex-col gap-2 isolate">
          <p className="text-center font-major-mono-display text-h6 leading-8 text-dark-05">
            {subtitle}
          </p>
          <h2 className="text-center font-major-mono-display text-h4 leading-12 w-full text-secondary-10">
            {title}
          </h2>
        </div>
        <Image
          src={imgConfig.src}
          alt={imgConfig.alt}
          className="w-full h-full isolate object-contain"
        />
      </section>
    </Link>
  );
};

export default Card;
