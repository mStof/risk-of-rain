"use client";
import React from "react";
import { Apple, CaseIcon, Google } from "../icons";
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/services/database/FirebaseConfig";

const Icons = () => {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, errorFB] = useSignInWithFacebook(auth);
  
  const handleSignInWithGoogle = async () => {
    try {
      const res = await signInWithGoogle();
      console.log(res);
      console.log(error);
    }
    catch (error) {
      console.error("Erro ao entrar com o Google:", error);
    }
  };

  const handleSignInWithFacebook = async () => {
    try {
      const res = await signInWithFacebook();
      console.log(res);
      console.log(errorFB);
    }
    catch (error) {
      console.error("Erro ao entrar com o Google:", error);
    }
  };

  return (
    <div className="flex gap-40 justify-center w-full">
      <CaseIcon
      colors="base"
        onClick={handleSignInWithGoogle}
        sizes="lg"
        Icon={<Google className="text-h6" />}
        desc="Entrar com o Google"
      />
      <CaseIcon
      colors="base"
        onClick={handleSignInWithFacebook}
        sizes="lg"
        Icon={<Apple className="text-h6" />}
        desc="Entrar com a Apple"
      />
    </div>
  );
};

export default Icons;
