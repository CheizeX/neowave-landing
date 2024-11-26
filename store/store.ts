import { create } from "zustand";

interface AppState {
  isNavOpen: boolean;
  toggleNav: () => void;
}

export const useStore = create<AppState>((set) => ({
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));
