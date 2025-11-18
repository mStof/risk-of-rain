import { CasaModel } from "@/utils/models/casaModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { PerspectiveCamera as TypePerspectiveCamera } from "three";

const Render3D = () => {
  const camRef = useRef<TypePerspectiveCamera>(null);
  useFrame(() => camRef.current?.lookAt(-20, -5, 0));
  const handleClick = () => {
    console.log(camRef.current?.position, camRef.current?.rotation);
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
  },[]);

  return (
    <>
      <ambientLight intensity={1} />
      {/* <OrbitControls /> */}
      <PerspectiveCamera
        ref={camRef}
        makeDefault
        fov={45}
        near={0.1}
        far={1000}
        position={[-92, 2.1, -62.3]}
      />
      <CasaModel />
      {/* <axesHelper args={[300]} /> */}
    </>
  );
};

export default Render3D;
