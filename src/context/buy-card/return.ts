import { create } from "zustand";

type useReturnType = {
  returnToPlans: boolean;
  setReturnToPlans: () => void;
}

export const useReturn = create<useReturnType>((set => ({
  returnToPlans: false,
  setReturnToPlans: () => set((state) => ({ returnToPlans: !state.returnToPlans}))
})));