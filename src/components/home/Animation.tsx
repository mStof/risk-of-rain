"use client";
import React, { RefAttributes, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Grub } from "@/utils/models/Grub";
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
  }, [contextSafe]); // Executa apenas uma vez para setar a função

  useFrame(() => cameraRef.current?.lookAt(0, 0, 0));

  const handleAnimationexit = contextSafe(() => {
    if (group.current && group.current?.position.x > 0.25) return;
    gsap.to(group.current?.rotation as gsap.TweenTarget, {
      x: 0.25,
      y: 1
    });
  });

  const handleClick = () => {
    console.log(cameraRef.current?.position, cameraRef.current?.rotation);
  };

  useGSAP(() => {
    const listener = handleAnimationSeekCursorRef.current;

    const positions = [
      [0, 1, 15],
      // [7, 12.9, 15.9],
      [5.7, 2.9, 6.2],
      // [-6.2, 1.4, 6.2],
      [-6.7, 2.0, 5.4],
      [-6.7, 2.0, 5.4],
    ];
    const rotations = [
      [0, 0, 0],
      [-0.9, -0.3, 0.45],
      [-0.2449372418256158, 1.1970034175465012, 0.22862770341878763],
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

    // window.addEventListener("click", handleClick);
    if (progressAnim <= 0 && listener) {
      window.addEventListener("mousemove", listener);
    } else {
      if (listener) window.removeEventListener("mousemove", listener);
      gsap.to(group.current?.rotation as gsap.TweenTarget, {
        x: 0,
        y: 0
      });
    }

    return () => {
      if (progressAnim > 0) {
      }
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
        // position={[8.3, 12.5, 15.1]}
        // position={[57, 2.9, 6.2]}
      />
      <Grub ref={group}  />
      {/* <axesHelper args={[300]} /> */}
    </>
  );
};

export default Animation;
