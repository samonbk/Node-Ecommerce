import Sequelize from "sequelize";

const sequelize = new Sequelize("ecommercedb", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default sequelize;
