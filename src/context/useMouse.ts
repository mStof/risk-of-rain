import { create} from "zustand";

type useMouseType = {
  selected: boolean;
  setSelected: (value: boolean) => void;
};

const mouse = create<useMouseType>((set) => ({
  selected: false,
  setSelected: (value) => set(() => ({ selected: value }))
}));

export const useMouse = mouse;