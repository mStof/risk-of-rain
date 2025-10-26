"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname, useRouter } from "next/navigation";

gsap.registerPlugin(useGSAP);

type TransitionProps = {
  children: ReactNode;
};

const Index = ({ children }: TransitionProps) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const bgElem = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLSpanElement>(null);
  const line2 = useRef<HTMLSpanElement>(null);
  const line3 = useRef<HTMLSpanElement>(null);
  const line4 = useRef<HTMLSpanElement>(null);
  const RText = useRef<HTMLParagraphElement>(null);

  const enterTransition = (url: string) => {
    const tl = gsap.timeline({
      onComplete: () => {
        push(url);
        setTimeout(() => {
          tl.reverse();
        }, 100);
      }

      // onComplete: () => push(url)
    });

    tl.to(bgElem.current, {
      scaleX: 1,
      duration: 0.75,
      transformOrigin: "left"
    });
    tl.to(
      line4.current,
      {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.inOut",
        transformOrigin: "right"
      },
      "-=75%"
    );
    tl.to(
      line2.current,
      {
        scaleY: 1,
        duration: 0.5,
        ease: "power2.inOut",
        transformOrigin: "bottom"
      },
      "-=75%"
    );
    tl.to(
      line1.current,
      {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.inOut",
        transformOrigin: "left"
      },
      "-=75%"
    );
    tl.to(
      line3.current,
      {
        scaleY: 1,
        duration: 0.5,
        transformOrigin: "top",
        ease: "power2.inOut"
      },
      "-=75%"
    );
    tl.to(
      RText.current,
      {
        opacity: 1,
        translateY: -12,
        translateX: -12,
        duration: 0.5,
        ease: "power2.inOut"
      },
      "-=75%"
    );
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      enterTransition(url);
    };

    const links = document.querySelectorAll<HTMLLinkElement>("a:not(.external)");
    console.log(links);

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.href;
        const url = new URL(href).pathname;
        console.log(url, pathname);
        
        if (url !== pathname) handleRouteChange(url);
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => handleRouteChange(link.href));
      });
    };
  }, [pathname, enterTransition, isTransitioning]);

  return (
    <>
      <div
        ref={bgElem}
        className="absolute h-svh w-full scale-x-0 z-90 bg-dark-10 bg-(image:--bg-patter) flex justify-center items-center p-60"
      >
        {/* <Image
            ref={imageElem}
            src={logoBg}
            alt="Logo do Risk Of Rain"
            className="h-auto w-full isolate opacity-0"
          ></Image> */}
        <div className="h-full w-auto aspect-square rotate-45 relative flex bg-emeald-500 translate-y-0.5">
          <span
            ref={line1}
            className="bg-secondary-01 h-1 w-full scale-x-0 inset-0 absolute z-50"
          ></span>
          <span
            ref={line2}
            className="bg-secondary-01 h-full w-1 scale-y-0 absolute z-50"
          ></span>
          <span
            ref={line3}
            className="bg-secondary-01 h-7/12 w-1 scale-y-0 left-full -transate-x-full absolute z-50"
          ></span>
          <span
            ref={line4}
            className="bg-secondary-01 h-1 w-7/12 scale-x-0 top-full -tranlate-y-full absolute z-50"
          ></span>
          <p
            ref={RText}
            className="-rotate-45 flex items-center justify-center size-full p-1 font-major-mono-display text-secondary-01 text-[13rem] -translate-1 opacity-0"
          >
            R
          </p>
        </div>
      </div>
      {children}
    </>
  );
};

export default Index;
