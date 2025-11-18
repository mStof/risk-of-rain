import React from "react";
import AnimPart4 from "./AnimPart4";

const Part4 = () => {
  return (
    <section
      id="sec"
      className="w-screen relative h-full flex justify-end items-end pb-20 px-13"
    >
      <div className="bg-red00 w-full h-full absolute inset-0">
        <AnimPart4 />

      </div>

      <h2 className="font-heading text-h6 leading-8 w-fit z-20">
        Clique na casa <br />
        para começar.
      </h2>
    </section>
  );
};

export default Part4;
