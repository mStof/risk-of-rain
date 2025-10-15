"use client";
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Grub } from "@/utils/models/Grub";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Group, Object3DEventMap } from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Overlay from "@/components/home/Overlay";

export default function Home() {
  const group = useRef<Group<Object3DEventMap>>(null);

  const { contextSafe } = useGSAP();

  const handleAnimationSeekCursor = contextSafe(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (group.current && group.current?.position.x > 0.5) return;
      gsap.to(group.current?.rotation as gsap.TweenTarget, {
        x: -0.75 + (e.clientY / window.innerHeight) * 1.5,
        y: -0.75 + (e.clientX / window.innerWidth) * 1.5
      });
    }
  );

  const handleAnimationexit = contextSafe(() => {
    if (group.current && group.current?.position.x > 0.25) return;
    gsap.to(group.current?.rotation as gsap.TweenTarget, {
      x: 0.25,
      y: 1
    });
  });

  return (
    <main className="bg-neutral-bg bg-(image:--bg-pattern) flex flex-col items-center justify-center h-screen overflow-hidden **:[&::-webkit-scrollbar]:h-2">
      <Suspense fallback={null}>
        <Canvas
          className="size-[25rem]"
          onMouseMove={(e) => handleAnimationSeekCursor(e)}
          onMouseLeave={handleAnimationexit}
        >
          <ambientLight intensity={1} />
          <OrbitControls
            minDistance={1}
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <ScrollControls horizontal pages={2} damping={0}>
            <Grub ref={group} />
            <Scroll html>
              <Overlay />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </main>
  );
}
