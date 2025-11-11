import { userSchemaUpdateType } from "@/utils/schemas/userFormUpdate";
import { create } from "zustand";

type useUserType = {
  user: userSchemaUpdateType;
  setUser: (value: userSchemaUpdateType) => void;
  resetUser: () => void;
};

export const useUser = create<useUserType>((set) => ({
  user: { cpf: "", email: "", name: "", password: "", tel: "" },
  setUser: (value) => set(() => ({ user: value })),
  resetUser: () =>
    set(() => ({
      user: { cpf: "", email: "", name: "", password: "", tel: "" }
    }))
}));
