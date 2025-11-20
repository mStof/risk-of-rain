"use client";
import Link from "@/components/Link";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [progress, setProgress] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const sectionInfos = useRef<HTMLElement>(null);

  const handleProgress = () => {
    const scrollProgress = document.documentElement.scrollTop;
    const heightSize =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const currentProgress = (scrollProgress / heightSize) * 100;
    console.log(scrollProgress);

    setProgress(currentProgress < 0 ? 0 : currentProgress);

    if (!sectionInfos.current) return;
    const sections =
      sectionInfos.current?.querySelectorAll(".section").length - 1;

    const eachProgress = heightSize / sections;
    const currentSection = Math.floor(Math.ceil(scrollProgress) / eachProgress);
    console.log(sections, currentSection, scrollProgress, eachProgress);
    const listItems = listRef.current?.querySelectorAll("li > div");

    listItems?.forEach((item) => item.setAttribute("data-progress", "false"));
    for (let i = 0; i < currentSection + 1; i++) {
      if (listItems) listItems[i].setAttribute("data-progress", "true");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleProgress);
  }, []);

  return (
    <main className="bg-dark-10 bg-(image:--bg-pattern) h-fit flex manda overflow-hidden">
      <article className="fixed bg-dark-09 border-r-4 border-dashed border-r-secondary-01 w-max-80 w-max h-full pl-8 pr-20 flex">
        <Link
          href="./../../"
          className="flex gap-1 absolute inset-8 w-fit h-fit"
        >
          <p className="font-major-mono-display text-base rotate-90 text-secondary-01 w-fit h-fit">
            V
          </p>
          <p className="font-chakra-petch text-base text-secondary-01 w-fit h-fit -tracking-tighter underline underline-offset-4">
            Voltar
          </p>
        </Link>
        <ul ref={listRef} className="my-auto flex flex-col gap-8 relative">
          <div className="absolute top-1/2 -translate-y-1/2 translate-x-8/4 w-0.5 h-11/12 flex">
            <span className="w-0.5 h-full bg-secondary-10  "></span>
            <span
              style={{ height: `${progress}%` }}
              className="w-0.5 bg-secondary-01 absolute "
            ></span>
          </div>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={true}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Sobre o sistema.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Motivação e Origem.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Componentes Principais.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Funcionamento Autôno.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Design e Metodologia.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Flexibilidade e Adaptação.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Impacto e Relevância.
            </p>
          </li>
        </ul>
      </article>
      {/* Just to fill the space */}
      <div className="opacity-0 w-max-80 w-max h-full pl-8 pr-20 flex -z-40">
        <ul className="my-auto flex flex-col gap-8 list-disc ml-4">
          <li className="isolate flex gap-2 items-center">
            Navegação Principal.
          </li>
          <li className="isolate flex gap-2 items-center">
            Geraciamento do ambiente.
          </li>
          <li className="isolate flex gap-2 items-center">Controle rápido.</li>
          <li className="isolate flex gap-2 items-center">
            Status do dispositivo.
          </li>
          <li className="isolate flex gap-2 items-center">
            Configuração de perfil.
          </li>
          <li className="isolate flex gap-2 items-center">
            Histórico de eventos.
          </li>
        </ul>
      </div>

      <div className="fixed w-3/12 h-10/12 bg-red-700 inset-0 translate-x-3/4 self-center"></div>

      <section
        ref={sectionInfos}
        className="flex flex-col items-center w-full h-fit snap-y snap-mandatory "
      >
        <div className="snap-center section flex justify-center gap-20 flex-col ml-64 w-[37.75rem] h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-12 lowercase text-nowrap">
            sobre o sistema
          </h1>
          <div className="flex flex-col gap-6">
            <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
              Um avançado sistema de automação residencial inteligente foi
              desenvolvido com o propósito de proteger bens materiais contra os
              efeitos das mudanças climáticas, oferecendo uma solução moderna e
              eficiente, especialmente em períodos de chuva intensa.
              Com tecnologia de ponta, o sistema elimina a
              necessidade de intervenções manuais, como o fechamento de janelas,
              portas e lonas, proporcionando aos usuários maior segurança,
              conforto, praticidade e ainda contribuindo para a economia e o uso
              consciente da energia.
            </p>
          </div>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-12 lowercase text-nowrap">
            motivação e origem
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            A ideia para o projeto surgiu da vivência dos próprios criadores,
            que enfrentaram perdas materiais e preocupações causadas por chuvas
            repentinas. Essa motivação se transformou em uma proposta
            tecnológica com impacto social e econômico. O projeto é uma resposta
            direta aos desafios impostos pelas mudanças climáticas, que têm
            intensificado eventos de chuva extrema, afetando a segurança e a
            qualidade de vida da população.
          </p>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            componentes <br/> principais
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O gerenciamento do ambiente é centralizado para oferecer controle
            total sobre a sua casa. A interface do aplicativo permite que você
            veja o status geral do seu módulo de automação e execute comandos
            que afetam todas as janelas ao mesmo tempo, como &#34;Fechar
            tudo&#34;. Além disso, você pode monitorar as condições climáticas
            gerais do ambiente, como temperatura e umidade, garantindo uma visão
            completa e descomplicada do seu lar.
          </p>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 min-w-[37.75rem] w-min h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            funcionamento <br /> autôno
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O sensor, instalado em uma área externa, como o telhado, aciona
            automaticamente os motores quando detecta chuva, garantindo um
            fechamento rápido e eficiente das janelas. O sistema opera de forma
            autônoma, eliminando a necessidade de intervenção manual. Embora o
            sistema realize suas ações sem necessidade de comando humano, ele
            também pode ser controlado remotamente através de um aplicativo.
          </p>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 min-w-[37.75rem] w-min h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            desing e <br /> metodologia
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O desenvolvimento do projeto seguiu os princípios do Design
            Thinking, um processo centrado no ser humano que busca a inovação.
            As etapas incluíram a fase de imersão, com extensa pesquisa e
            análise de concorrentes, a definição do problema e público-alvo, a
            ideação para a criação de soluções, a prototipagem para transformar
            as ideias em representações tangíveis e a testagem para validar e
            refinar as soluções antes da implementação final.
          </p>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            flexibilidade e <br /> adaptação
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O sistema é flexível e foi projetado para ser ajustado conforme a
            necessidade do cliente. A tecnologia dos motores é compatível com
            diversos modelos de janelas, adaptando-se a diferentes mecanismos.
            Essa flexibilidade garante que o número de motores possa ser
            configurado para uma ou mais janelas, tornando a instalação simples
            e adaptável a diferentes estruturas e residências.
          </p>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            impacto e <br/> relevância
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            A automação residencial, impulsionada pela Internet das Coisas
            (IoT), oferece maior conforto, segurança e eficiência energética. O
            projeto ROR se alinha a essa tendência, aumentando a resiliência das
            comunidades ao proteger bens materiais contra eventos climáticos
            extremos. Ele promove a inclusão digital e a acessibilidade,
            beneficiando especialmente idosos e pessoas com mobilidade reduzida.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
