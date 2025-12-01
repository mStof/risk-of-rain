import React, { useEffect, useState } from "react";
import PerfilCase from "../PerfilCase";
import { useRealTimeFirebase } from "@/services/database/useRealTimeFirebase";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { app, auth } from "@/services/database/FirebaseConfig";
import { imgType } from "@/utils/types/imgType";
import { getDatabase, ref, set } from "firebase/database";

const Header = () => {
  const [userConfig, setUserConfig] = useState({ name: "", cpf: "" });
  const [img, setImg] = useState("");
  const { selectUser, insertUser } = useRealTimeFirebase();
  const [user] = useAuthState(auth);
  const [updateUser] = useUpdateProfile(auth);
  const db = getDatabase(app);

  const handleImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (!file) return;
    if (!user?.email) return;

    const formData = new FormData();
    formData.append("image", file[0]);
    formData.append("name", user?.email);

    try {
      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=af65a150bee7b77c25757326bcb4be87",
        { method: "post", body: formData }
      );
      const data: imgType = await res.json();
      console.log(data);

      setImg(data.data.display_url);
      updateUser({ photoURL: data.data.display_url });
      const dataUser = await selectUser(user?.email);

      if (!dataUser) return;
      await set(ref(db, "userWeb/user/" + dataUser[0].id+"/profilePicture"), data.data.display_url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      // console.log(user);
      if (!user?.email) return;
      if (user?.photoURL) setImg(user.photoURL);

      const res = await selectUser(user?.email);
      if (!res || !res.length) {
        if (!user.displayName) return;
        setUserConfig({ name: user?.displayName, cpf: "" });
      } else {
        const { name, cpf } = res[0];
        setUserConfig({ name, cpf });
      }
    };
    getData();
  }, [user]);

  return (
    <header className="bg-dark-09 flex gap-4 p-6 pb-0 px-12 hfit flex-1 items-start">
      <input
        onChange={handleImg}
        type="file"
        className="hidden"
        name=""
        id="img"
      />
      <label htmlFor="img" className="relative">
        <div className="absolute inset-0 flex bg-dark-10/75 opacity-0 translate-y-5 rotate-45 size-full z-10 hover:opacity-80 transition-opacity">
          <p className="-rotate-45 m-auto font-chakra-petch text-xs leading-none text-center">Clique para mudar a foto de perfil</p>
        </div>
        <PerfilCase img={img} className="size-20 translate-y-5" />
      </label>

      <div className="h-full bg-red-500"></div>
      <div className="flex flex-col gap-2">
        <p className="text-h6 font-major-mono-display leading-8 lowercase text-secondary-10">
          Hi {userConfig.name}
        </p>
        <p className="text-base font-chakra-petch leading-4 text-dark-03 -tracking-tighter font-light">
          CPF:{userConfig.cpf}
        </p>
      </div>
    </header>
  );
};

export default Header;
