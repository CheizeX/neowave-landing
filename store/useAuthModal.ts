import { create } from "zustand";

interface AuthModalState {
  isOpen: boolean;
  type: "login" | "signup" | "resetPassword" | null;
  openLoginModal: () => void;
  openSignupModal: () => void;
  openResetPasswordModal: () => void;
  closeModal: () => void;
}

const useAuthModal = create<AuthModalState>((set) => ({
  isOpen: false,
  type: null,
  openLoginModal: () => set({ isOpen: true, type: "login" }),
  openSignupModal: () => set({ isOpen: true, type: "signup" }),
  openResetPasswordModal: () => set({ isOpen: true, type: "resetPassword" }),
  closeModal: () => set({ isOpen: false, type: null }),
}));

export default useAuthModal;
