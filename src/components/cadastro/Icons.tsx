/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { Apple, CaseIcon, Google } from "../icons";
import {
  useSignInWithFacebook,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { auth } from "@/services/database/FirebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect
} from "firebase/auth";
import { useRouter } from "next/navigation";

const Icons = () => {
  const [signInWithFacebook, errorFB] = useSignInWithFacebook(auth);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignInWithGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();

      // Configurações para melhor UX
      provider.setCustomParameters({
        prompt: "select_account"
      });

      // Tenta popup primeiro, se falhar usa redirect
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Usuário Google:", result.user);
        router.push("/");
      } catch (popupError: any) {
        if (popupError.code === "auth/popup-blocked") {
          console.log("Popup bloqueado, usando redirect...");
          await signInWithRedirect(auth, provider);
        } else {
          throw popupError;
        }
      }
    } catch (error: any) {
      console.error("Erro Google:", error);
      alert(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSignInWithFacebook = async () => {
    try {
      const res = await signInWithFacebook();
      console.log(res);
      console.log(errorFB);
    } catch (error) {
      console.error("Erro ao entrar com o Google:", error);
    }
  };

  return (
    <div className="flex gap-40 justify-center w-full">
      <CaseIcon
        colors={loading ? "error" :"base"}
        onClick={handleSignInWithGoogle}
        sizes="lg"
        Icon={<Google fill={loading ? "#dc3957" : undefined} className="text-h6" />}
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
