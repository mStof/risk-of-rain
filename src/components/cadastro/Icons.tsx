/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Apple, CaseIcon, Google } from "../icons";
import {
  useSignInWithFacebook,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { auth } from "@/services/database/FirebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  OAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";
import { useRouter } from "next/navigation";

const Icons = () => {
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
        sessionStorage.setItem("logged", "true");
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
  
  const handleSignInWithApple = async () => {
    setLoading(true);
    try {
      const provider = new FacebookAuthProvider();

      // Configurações para melhor UX
      provider.setCustomParameters({
        prompt: "select_account"
      });

      // Tenta popup primeiro, se falhar usa redirect
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Usuário Apple:", result.user);
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
      console.error("Erro Apple:", error);
      alert(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
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
        onClick={handleSignInWithApple}
        sizes="lg"
        Icon={<Apple className="text-h6" />}
        desc="Entrar com a Apple"
      />
    </div>
  );
};

export default Icons;
