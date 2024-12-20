import { DataTypes } from "sequelize";
import sequelize from "../config/db.js"; // Import Sequelize instance
import bcrypt from "bcrypt";

// Define the Product model
const User = sequelize.define(
  "User",
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
    email: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "user",
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(1050),
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "users",
    timestamps: false,
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const saltRounds = 10;
          user.password = await bcrypt.hash(user.password, saltRounds);
        }
      },
      beforeUpdate: async (user) => {
        if (user.password && user.changed("password")) {
          const saltRounds = 10;
          user.password = await bcrypt.hash(user.password, saltRounds);
        }
      },
    },
  }
);

export default User;
