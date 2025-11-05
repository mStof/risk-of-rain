import { create } from "zustand";

type useBuyModalType = {
  isOpen:boolean;
  setIsOpen: (value: boolean ) => void;
};

export const useBuyModal = create<useBuyModalType>((set) => ({
  isOpen:false,
  setIsOpen: (value) => set(() => ({ isOpen: value }))
}));
