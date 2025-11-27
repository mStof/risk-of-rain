"use client";
import { memo, useEffect, useRef, useState } from "react";
import PerfilCase from "@/components/PerfilCase";
import { CaseIcon } from "@/components/icons";
import Link from "@/components/Link";
import { useBuyModal } from "@/context/useBuyModal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ButtonNav from "./button";
import { auth } from "@/services/database/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

gsap.registerPlugin(useGSAP);

const Navbar = memo(() => {
  const [userConfig, setUserConfig] = useState({ img: "", name: "" });
  const navRef = useRef<HTMLElement>(null);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { setIsOpen } = useBuyModal();
  const [user] = useAuthState(auth);

  useEffect(() => setIsOpenNav(false), []);

  useEffect(() => {    
    if (user?.photoURL && user?.displayName)
      setUserConfig({ img: user.photoURL, name: user.displayName });
  }, [user]);

  useGSAP(() => {
    if (!isOpenNav) {
      gsap.to(navRef.current, {
        x: "-100%",
        duration: 0.15,
        ease: "none"
      });
    } else {
      gsap.to(navRef.current, {
        x: 0,
        duration: 0.15,
        ease: "none"
      });
    }
  }, [isOpenNav]);

  return (
    <>
      <ButtonNav setIsOpen={setIsOpenNav} isOpen={isOpenNav} />
      <nav
        ref={navRef}
        className="text-secondary-10 -translate-x-full duration-300 group bg-dark-10 h-full w-20 transition-all hover:w-126 fixed border-r-2 border-secondary-01 px-2 py-2 z-70 flex flex-col"
      >
        <div className="border-b border-secondary-01 w-full flex items-center gap-4 px-4 py-4">
          <Link href="/" className="flex items-center w-full gap-4" onClick={() => setIsOpenNav(false)}>
            <CaseIcon
              colors="base"
              sizes="md2"
              Icon={
                <p className="font-major-mono-display text-[1.5rem] text-secondary-01 mb-1">
                  R
                </p>
              }
            />
            <p className="pointer-events-none hidden group-hover:block group-[:not(:hover)]:delay-1000 group-hover:w-full w-0 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              Risk of RAin
            </p>
          </Link>
        </div>
        <div className="border-b border-secondary-01 w-full  group-hover:justify-start gap-2 px-2 py-4">
          <Link href="/infos/como-usar" className="flex gap-4 items-center w-full" onClick={() => setIsOpenNav(false)}>
            <p className="pointer-events-none text-center group-hover:textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase">
              I.
            </p>
            <p className="pointer-events-none group-hover:w-full w-0 absolute left-16 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              como usar
            </p>
          </Link>
        </div>
        <div className="border-b border-secondary-01 w-full flex items-center group-hover:justify-start gap-2 px-2 py-4">
          <Link href="/infos/sobre-o-sistema" className="flex gap-4 items-center w-full" onClick={() => setIsOpenNav(false)}>
            <p className="pointer-events-none text-center group-hover:textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase">
              II.
            </p>
            <p className="pointer-events-none group-hover:w-full w-0 absolute left-16 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              sobre o sistema
            </p>
          </Link>
        </div>
        <div className="border-b border-secondary-01 w-full flex items-center group-hover:justify-start gap-2 px-2 py-4">
          <Link href="/infos/proposito" className="flex gap-4 items-center w-full" onClick={() => setIsOpenNav(false)}>
            <p className="pointer-events-none text-center group-hover:textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase">
              III.
            </p>
            <p className="pointer-events-none group-hover:w-full w-0 absolute left-16 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              central do projeto
            </p>
          </Link>
        </div>
        <div className="border-b border-secondary-01 w-full flex items-center group-hover:justify-start gap-2 px-2 py-4">
          <Link
            href="/infos/como-instalar"
            className="flex gap-4 items-center w-full bg-blue800"
          >
            <p className="pointer-events-none text-center group-hover:textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase ">
              Iv.
            </p>
            <p className="pointer-events-none group-hover:w-full w-0 absolute left-16 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              detalhes da instalação
            </p>
          </Link>
        </div>
        <div className="border-b border-secondary-01 w-full flex items-center group-hover:justify-start gap-2 px-2 py-4">
          <Link
            href="/criadores"
            className="flex gap-4 items-center w-full bg-blue800"
          >
            <p className="pointer-events-none text-center group-hover:textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase ">
              D.
            </p>
            <p className="pointer-events-none group-hover:w-full w-0 absolute left-16 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              desenvolvedores
            </p>
          </Link>
        </div>
        <div
          className="border-b border-secondary-01 w-full flex items-center group-hover:justify-start justifycenter gap-4 px-2 py-4"
          onClick={() => setIsOpen(true)}
        >
          <p className="text-center group-hover:textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase">
            C.
          </p>
          <p className="group-hover:w-full w-0  text-nowrap overflow-hidden left-16 absolute transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
            comprar
          </p>
        </div>
        <div className="border-y border-secondary-01 w-full flex items-center gap-4 px-4 py-4 mt-auto">
          <Link href="/user/perfil" className="flex items-center w-full gap-4" onClick={() => setIsOpenNav(false)}>
            <PerfilCase img={userConfig.img} sizes="lineSm" />
            <p className="group-hover:w-full w-0 hidden group-hover:block group-[:not(:hover)]:delay-1000  text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6 lowercase">
              {userConfig.name ? userConfig.name : "Logue"}
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
});

export default Navbar;
Navbar.displayName = "Navbar";
