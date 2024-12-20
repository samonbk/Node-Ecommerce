import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (product) => set({ product }),
  fetchProducts: async () => {
    try {
      const apiUrl = "http://localhost:5000";

      const res = await fetch(apiUrl + "/api/products");

      if (!res.ok) {
        throw new Error(
          `Failed to fetch products: ${res.status} ${res.statusText}`
        );
      }

      const data = await res.json();
      set({ products: data.data });
      return { success: true, message: "products fetched successfully" };
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ products: [] });
      return { success: false, message: "products fetched successfully" };
    }
  },
  createProduct: async (product) => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: product,
      });

      if (!response.ok) {
        return { success: false, message: "Failed to create product" };
      }

      const result = await response.json();
      return {
        success: true,
        message: "Product created successfully",
        data: result.data,
      };
    } catch (error) {
      console.error("Error creating product:", error);
      return { success: false, message: "Failed to create product" };
    }
  },

  deleteProduct: async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        return { success: false, message: "Failed to delete product" };
      }

      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      console.error("Error deleting product:", error);
      return { success: false, message: "Failed to delete product" };
    }
  },

  updateProduct: async (id, updatedProduct) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "PUT",
        body: updatedProduct,
      });

      if (!response.ok) {
        return { success: false, message: "Failed to update product" };
      }

      const result = await response.json();

      return { success: true, message: "Product updated successfully" };
    } catch (error) {
      console.error("Error updating product:", error);
      return { success: false, message: "Failed to update product" };
    }
  },
}));
