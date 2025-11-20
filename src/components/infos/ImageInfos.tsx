"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const ImageInfos = ({ progress, imgs }: { progress: number, imgs:StaticImageData[] }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (!tl.current) return;
    if (Math.ceil(progress) >= 100) {
      setCurrentImg(6);
      tl.current.totalTime(0);
      return;
    }
    
    setCurrentImg(Math.floor((progress / 100) * 6));
    tl.current.totalTime((progress / 100) * 6);
  }, [progress]);

  useGSAP(
    () => {
      tl.current = gsap.timeline({ repeat: 6 });
      if (!tl.current) return;
      tl.current.to(
        imageContainerRef.current,
        {
          x: 268,
          opacity: 0,
          duration: 0.84
        },
        "+=0.16"
      );

      tl.current.pause();
    },

    { scope: imageContainerRef, dependencies: [] }
  );

  return (
    <div
      ref={imageContainerRef}
      className="fixed w-3/12 h-10/12 inset-0 translate-x-72 self-center"
    >
      <Image
        src={imgs[currentImg]}
        alt="home"
        className="h-full w-auto object-cover"
      />
    </div>
  );
};

export default ImageInfos;
