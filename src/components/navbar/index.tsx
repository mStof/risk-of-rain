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
  const [userImg, setUserImg] = useState("");
  const [userName, setUserName] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { setIsOpen } = useBuyModal();
  const [user] = useAuthState(auth); 
  console.log(user);
   

  useEffect(() => setIsOpenNav(false), []);

  useEffect(() => { 
    console.log("exec");
       
    if (user?.photoURL) setUserImg( user.photoURL );
    else setUserImg( "" );
    if (user?.displayName) setUserName( user.displayName );
    else setUserName("");
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
        className="text-secondary-10 -translate-x-full duration-300 bg-dark-10 h-full w20 transition-all w-126 fixed border-r-2 border-secondary-01 px-2 py-2 z-70 flex flex-col"
      >
          <Link href="/" className="flex items-center w-full gap-4" onClick={() => setIsOpenNav(false)}>
        <div className="border-b border-secondary-01 w-full flex items-center gap-4 px-4 py-4">
            <CaseIcon
              colors="base"
              sizes="md2"
              Icon={
                <p className="font-major-mono-display text-[1.5rem] text-secondary-01 mb-1">
                  R
                </p>
              }
            />
            <p className="pointer-events-none  block [:not(:]:delay-1000 w-full w0 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              Risk of RAin
            </p>
        </div>
          </Link>
          <Link href="/infos/como-usar" className="flex gap-4 items-center w-full" onClick={() => setIsOpenNav(false)}>
        <div className="border-b border-secondary-01 w-full flex items-center justify-start gap-2 px-2 py-4">
            <p className="pointer-events-none text-center textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase">
              I.
            </p>
            <p className="pointer-events-none w-full w0 absolute left-16 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              como usar
            </p>
        </div>
          </Link>
          <Link href="/infos/sobre-o-sistema" className="flex gap-4 items-center w-full" onClick={() => setIsOpenNav(false)}>
        <div className="border-b border-secondary-01 w-full flex items-center justify-start gap-2 px-2 py-4">
            <p className="pointer-events-none text-center textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase">
              II.
            </p>
            <p className="pointer-events-none w-full w0 absolute left-16 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              sobre o sistema
            </p>
        </div>
          </Link>
          <Link href="/infos/proposito" className="flex gap-4 items-center w-full" onClick={() => setIsOpenNav(false)}>
        <div className="border-b border-secondary-01 w-full flex items-center justify-start gap-2 px-2 py-4">
            <p className="pointer-events-none text-center textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase">
              III.
            </p>
            <p className="pointer-events-none w-full w0 absolute left-16 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              central do projeto
            </p>
        </div>
          </Link>
          <Link
            href="/infos/como-instalar"
            className="flex gap-4 items-center w-full bg-blue800"
          >
        <div className="border-b border-secondary-01 w-full flex items-center justify-start gap-2 px-2 py-4">
            <p className="pointer-events-none text-center textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase ">
              Iv.
            </p>
            <p className="pointer-events-none w-full w0 absolute left-16 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              detalhes da instalação
            </p>
        </div>
          </Link>
          <Link
            href="/criadores"
            className="flex gap-4 items-center w-full bg-blue800"
          >
        <div className="border-b border-secondary-01 w-full flex items-center justify-start gap-2 px-2 py-4">
            <p className="pointer-events-none text-center textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase ">
              v.
            </p>
            <p className="pointer-events-none w-full w0 absolute left-16 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              desenvolvedores
            </p>
        </div>
          </Link>
        <div
          className="border-b border-secondary-01 w-full flex items-center justify-start justifycenter gap-4 px-2 py-4"
          onClick={() => setIsOpen(true)}
        >
          <p className="text-center textright text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-12 lowercase">
            vI.
          </p>
          <p className="w-full w0  text-nowrap overflow-hidden left-16 absolute transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
            comprar
          </p>
        </div>
        <div className="border-y border-secondary-01 w-full flex items-center gap-4 px-4 py-4 mt-auto">
          <Link href="/user/perfil" className="flex items-center w-full gap-4" onClick={() => setIsOpenNav(false)}>
            <PerfilCase img={userImg} sizes="lineSm" />
            <p className="w-full w0 block [:not(:]:delay-1000  text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6 lowercase">
              {userName ? userName : "Logue"}
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
});

export default Navbar;
Navbar.displayName = "Navbar";
