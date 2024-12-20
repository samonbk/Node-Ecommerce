import { create } from "zustand";

export const useLogedAdminrStore = create((set) => ({
  logedAdmin: {},
  isadmin: false,
  setLogedAdmin: (admin) => set({ logedAdmin: admin }),
  setIsAdmin: (islog) => set({ islog }),
  logOutAdmin: async () => {
    set({ logedAdmin: {} });
    set({ isadminlog: false });
    localStorage.removeItem("myecommercestorageadminkey");
    return { success: true, message: "User logged out successfully" };
  },
}));
