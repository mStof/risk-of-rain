"use client";
import React, { lazy, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import { Grub } from "@/utils/models/Grub";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import {
  Group,
  Object3DEventMap,
  PerspectiveCamera as TypePerspectiveCamera
} from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type AnimationType = {
  progressAnim: number;
};

const GrubLazy = lazy(() => import("@/utils/models/Grub"));

const Animation = ({ progressAnim }: AnimationType) => {
  const group = useRef<Group<Object3DEventMap>>(null);
  const cameraRef = useRef<TypePerspectiveCamera>(null);
  const { contextSafe } = useGSAP();
  const handleAnimationSeekCursorRef = useRef<(e: MouseEvent) => void>(null);

  useEffect(() => {
    // Crie a função apenas uma vez
    if (!handleAnimationSeekCursorRef.current) {
      
      handleAnimationSeekCursorRef.current = contextSafe((e: MouseEvent) => {
        if (group.current && group.current?.position.x > 0.5) return;
        gsap.to(group.current?.rotation as gsap.TweenTarget, {
          x: -0.75 + (e.clientY / window.innerHeight) * 1.5,
          y: -0.75 + (e.clientX / window.innerWidth) * 1.5
        });
      });
    }
    window.addEventListener("mousemove", handleAnimationSeekCursorRef.current);
    return () => {
      if (handleAnimationSeekCursorRef.current) window.removeEventListener("mousemove", handleAnimationSeekCursorRef.current);

    };
  }, [contextSafe]); // Executa apenas uma vez para setar a função

  useFrame(() => cameraRef.current?.lookAt(0, 0, 0));

  const handleClick = () => {
    console.log(cameraRef.current?.position, cameraRef.current?.rotation);
  };

  useGSAP(() => {
    const handleMouseMove = handleAnimationSeekCursorRef.current;

    const positions = [
      [0, 1, 15],
      [5.7, 2.9, 6.2],
      [-6.7, 2.0, 5.4],
      [-6.7, 2.0, 5.4],
    ];

    const segment = 1 / 3;
    const segmentIndex = Math.floor(progressAnim / segment);

    const porcentage = (progressAnim % segment) / segment;

    if (segmentIndex + 1 >= positions.length) return;
    const [startX, startY, startZ] = positions[segmentIndex];
    const [endX, endY, endZ] = positions[segmentIndex + 1];
    const x = startX + (endX - startX) * porcentage;
    const y = startY + (endY - startY) * porcentage;
    const z = startZ + (endZ - startZ) * porcentage;
    // console.log(segmentIndex, porcentage, startX, endX);
    // console.log(x, y, z);

    gsap.to(cameraRef.current?.position as gsap.TweenTarget, {
      x,
      y,
      z
    });

    if (progressAnim <= 0 && handleMouseMove) {
      window.addEventListener("mousemove", handleMouseMove);

    } else {
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
      gsap.to(group.current?.rotation as gsap.TweenTarget, {
        x: 0,
        y: 0
      });
    }

    return () => {
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [progressAnim]);

  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={45}
        near={0.1}
        far={1000}
        position={[0, 1, 15]}
      />
      <GrubLazy ref={group}  />
      {/* <axesHelper args={[300]} /> */}
    </>
  );
};

export default Animation;
