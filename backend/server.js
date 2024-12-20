import express from "express";
import mysql from "mysql";
import cors from "cors";
import path from "path";
const app = express();
// app.use(cors());
import productRoute from "./route/product.route.js";
import userRoute from "./route/user.route.js";
import sequelize from "./config/db.js";
app.use(express.json());
const corsOptions = {
  origin: process.env.FRONTEND_URL || "*", // Replace with your frontend URL in production
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // Set to true if you want to drop and recreate tables
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

// syncDatabase();

// Route API
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

const __dirname = path.resolve();
app.use(
  "/public/images",
  express.static(path.join(__dirname, "./public/images"))
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
