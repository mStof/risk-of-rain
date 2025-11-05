"use client";
import { useRef, useState } from "react";
import PerfilCase from "@/components/PerfilCase";
import { CaseIcon } from "@/components/icons";
import Link from "next/link";
import { useBuyModal } from "@/context/useBuyModal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMouse } from "@/context/useMouse";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/database/FirebaseConfig";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { contextSafe } = useGSAP(() => {}, []);

  const { setIsOpen } = useBuyModal();

  const { setSelected } = useMouse();

  const [user, loading, error] = useAuthState(auth);

  useGSAP(() => {});
  const handleOpenNav = contextSafe(() => {
    if (isOpenNav) {
      setIsOpenNav(false);
      gsap.to(navRef.current, {
        x: "-100%",
        duration: 0.15,
        ease: "none"
      });
      gsap.to(line1Ref.current, {
        rotate: 0,
        left: 0,
        top: 0,
        x: 0,
        y: 0,
        width: "100%",
        position: "relative",
        duration: 0.15
      });
      gsap.to(line2Ref.current, {
        rotate: 0,
        left: 0,
        top: 0,
        x: 0,
        y: 0,
        position: "relative",
        duration: 0.15
      });
    } else {
      setIsOpenNav(true);
      gsap.to(navRef.current, {
        x: 0,
        duration: 0.15,
        ease: "none"
      });
      gsap.to(line1Ref.current, {
        rotate: 45,
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
        width: "50%",
        position: "absolute",
        duration: 0.15
      });
      gsap.to(line2Ref.current, {
        rotate: -45,
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
        position: "absolute",
        duration: 0.15
      });
    }
  });

  return (
    <>
      <button
        onClick={handleOpenNav}
        onMouseEnter={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
        className="bg-dark-09 size-10 fixed inset-full translate-[calc(-100%_-_2rem)] z-70 flex flex-col justify-center gap-1.5 p-2 outline-2 -outline-offset-4 outline-secondary-01"
      >
        <span
          ref={line1Ref}
          className="w-full h-0.5 bg-secondary-01 block"
        ></span>
        <span
          ref={line2Ref}
          className="w-1/2 h-0.5 bg-secondary-01 block"
        ></span>
      </button>
      <nav
        ref={navRef}
        className="-translate-x-full duration-300 group bg-dark-10 h-full w-20 transition-all hover:w-96 fixed border-r-2 border-secondary-01 px-2 py-2 z-70 flex flex-col"
      >
        <div className="border-b border-secondary-01 w-full flex items-center gap-4 px-4 py-4">
          <Link href="/" className="flex items-center w-full gap-4">
            <CaseIcon
              colors="base"
              sizes="md2"
              Icon={
                <p className="font-major-mono-display text-[1.5rem] text-secondary-01 mb-1">
                  R
                </p>
              }
            />
            <p className="hidden group-hover:block group-[:not(:hover)]:delay-1000 group-hover:w-full w-0 text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              Risk of RAin
            </p>
          </Link>
        </div>
        <div className="border-b border-secondary-01 w-full  group-hover:justify-start gap-2 px-2 py-4">
          <Link href="/infos/slug" className="flex items-center w-full">
            <p className="text-center text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-9 group-hover:text-left lowercase">
              I.
            </p>
            <p className="group-hover:w-full w-0  text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              como usar
            </p>
          </Link>
        </div>
        <div className="border-b border-secondary-01 w-full flex items-center group-hover:justify-start gap-2 px-2 py-4">
          <Link href="/infos/slug" className="flex items-center w-full">
            <p className="text-center text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-9 group-hover:text-left lowercase">
              II.
            </p>
            <p className="group-hover:w-full w-0  text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              sobre o sistema
            </p>
          </Link>
        </div>
        <div className="border-b border-secondary-01 w-full flex items-center group-hover:justify-start gap-2 px-2 py-4">
          <Link href="/infos/slug" className="flex items-center w-full">
            <p className="text-center text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-9 group-hover:text-left lowercase">
              III.
            </p>
            <p className="group-hover:w-full w-0  text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              central do projeto
            </p>
          </Link>
        </div>
        <div className="border-b border-secondary-01 w-full flex items-center group-hover:justify-start gap-2 px-2 py-4">
          <Link href="/infos/slug" className="flex items-center w-full">
            <p className="text-center text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-9 group-hover:text-left lowercase ">
              Iv.
            </p>
            <p className="group-hover:w-full w-0  text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
              detalhes da instalação
            </p>
          </Link>
        </div>
        <div
          className="border-b border-secondary-01 w-full flex items-center group-hover:justify-start gap-2 px-2 py-4"
          onClick={() => setIsOpen(true)}
        >
          <p className="text-center text-[1rem] font-major-mono-display leading-6 -tracking-[.20rem] bg-red500 w-9 group-hover:text-left lowercase">
            C.
          </p>
          <p className="group-hover:w-full w-0  text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6">
            comprar
          </p>
        </div>
        <div className="border-y border-secondary-01 w-full flex items-center gap-4 px-4 py-4 mt-auto">
          <Link href="/user/perfil" className="flex items-center w-full gap-4">
            <PerfilCase sizes="md2" />
            <p className="group-hover:w-full w-0 hidden group-hover:block group-[:not(:hover)]:delay-1000  text-nowrap overflow-hidden transition-all duration-300 text-[1rem] font-major-mono-display leading-6 lowercase">
              {user?.displayName}
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
