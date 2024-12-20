import { create } from "zustand";

export const useLogedGuestStore = create((set) => ({
  logedGuest: {},
  isGuest: false,
  setLogedGuest: (user) => set({ logedGuest: user }),
  setIsGuest: (isGuest) => set({ isGuest }),
  logOutGuest: async () => {
    set({ logedGuest: {} });
    set({ isGuest: false });
    localStorage.removeItem("myecommercelocalstorageadminguestkey");
    return { success: true, message: "User logged out successfully" };
  },
}));
