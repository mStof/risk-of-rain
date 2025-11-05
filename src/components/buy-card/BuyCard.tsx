"use client";
import Header from "./Header";
import Plans from "./plans";
import Price from "./price";
import Payment from "./payment";
import { useNavigation } from "@/context/buy-card/useNavigation";

function BuyCard() {
  const { navigation } = useNavigation();

  // TODO: Mudar os preços dos cards

  return (
    <div className="w-full h-full flex items-center justify-center absolute inset-0 bg-neutral-bg/75 z-80">
      <article className="text-secondary-10  w-[calc(100vw_-_64px)] h-[calc(100svh_-_64px)] flex flex-col gap-8 bg-dark-10 bg-(image:--bg-pattern) border-4 border-secondary-01 p-8">
        <Header sectionPayment={navigation === "payment"} />
        {/* <Link href="./../" className="absolute inset-2">VOLTAR PARA O MENU</Link> */}
        {navigation === "buy" && <Price />}
        {navigation === "plans" && <Plans />}
        {navigation === "payment" && <Payment />}
      </article>
    </div>
  );
}

export default BuyCard;
