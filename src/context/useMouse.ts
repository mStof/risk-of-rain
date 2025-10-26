import { create } from "zustand";

type useMouseType = {
  selected: boolean;
  setSelected: (value: boolean) => void;
};

export const useMouse = create<useMouseType>((set) => ({
  selected: false,
  setSelected: (value) => set(() => ({ selected: value }))
}));
