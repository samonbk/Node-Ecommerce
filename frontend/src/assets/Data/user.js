import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [],
  setUsers: (user) => set({ user }),
  fetchUsers: async () => {
    try {
      const apiUrl = "http://localhost:5000";

      const res = await fetch(apiUrl + "/api/users");

      if (!res.ok) {
        throw new Error(
          `Failed to fetch users: ${res.status} ${res.statusText}`
        );
      }

      const data = await res.json();
      set({ users: data.data });
      return { success: true, message: "users fetched successfully" };
    } catch (error) {
      console.error("Error fetching users:", error);
      set({ users: [] });
      return { success: false, message: "users fetched fail" };
    }
  },
  createUser: async (user) => {
    const { users } = useUserStore.getState();

    const check = users.find((u) => u.email === user.get("email"));
    if (check) {
      console.log("Email already exists");
      return { success: false, message: "Email already exists" };
    }

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        body: user,
      });

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      const result = await response.json();

      // Update local store
      set((state) => ({
        users: [...state.users, result.data],
      }));

      console.log("User signed up:", result);
      return { success: true, message: "User signed up successfully" };
    } catch (error) {
      console.error("Error creating user:", error);
      return { success: false, message: "User signup failed" };
    }
  },
  updateUser: async (id, updatedUser) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "PUT",
        body: updatedUser,
      });

      if (!response.ok) {
        return { success: false, message: "Failed to update User" };
      }

      const result = await response.json();

      return { success: true, message: "User updated successfully" };
    } catch (error) {
      console.error("Error updating User:", error);
      return { success: false, message: "Failed to update User" };
    }
  },
}));
