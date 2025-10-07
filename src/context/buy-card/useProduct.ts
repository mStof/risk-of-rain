import { create } from "zustand";

type useProductsType = {
  plans: {
    name: string;
    price: number;
  };
  windows: {
    name: string;
    price: number;
  }[];
  setPlans: (plan: { name: string; price: number }) => void;
  setWindows: (windows: { name: string; price: number }[]) => void;
};

export const useProducts = create<useProductsType>((set) => ({
  plans: { name: "", price: 0 },
  windows: [],
  setPlans: (plan) => set(() => ({ plans: plan })),
  setWindows: (windows) => set((state) => ({ windows: [...windows, ...state.windows] }))
}));
