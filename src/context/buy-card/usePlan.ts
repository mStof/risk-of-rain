import { create } from "zustand";

export type plan = {
  plan: string;
  infos: string[];
  price: number;
  windows: number;
};

type usePlanType = plan & {
  setPlan: (value: plan) => void;
};

export const usePlan = create<usePlanType>((set) => ({
  infos: [],
  plan: "",
  price: 0,
  windows: 0,
  setPlan: (value) => set(() => ({ ...value }))
}));
