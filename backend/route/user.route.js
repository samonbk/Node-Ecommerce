import express from "express";
const userRoute = express.Router();

import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controller/user.controller.js";

userRoute.get("/", getUsers);
userRoute.post("/", createUser);
userRoute.delete("/:id", deleteUser);
userRoute.put("/:id", updateUser);

export default userRoute;
