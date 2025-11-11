"use server";
import { redirect } from "next/navigation";

export const redirectUser = async (state?: string) => {

  if (state) {
    sessionStorage.setItem("logged", state);
    return;
  }

  if (state === "delete") {
    sessionStorage.removeItem("logged");
    return;
  }
  
  const hasUser = sessionStorage.getItem("logged");
  console.log(hasUser);

  if (hasUser === "true") redirect("/user/perfil");
  if (hasUser === "false") redirect("/user/login");
};
