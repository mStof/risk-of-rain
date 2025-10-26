"use client";
import { useMouse } from "@/context/useMouse";
import { useEffect, useState } from "react";

export const Mouse = () => {
  const [coordenates, setCoordenates] = useState({ x: 20, y: 20 });
  const {selected} = useMouse();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const x = e.pageX;
      const y = e.pageY;
      setCoordenates({ x, y });
    });
  }, []);
  return (
    <div
      style={{ left: coordenates.x, top: coordenates.y }}
      className="size-8 rounded-full absolute -translate-1/2 pointer-events-none  cursor-none mix-blend-difference z-50"
    >
      <svg
        width="33"
        height="36"
        viewBox="0 0 33 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="translate-1/2"
      >
        {selected ? (
          <>
            <g clipPath="url(#clip0_1289_616)">
              <path d="M26 17.5L8.5 29L5 6.5L26 17.5Z" fill="#DBB33A" />
              <path
                d="M32.1493 16.8703L6.13004 35.4983L0.511719 0.165039L32.1493 16.8703ZM2.81728 3.38542L7.42147 32.5256L28.8794 17.1633L2.81728 3.38542Z"
                fill="#DBB33A"
              />
              <path
                d="M27 17.1445L8.08443 30.6867L4 5L27 17.1445ZM5.67611 7.34116L9.02328 28.5256L24.6228 17.3575L5.67611 7.34116Z"
                fill="#DBB33A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1289_616">
                <rect width="33" height="36" fill="white" />
              </clipPath>
            </defs>
          </>
        ) : (
          <path
            d="M32.1494 16.8704L6.13019 35.4984L0.511868 0.165163L32.1494 16.8704ZM2.81743 3.38554L7.42162 32.5257L28.8795 17.1634L2.81743 3.38554Z"
            fill="#DBB33A"
          />
        )}
      </svg>
    </div>
  );
};
