import { create } from "zustand";

type CardType = {
  id: number;
    price: number;
    nome: string;
  }

type usePriceType = {
  card: {
    id: number;
    price: number;
    nome: string;
  }[]
  setPrice: (obj:CardType) => void;
  removePrice: (id:number) => void;
  resetPrice: () => void;
};

export const usePrice = create<usePriceType>((set) => ({
  card:[],
  setPrice: (obj) => set((state) => ({card:[...state.card, obj]})),
  removePrice: (id) => set((state) => ({card:state.card.filter((obj) => {return obj.id !== id;})})),
  resetPrice: () => set(() => ({card:[]}))
}));
