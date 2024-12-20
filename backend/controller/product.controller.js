import sequelize from "../config/db.js";
import Product from "../model/product.model.js";
import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const getProducts = async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established.");

    const product = await Product.findAll();
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const createProduct = async (req, res) => {
  // Upload multiple files
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ])(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { name, brand, price, discount } = req.body;

    // Validate fields
    if (!name || !brand || !price || !req.files.image1 || !req.files.image2) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const image1Path = req.files.image1
        ? path.basename(req.files.image1[0].filename)
        : null;
      const image2Path = req.files.image2
        ? path.basename(req.files.image2[0].filename)
        : null;

      const newProduct = await Product.create({
        name,
        brand,
        price,
        discount: discount || 0,
        image1: image1Path,
        image2: image2Path,
      });

      return res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      console.error("Error creating product:", error);
      return res
        .status(500)
        .json({ success: false, error: "Failed to create product" });
    }
  });
};

export const updateProduct = async (req, res) => {
  // Upload multiple files (image1 and image2)
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ])(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { id } = req.params; // Get product ID from URL params
    const { name, brand, price, discount } = req.body; // Get updated data

    try {
      // Find the existing product by ID
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      // Process new image uploads (if any)
      const image1Path = req.files.image1
        ? path.basename(req.files.image1[0].filename)
        : product.image1; // Keep old image1 if no new file
      const image2Path = req.files.image2
        ? path.basename(req.files.image2[0].filename)
        : product.image2; // Keep old image2 if no new file

      // Update the product with new or existing values
      await product.update({
        name: name || product.name, // Use new name or keep old
        brand: brand || product.brand,
        price: price || product.price,
        discount: discount || product.discount,
        image1: image1Path,
        image2: image2Path,
      });

      return res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: product,
      });
    } catch (error) {
      console.error("Error updating product:", error);
      return res
        .status(500)
        .json({ success: false, error: "Failed to update product" });
    }
  });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }

    await product.destroy();

    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ success: false, error: "Failed to delete product" });
  }
};
