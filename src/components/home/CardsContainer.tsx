import React from "react";
import Card from "./Card";
import proposito from "@/../public/img/infos/proposito.png";
import mobile from "@/../public/img/infos/mobile.png";
import dispositivo from "@/../public/img/infos/dispositivo.png";
import instalacao from "@/../public/img/infos/instalacao.png";

const CardsContainer = () => {
  return (
    <section className="h-fit w-auto flex flex-col gap-4 px-40 py-20">
      <h6 className="text-h6 font-major-mono-display leading-8">Infos.</h6>
      <div className="flex flex-wrap gap-y-20 justify-between">
        <Card
          link="/infos/como-usar"
          title="como usar"
          subtitle="usabilidade"
          imgConfig={{
            src: mobile,
            alt: "Dois celulares com o aplicativo Risk of Rain"
          }}
        />
        <Card
          link="/infos/sobre-o-sistema"
          title="sistema"
          subtitle="sobre o"
          imgConfig={{ src: dispositivo, alt: "Imagem do dispositivo" }}
        />
        <Card
          link="/infos/proposito"
          title="central do projeto"
          subtitle="propósito"
          imgConfig={{ src: proposito, alt: "Imagem da casa" }}
        />
        <Card
          link="/infos/como-instalar"
          title="instalação"
          subtitle="detalhes da"
          imgConfig={{
            src: instalacao,
            alt: "Imagem da instalação do produto"
          }}
        />
      </div>
    </section>
  );
};

export default CardsContainer;
