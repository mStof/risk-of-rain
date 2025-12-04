import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useRealTimeFirebase } from "@/services/database/useRealTimeFirebase";
import { auth } from "@/services/database/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Index = () => {
  const [card, setCard] = useState<{ ativo: boolean; name: string }[]>([]);
  const { selectUser } = useRealTimeFirebase();
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getData = async () => {
      if (!user?.email) return;
      const userDB = await selectUser(user.email);
      if (!userDB) return;
      if (!userDB[0].devices) return setCard([]);
      const esp = userDB[0].devices.Esp;
      const devices: { ativo: boolean; name: string }[] = Object.keys(esp).map(
        (k) => {
          const d = esp[k as keyof typeof esp];
          return { ativo: d.active, name: d.name };
        }
      );
      setCard(devices);
    };
    getData();
  }, [user]);

  return (
    <article className="flex-1 flex flex-col gap-8 max-h-full">
      <div className="flex gap-2 items-center">
        <span className="bg-secondary-01 w-4 h-0.5 block"></span>
        <p className="text-base font-chakra-petch leading-4 text-secondary-10 -tracking-tighter font-medium">
          Dispositivos na conta
        </p>
        <span className="bg-secondary-01 flex-1 h-0.5 block"></span>
      </div>
      <div className="flex flex-col gap-4 -800 h-[calc(65vh_-_3.5rem)] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-dark-10 [&::-webkit-scrollbar-thumb]:border-dark-10 [&::-webkit-scrollbar-thumb]:border-x-3 [&::-webkit-scrollbar-thumb]:bg-secondary-01">
        {card.length?card.map(({ ativo, name }, i) => (
          <Cards key={i} name={name} ativo={ativo} />
        )): <p className="text-dark-03 font-chakra-petch">Nenhum dispositivo encontrado.</p>}
      </div>
    </article>
  );
};

export default Index;
