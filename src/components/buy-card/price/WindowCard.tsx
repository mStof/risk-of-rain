import Image from "next/image";
import React, { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { usePrice } from "@/context/buy-card/usePrice";
import { usePlan } from "@/context/buy-card/usePlan";
import { Add, Small } from "@/components/icons";

type WindowCardProps = {
  title: "bastidora" | "de abrir" | "de correr";
  price: number;
  img: string | StaticImport;
};

const WindowCard = ({ title, price, img }: WindowCardProps) => {
  const { windows, plan } = usePlan();
  const [quantity, setQuantity] = useState(0);
  const { setPrice, removePrice, card } = usePrice();
  const items = card.filter((obj) => obj.nome === title).length;

  const handleChange = (state: "increase" | "decrease") => {
    const id = {bastidora: 0, "de abrir": 100, "de correr": 200};
    if (state === "increase") {
      setQuantity(quantity + 1);

      if (plan && card.length-1 < windows) {
        // console.log(items, windows, rest.price);
        setPrice({price:0, id:items+id[title], nome:title});
        return;
      }
      if (plan) return setPrice({price:price * (1 - 0.2), id:items+id[title], nome:title});
      setPrice({price:price, id:items+id[title], nome:title});
      return;
    }


    if (quantity <= 0) return;

    if (state === "decrease") {
      setQuantity(quantity - 1);
      if(quantity-1 === 0) removePrice(card.filter((obj) => obj.nome === title)[0].id);
      if (plan && card.length-1 <= windows) {
        const itemsFree = card.filter((obj) => obj.nome === title && obj.price === 0);
        console.log("free item->",itemsFree);
        
        if(itemsFree.length === 0 && card.length-1) return removePrice(items+id[title]-1);
        // if (!itemsFree[0]) return;
        removePrice(itemsFree[0].id);
        return;
      }
      // const item = 
      removePrice(items+id[title]-1);

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
      <Image src={img} alt="" className="self-center w-4/6" />
      <div className="w-full flex justify-between items-center">
        <div
          className="border-2 border-secondary-01 h-full aspect-square flex text-sm items-center justify-center"
          onClick={() => handleChange("increase")}
        >
          <Add />
        </div>
        <p className="border-2 border-secondary-01 font-major-mono-display -tracking-[0.08rem]  text-base px-3 flex justify-center">
          {quantity > 9 ? quantity : `0${quantity}`}
        </p>
        <div
          className="border-2 border-secondary-01 h-full aspect-square text-sm flex items-center justify-center"
          onClick={() => handleChange("decrease")}
        >
          <Small />
        </div>
      </div>
    </article>
  );
};

export default WindowCard;
