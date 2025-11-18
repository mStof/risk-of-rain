"use client";
import Link from "@/components/Link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import home from "@/../public/img/infos/como_usar/home.png";

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
    <main className="bg-(image:--bg-pattern) h-fit flex manda overflow-hidden">
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
            <Link
              href={"/infos/como-usar#knowApp"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Propósito central do projeto.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#firtsNav"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Solução Inovadora.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#gerencAmbien"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Escopo do Sistema.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#fastControl"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Impacto Social.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#status"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Fundamentação Técnica.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#gerencPerfil"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Arquitetura do Sistema.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#histEvent"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Plataforma Digital.
            </Link>
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

      <div className="fixed w-3/12 h-10/12 bg-red-700 inset-0 translate-x-3/4 self-center">
        <Image src={home} alt="home" className="h-full w-auto object-cover" />
      </div>

      <section
        ref={sectionInfos}
        className="flex flex-col items-center w-full h-fit snap-y snap-mandatory "
      >
        <div
          id="knowApp"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            propósito central <br /> do projeto
          </h1>
          <div className="flex flex-col gap-6">
            <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
              O propósito central do projeto Risk Of Rain (ROR) é criar uma
              solução de automação residencial inteligente e acessível,
              oferecendo uma resposta eficaz aos desafios das mudanças
              climáticas. O sistema automatiza o controle de janelas, visando
              proteger bens materiais contra danos causados por chuvas intensas
              , ao mesmo tempo que elimina a necessidade de intervenção manual ,
              proporcionando segurança, conforto e praticidade aos usuários.
            </p>
            <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
              Fundamentado em tecnologias como Internet das Coisas (IoT) e
              Arduino , o ROR representa um avanço na adaptação de residências
              ao conceito de smart homes , democratizando o acesso à tecnologia
              cite_starte promovendo um ambiente mais seguro e resiliente.
            </p>
          </div>
        </div>

        <div
          id="firtsNav"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            o problema e a <br /> solução inovadora
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O projeto surge de uma motivação pessoal (prejuízos por janelas
            abertas na chuva) para resolver um problema doméstico comum e
            custoso. A solução é o Risk Of Rain (ROR), um dispositivo IoT
            avançado que detecta condições climáticas e fecha janelas
            automaticamente, transformando o risco em segurança e conforto
            diário.
          </p>
        </div>

        <div
          id="gerencAmbien"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            objetivo central <br /> do sistema
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O Objetivo Geral é criar um sistema integrado de automação
            residencial para controle automatizado de janelas e portas. O escopo
            foca em proteção automática (via sensores climáticos) e controle
            remoto inteligente (via app e website), integrando hardware e
            software para gerenciar eficientemente as aberturas da residência.
          </p>
        </div>

        <div
          id="fastControl"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            benefícios e <br /> impactos sociais
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O projeto busca a democratização da tecnologia smart home
            (Justificativa Social). Os beneficiários incluem idosos/pessoas com
            mobilidade reduzida (autonomia e segurança) e trabalhadores em
            jornada integral (controle remoto). O impacto esperado é a redução
            de incidentes por chuva, otimização de energia (ventilação natural)
            e inclusão digital.
          </p>
        </div>

        <div
          id="status"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            fundamentação <br/> técnica
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            A programação é feita em C/C++ (IDE Arduino), centrada em uma lógica
            de verificação contínua para fechamento imediato na chuva e
            reabertura após cessar. O sistema opera de forma autônoma (sensor)
            ou controlada (usuário/aplicativo). O Design prioriza um hardware
            compacto, discreto e esteticamente agradável, com sensores
            estrategicamente posicionados.
          </p>
        </div>

        <div
          id="gerencPerfil"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            arquitetura do <br/> sistema
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O ROR utiliza uma arquitetura IoT e de Sistemas Embarcados, com o
            ESP32 como microcontrolador principal (Wi-Fi/Bluetooth).
            Componentes-chave são o Módulo de Detecção Climática e o protocolo
            MQTT para comunicação eficiente. O diferencial técnico é a rapidez
            do Modo Automático (resposta de fechamento em menos de 3 segundos),
            além do Modo Manual via aplicativo.
          </p>
        </div>

        <div
          id="histEvent"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            plataforma digital: <br/> user experience
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O projeto inclui interfaces de Controle e Usabilidade de alta
            qualidade: aplicativo móvel intuitivo (iOS/Android) e um Website
            Interativo. A prioridade é a Acessibilidade e Design Amigável. O
            website inova com visualização 3D e vídeos. A plataforma não só
            controla, mas também prepara o sistema para futuras expansões e
            integrações (modular e protocolos abertos).
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
