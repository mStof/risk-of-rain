import Image from "next/image";
import React from "react";
import WindowCard from "./WindowCard";
import InfoSec from "./InfoSec";
import img from "@/../public/base.svg";

const Price = () => {
  return (
    <section className="w-full flex-1 flex gap-16">
      <section className="w-full h-full flex flex-col gap-6">
        <section className="w-full h-1/2 border-2 border-secondary-01 bg-dark-10 bg-radial from-white/10 to-transparent to-85% flex items-center justify-center ">
          <Image src={img} alt="" />
        </section>
        <section className="w-full h-1/2 flex gap-4">
          <WindowCard title="bastidora" price={99.99} img={img} />
          <WindowCard title="cudocisse" price={99.99} img={img} />
          <WindowCard title="janela" price={99.99} img={img} />
        </section>
      </section>
      <InfoSec />
    </section>
  );
};

export default Price;
