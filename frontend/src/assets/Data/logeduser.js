import { create } from "zustand";

export const useLogedUserStore = create((set) => ({
  logedUser: {},
  isUser: false,
  setLogedUser: (user) => set({ logedUser: user }),
  setIsUser: (isUser) => set({ isUser }),
  logOutUser: async () => {
    set({ logedUser: {} });
    set({ isUser: false });
    localStorage.removeItem("myecommercelocalstorageadminuserkey");
    return { success: true, message: "User logged out successfully" };
  },
}));
