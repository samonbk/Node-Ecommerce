import express from "express";
const productRoute = express.Router();

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";

productRoute.get("/", getProducts);
productRoute.post("/", createProduct);
productRoute.delete("/:id", deleteProduct);
productRoute.put("/:id", updateProduct);

export default productRoute;
