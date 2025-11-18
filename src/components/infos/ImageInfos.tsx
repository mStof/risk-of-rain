"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import home from "@/../public/img/infos/como_usar/home.png";
import navPrin from "@/../public/img/infos/como_usar/navPrin.png";
import gerenAmbien from "@/../public/img/infos/como_usar/gerenAmbien.png";
import controleRapido from "@/../public/img/infos/como_usar/controleRapido.png";
import hist from "@/../public/img/infos/como_usar/disp.png";
import perfil from "@/../public/img/infos/como_usar/perfil.png";
import status from "@/../public/img/infos/como_usar/status.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const ImageInfos = ({ progress }: { progress: number }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);
  const [currentImg, setCurrentImg] = useState(0);
  const imgs = [
    home,
    navPrin,
    gerenAmbien,
    controleRapido,
    status,
    perfil,
    hist
  ];

  useEffect(() => {
    if (!tl.current) return;
    setCurrentImg(Math.floor((progress / 100) * 6));
    if (Math.ceil(progress) >= 100) {
      tl.current.set(imageContainerRef.current, { x: 288, opacity: 1 });
      return;
    }

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
      className="fixed w-3/12 h-10/12 bg-red-700 inset-0 translate-x-72 self-center"
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
