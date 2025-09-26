"use client";
import Image from "next/image";
import { useRef } from "react";
import img from "@/../public/base.svg";
import Button from "@/components/Button";

function Page() {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <div className="h-screen bg-neutral-bg bg-(image:--bg-pattern) ">
      page
      <div className="w-full h-full flex items-center justify-center absolute inset-0 bg-neutral-bg/25">
        <article className="w-[calc(100vw_-_64px)] h-[calc(100vh_-_64px)] flex flex-col gap-8 bg-dark-10 bg-(image:--bg-pattern) border-4 border-secondary-01 p-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <p className="text-h6 leading-none text-secondary-10 font-major-mono-display">
                comprar
              </p>
              <p className="text-h6 leading-none text-secondary-10 font-major-mono-display opacity-25">
                {">"}
              </p>
              <p className="text-h6 leading-none text-secondary-10 font-major-mono-display opacity-25">
                pagamento
              </p>
            </div>
            <div className="h-0.5 w-full bg-secondary-10"></div>
          </div>
          <section className="w-full flex-1 flex gap-16">
            <section className="w-full h-full flex flex-col gap-6">
              <section className="w-full h-1/2 border-2 border-secondary-01 bg-dark-10 bg-radial from-white/10 to-transparent to-85% flex items-center justify-center ">
                <Image src={img} alt="" />
              </section>
              <section className="w-full h-1/2 flex gap-4">
                <article className="w-full h-full border-2 border-secondary-01 bg-dark-10 bg-radial p-3 from-white/10 to-transparent to-85% flex flex-col justify-between">
                  <div className="flex gap-1 flex-col h-fit ">
                    <h2 className="font-major-mono-display text-base">
                      bastidora
                    </h2>
                    <p className="font-major-mono-display text-xs">R$9999</p>
                  </div>
                  <Image src={img} alt="" className="self-center" />
                  <div className="w-full flex justify-between items-center">
                    <div className="border-2 border-secondary-01 h-full aspect-square text-base flex items-center justify-center">
                      +
                    </div>
                    <p className="border-2 border-secondary-01 font-major-mono-display -tracking-[0.08rem]  text-base px-3 flex justify-center">
                      99
                    </p>
                    <div className="border-2 border-secondary-01 h-full aspect-square text-base flex items-center justify-center">
                      -
                    </div>
                  </div>
                </article>
                <article className="w-full h-full border-2 border-secondary-01 bg-dark-10 bg-radial p-3 from-white/10 to-transparent to-85% flex flex-col justify-between">
                  <div className="flex gap-1 flex-col h-fit ">
                    <h2 className="font-major-mono-display text-base">
                      bastidora
                    </h2>
                    <p className="font-major-mono-display text-xs">R$9999</p>
                  </div>
                  <Image src={img} alt="" className="self-center" />
                  <div className="w-full flex justify-between items-center">
                    <div className="border-2 border-secondary-01 h-full aspect-square text-base flex items-center justify-center">
                      +
                    </div>
                    <p className="border-2 border-secondary-01 font-major-mono-display -tracking-[0.08rem]  text-base px-3 flex justify-center">
                      99
                    </p>
                    <div className="border-2 border-secondary-01 h-full aspect-square text-base flex items-center justify-center">
                      -
                    </div>
                  </div>
                </article>
                <article className="w-full h-full border-2 border-secondary-01 bg-dark-10 bg-radial p-3 from-white/10 to-transparent to-85% flex flex-col justify-between">
                  <div className="flex gap-1 flex-col h-fit ">
                    <h2 className="font-major-mono-display text-base">
                      bastidora
                    </h2>
                    <p className="font-major-mono-display text-xs">R$9999</p>
                  </div>
                  <Image src={img} alt="" className="self-center" />
                  <div className="w-full flex justify-between items-center">
                    <div className="border-2 border-secondary-01 h-full aspect-square text-base flex items-center justify-center">
                      +
                    </div>
                    <p className="border-2 border-secondary-01 font-major-mono-display -tracking-[0.08rem]  text-base px-3 flex justify-center">
                      99
                    </p>
                    <div className="border-2 border-secondary-01 h-full aspect-square text-base flex items-center justify-center">
                      -
                    </div>
                  </div>
                </article>
              </section>
            </section>
            <section className="w-full h-full flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-h2 font-major-mono-display text-center leading-16">
                  Riskkk
                </h1>
                <div className="w-full h-0.5 bg-secondary-10"></div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full h-0.5 bg-secondary-10"></div>
                <div className="flex gap-4">
                  <Button
                    title="R$99,00"
                    styles="secondary"
                    className="text-2xl w-full leading-5"
                  />
                  <Button
                    title="Assinaturas"
                    className="text-2xl w-full leading-5"
                  />
                </div>
              </div>
            </section>
          </section>
        </article>
      </div>
    </div>
  );
}

export default Page;
