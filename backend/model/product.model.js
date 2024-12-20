import { DataTypes } from "sequelize";
import sequelize from "../config/db.js"; // Import Sequelize instance

// Define the Product model
const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    brand: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    image1: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    image2: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

export default Product;
