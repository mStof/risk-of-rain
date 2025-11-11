import { useMouse } from "@/context/useMouse";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Dispatch, memo, SetStateAction, useCallback, useRef } from "react";

gsap.registerPlugin(useGSAP);

type ButtonNavType = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

const ButtonNav = memo(({ setIsOpen, isOpen }: ButtonNavType) => {
  const { contextSafe } = useGSAP();
  const { setSelected } = useMouse();
  const handleMouseEnter = useCallback(() => {
    setSelected(true);
  },[]);
  const handleMouseExit = useCallback(() => {
    setSelected(false);
  },[]);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  const handleOpenNav = contextSafe(() => {
    if (isOpen) {
      setIsOpen(false);
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
      setIsOpen(true);
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
    <button
      onClick={handleOpenNav}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      className="bg-dark-09 size-10 fixed inset-full translate-[calc(-100%_-_2rem)] z-70 flex flex-col justify-center gap-1.5 p-2 outline-2 -outline-offset-4 outline-secondary-01"
    >
      <span
        ref={line1Ref}
        className="w-full h-0.5 bg-secondary-01 block"
      ></span>
      <span ref={line2Ref} className="w-1/2 h-0.5 bg-secondary-01 block"></span>
    </button>
  );
});
ButtonNav.displayName = "ButtonNav";
export default ButtonNav;
