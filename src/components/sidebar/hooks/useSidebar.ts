import { create } from "zustand";

interface HookProps {
  isOpen: boolean;
  setIsOpen: () => void;
  onOpenChange: (bool: boolean) => void;
}

export const useSidebar = create<HookProps>()((set) => ({
  isOpen: true,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  onOpenChange: (bool) =>
    set(() => ({
      isOpen: bool,
    })),
}));
