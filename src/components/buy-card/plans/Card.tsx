import Image from "next/image";
import React from "react";
import checkImg from "@/../public/icons/check.svg";
import Button from "@/components/Button";
import { usePlan } from "@/context/buy-card/usePlan";
import { useNavigation } from "@/context/buy-card/return";
import { usePrice } from "@/context/buy-card/usePrice";

type CardProps = {
  title: string;
  price: number;
  infos: string[];
  isGray?: boolean;
  windows: number;
};

const Card = ({ title, price, infos, windows, isGray = false }: CardProps) => {
  const { setPlan } = usePlan();
  const { setNavigation } = useNavigation();
  const { setPrice, ...rest } = usePrice();

  const handlePlan = () => {
    setPrice(-rest.price + price, -rest.items);
    setPlan({ infos, plan: title, price, windows });
    setNavigation("buy");
  };

  return (
    <article className="bg-secondary-10 text-dark-10 p-6 flex flex-col w-fit gap-6">
      <div className="flex flex-col gap-4 items-center">
        <p className="font-chakra-petch -tracking-tighter text-2xl leading-none font-light">
          {title}
        </p>
        <h2 className="font-chakra-petch -tracking-tighter text-4xl text-secondary-01 leading-none font-medium">
          {price.toFixed(2).replace(".", ",")}
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-chakra-petch -tracking-tighter text-base leading-none font-light">
          Itens inclusos:
        </p>
        <div className="flex flex-col gap-4">
          {infos.map((info, index) => (
            <div
              key={index}
              className="flex w-fit gap-1 font-chakra-petch font-light"
            >
              <Image src={checkImg} alt="icone de checado" />
              <p>{info}</p>
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={handlePlan}
        title="Comprar kit essencial"
        styles="secondary"
        sizes="md"
        className="font-medium"
        gray={isGray}
      />
    </article>
  );
};

export default Card;
