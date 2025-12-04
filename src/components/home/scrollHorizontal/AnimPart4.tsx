"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Render3D from "./3DRender";
import Image from "next/image";

const Index = () => {
  const [errorCanvas, setErrorCanvas] = useState(false);
  const [recoveryAttempts, setRecoveryAttempts] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const handleContextLost = (e: WebGLContextEvent) => {
      console.warn("WebGL Context Lost detected");
      e.preventDefault();
      setErrorCanvas(true);

      // Tentar recuperação automática após 1 segundo
      setTimeout(() => {
        if (recoveryAttempts < 2) {
          setRecoveryAttempts(prev => prev + 1);
          setErrorCanvas(false);
          console.log(`Tentativa de recuperação ${recoveryAttempts + 1}/2`);
        }
      }, 250);
    };

    const canvas = canvasContainerRef.current?.querySelector("canvas");

    if (!canvas) return;

    canvas.addEventListener(
      "webglcontextlost",
      handleContextLost as EventListener
    );
    return () => {
      canvas.removeEventListener(
        "webglcontextlost",
        handleContextLost as EventListener
      );
    };
  }, [errorCanvas, recoveryAttempts]);

  return (
    <div ref={canvasContainerRef} className="w-full h-full">
      {errorCanvas ? (
        <p>
          Ocorreu um erro ao renderizar o objeto 3D, por favor reinicie o site,
          agradecemos
        </p>
      ) : (
        // <Suspense fallback={<div className="size-8 border-4 rounded-full border-secondary-01 border-b-transparent animate-spin absolute inset-1/2 -translate-1/2"></div>}>
        //   <Canvas
        //     ref={canvasRef}
        //     className="size-[25rem] z-0"
        //     gl={{
        //       antialias: true,
        //       powerPreference: "high-performance",
        //       preserveDrawingBuffer: false
        //     }}
        //     dpr={[1, 2]}
        //     frameloop="always"
        //   >
        //     <Render3D/>
        //   </Canvas>
        // </Suspense>
        <></>
      )}
    </div>
  );
};

export default Index;
