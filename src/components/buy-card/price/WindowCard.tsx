import Image from "next/image";
import React, { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { usePrice } from "@/context/buy-card/usePrice";
import { usePlan } from "@/context/buy-card/usePlan";

type WindowCardProps = {
  title: string;
  price: number;
  img: string | StaticImport;
};

const WindowCard = ({ title, price, img }: WindowCardProps) => {
  const { windows, plan, ...restPlan } = usePlan();
  const [quantity, setQuantity] = useState(0);
  const { setPrice, items, ...rest } = usePrice();

  const handleChange = (state: "increase" | "decrease") => {
    if (state === "increase") {
      setQuantity(quantity + 1);

      if (plan && items < windows) {
        console.log(items, windows, rest.price);
        setPrice(0, 1);
        return;
      }

      setPrice(plan ? price * (1 - 0.2) : price, 1);
      return;
    }

    if (quantity <= 0) return;

    if (state === "decrease") {
      setQuantity(quantity - 1);

      if (plan && items === 1 + windows) {
        console.log(items, windows, rest.price);
        setPrice(-rest.price + restPlan.price, -1);
        return;
      }

      if (plan && items <= windows) {
        console.log(items, windows, rest.price);
        setPrice(0, -1);
        return;
      }
      setPrice(plan ? -price * (1 - 0.2) : -price, -1);
      return;
    }
  };

  return (
    <article className="w-full h-full border-2 border-secondary-01 bg-dark-10 bg-radial p-3 from-white/10 to-transparent to-85% flex flex-col justify-between">
      <div className="flex gap-1 flex-col h-fit ">
        <h2 className="font-major-mono-display text-base">{title}</h2>
        <p className="font-major-mono-display text-xs">
          R${price.toFixed(2).replace(".", ",")}
        </p>
      </div>
      <Image src={img} alt="" className="self-center" />
      <div className="w-full flex justify-between items-center">
        <div
          className="border-2 border-secondary-01 h-full aspect-square text-base flex items-center justify-center"
          onClick={() => handleChange("increase")}
        >
          +
        </div>
        <p className="border-2 border-secondary-01 font-major-mono-display -tracking-[0.08rem]  text-base px-3 flex justify-center">
          {quantity > 9 ? quantity : `0${quantity}`}
        </p>
        <div
          className="border-2 border-secondary-01 h-full aspect-square text-base flex items-center justify-center"
          onClick={() => handleChange("decrease")}
        >
          -
        </div>
      </div>
    </article>
  );
};

export default WindowCard;
