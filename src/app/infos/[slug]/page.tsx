import React from "react";

const Index = () => {
  return (
    <main className="bg-(image:--bg-pattern) h-screen flex">
      <article className="xed bg-dark-09 border-r-4 border-dashed border-r-secondary-01 min-w-80 w-fit h-full px-12 flex">
        <a href="./../" className="flex gap-1 absolute inset-8 w-fit h-fit">
          <p className="font-major-mono-display text-base rotate-90 text-secondary-01 w-fit h-fit">
            V
          </p>
          <p className="font-chakra-petch text-base text-secondary-01 w-fit h-fit -tracking-tighter underline underline-offset-4">
            Voltar
          </p>
        </a>
        <ul className="my-auto flex flex-col gap-8 list-disc">
          <li className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light">
            Navegação Principal.
          </li>
          <li className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light">
            Geraciamento do ambiente.
          </li>
          <li className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light">
            Controle rápido.
          </li>
          <li className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light">
            Status do dispositivo.
          </li>
          <li className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light">
            Configuração de perfil.
          </li>
          <li className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light">
            Histórico de eventos.
          </li>
        </ul>
      </article>
      <section className="bg-red-500 flex flex-col justify-center items-center gap-16 p-32">
        <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-12 lowercase">
          conheça nosso app
        </h1>
        <p className="font-chakra-petch text-base font-light -tracking-tighter leading-6 text-secondary-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          itaque sequi quasi distinctio a? Ratione ab aliquid rem. Eaque, illo?
          Fugit ipsa assumenda aspernatur placeat repudiandae, maxime nihil.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          itaque sequi quasi distinctio a? Ratione ab aliquid rem. Eaque, illo?
          Fugit ipsa assumenda aspernatur placeat repudiandae, maxime nihil.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          itaque sequi quasi distinctio a? Ratione ab aliquid rem. Eaque, illo?
          Fugit ipsa assumenda aspernatur placeat repudiandae, maxime nihil.
          dolore vel.
        </p>
      </section>
    </main>
  );
};

export default Index;
