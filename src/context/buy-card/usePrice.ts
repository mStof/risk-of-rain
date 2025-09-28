import { create } from "zustand";

type usePriceType = {
  price: number;
  items: number;
  setPrice: (value: number, qnt: number) => void;
};

export const usePrice = create<usePriceType>((set) => ({
  price: 0,
  items: 0,
  setPrice: (value, qnt) => set((state) => ({ price: state.price + value, items: state.items + qnt })),
}));
