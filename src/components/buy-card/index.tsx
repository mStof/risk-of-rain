"use client";
import Header from "./price/Header";
import Plans from "./plans";
import Price from "./price";
import { useReturn } from "@/context/buy-card/return";

function Page() {
  const { returnToPlans } = useReturn();
  
  return (
    <div className="w-full h-full flex items-center justify-center absolute inset-0 bg-neutral-bg/25">
      <article className="w-[calc(100vw_-_64px)] h-[calc(100vh_-_64px)] flex flex-col gap-8 bg-dark-10 bg-(image:--bg-pattern) border-4 border-secondary-01 p-8">
        <Header />
        {returnToPlans ? (<Plans />) : (<Price/>)}
      </article>
    </div>
  );
}

export default Page;
