import sequelize from "../config/db.js";
import User from "../model/user.model.js";
import multer from "multer";
import upload from "../config/multer.js";
import path from "path";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established.");

    const user = await User.findAll();
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error("Error fetching Users:", error);
  }
};

export const createUser = async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    const { name, email, role, password, dob } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const imagePath = req.file ? path.basename(req.file.filename) : null;

      const newUser = await User.create({
        name,
        email,
        password,
        role,
        dob,
        image: imagePath,
      });

      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ success: false, error: "Failed to create user" });
    }
  });
};

export const updateUser = async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { id } = req.params;
    // const { name, email, role, password, dob } = req.body;
    const updateUser = req.body;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const imagePath = req.file
        ? path.basename(req.file.filename)
        : user.image;

      const updatedData = {
        name: updateUser.name || user.name,
        email: updateUser.email || user.email,
        password: updateUser.password || user.password,
        role: updateUser.role || user.role,
        dob: updateUser.dob || user.dob,
        image: imagePath,
      };

      await user.update(updatedData);

      return res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user,
      });
    } catch (error) {
      console.error("Error updating user:", error);
      return res
        .status(500)
        .json({ success: false, error: "Failed to update user" });
    }
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    await user.destroy();

    res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ success: false, error: "Failed to delete user" });
  }
};
