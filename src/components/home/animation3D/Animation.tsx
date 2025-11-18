"use client";
import React, { lazy, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
// import { Grub } from "@/utils/models/Grub";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import {
  DirectionalLight,
  Group,
  Object3DEventMap,
  PerspectiveCamera as TypePerspectiveCamera
} from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { convertRadiansToDegrees } from "@/functions/convertRadiansToDegrees";

type AnimationType = {
  progressAnim: number;
};

const CaseNormalLazy = lazy(() => import("@/utils/models/caseNormal"));

const Animation = ({ progressAnim }: AnimationType) => {
  const group = useRef<Group<Object3DEventMap>>(null);
  const cameraRef = useRef<TypePerspectiveCamera>(null);
  const { contextSafe } = useGSAP();
  const handleAnimationSeekCursorRef = useRef<(e: MouseEvent) => void>(null);

  useEffect(() => {
    // Crie a função apenas uma vez
    if (!handleAnimationSeekCursorRef.current) {
      handleAnimationSeekCursorRef.current = contextSafe((e: MouseEvent) => {
        const xDeg =
          45 +
          (-30 * (e.clientY - window.innerHeight / 2)) /
            (-window.innerHeight / 2);
        const yDeg =
          90 +
          (-30 * (e.clientX - window.innerWidth / 2)) /
            (-window.innerWidth / 2);
        const [x, y, z] = convertRadiansToDegrees(xDeg, yDeg, xDeg) as number[];
        if (group.current && group.current?.position.x > 0.5) return;
        gsap.to(group.current?.rotation as gsap.TweenTarget, { x, y, z });
      });
    }
    window.addEventListener("mousemove", handleAnimationSeekCursorRef.current);
    return () => {
      if (handleAnimationSeekCursorRef.current)
        window.removeEventListener(
          "mousemove",
          handleAnimationSeekCursorRef.current
        );
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
      [7.85, 0.87, 13.52],
      [-7.41, 0.24, 11.63],
      [-7.41, 0.24, 11.63]
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

    if (progressAnim <= 0 && handleMouseMove) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      const [x, y, z] = convertRadiansToDegrees(90, 90, 0) as number[];

      if (handleMouseMove)
        window.removeEventListener("mousemove", handleMouseMove);
      gsap.to(group.current?.rotation as gsap.TweenTarget, { x, y, z });
    }

    return () => {
      if (handleMouseMove)
        window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [progressAnim]);

  return (
    <>
      <ambientLight intensity={10} />
      <directionalLight position={[-5, 0, 2]} intensity={5} />
      <directionalLight position={[0, 5, 2]} intensity={5} />
      <directionalLight position={[0, -5, 2]} intensity={5} />
      <directionalLight position={[0, 0, 20]} intensity={5} />
      <directionalLight position={[5, 0, -2]} intensity={5} />
      <OrbitControls />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={45}
        near={0.1}
        far={1000}
        position={[0, 1, 15]}
      />
      <CaseNormalLazy ref={group} />
      <axesHelper args={[300]} />
    </>
  );
};

export default Animation;
