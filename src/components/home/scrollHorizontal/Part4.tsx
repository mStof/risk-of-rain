import React from "react";
import AnimPart4 from "./AnimPart4";
import Image from "next/image";
import img from "@/../public/img/infos/proposito.png";

const Part4 = () => {
  return (
    <section
      id="sec"
      className="w-screen relative h-full flex justify-center items-center"
    >
      {/* <AnimPart4 /> */}
      <Image src={img} alt="" className="w-9/12" />

      {/* <div className="bg-red00 w-full h-full absolute inset-0">

      </div> */}

      {/* <h2 className="font-heading text-h6 leading-8 w-fit z-20">
        Clique na casa <br />
        para começar.
      </h2> */}
    </section>
  );
};

export default Part4;
