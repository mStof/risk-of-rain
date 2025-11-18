/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useUser } from "@/context/useUser";
import { auth } from "@/services/database/FirebaseConfig";
import { useRealTimeFirebase } from "@/services/database/useRealTimeFirebase";
import { userSchemaType } from "@/utils/schemas/userForm";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";


export const useCadUser = () => {
  const router = useRouter();
  const {setUser} = useUser();
  const [createUserWithEmailAndPassword, , , error] =
  useCreateUserWithEmailAndPassword(auth);
  const { insertUser } = useRealTimeFirebase();

  const cadUser = async (data:userSchemaType) => {
    try {
        await createUserWithEmailAndPassword(data.email, data.password);
        if (error?.message) throw error.code;
        insertUser({...data, tel:"" });
        // setUser({...data, tel:"", });
        router.push("/");
        return null;
  
      } catch (error: any) {
        console.warn("Erro ao criar usuário:", error);
        const errMsg = error === "auth/email-already-in-use" ? "Email já está em uso" : error;
        return  errMsg;
      }
  };
  return {cadUser};
};
