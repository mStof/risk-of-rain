import { create } from "zustand";

type useNavigationType = {
  navigation: "buy" | "plans" | "payment";
  setNavigation: (where: "buy" | "plans" | "payment") => void;
};

export const useNavigation = create<useNavigationType>((set) => ({
  navigation: "buy",
  setNavigation: (where) => set(() => ({ navigation: where }))
}));
