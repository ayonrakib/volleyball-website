console.log("mariadb connection file ran!");
require("dotenv").config();

// import {Sequelize} from "sequelize-typescript";

import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: "process.env.DEV_DB_NAME",
  dialect: "mysql",
  username: `${process.env.DEV_DB_USERNAME}`,
  password: `${process.env.DEV_DB_PASSWORD}`,
  storage: ":memory:",
  models: [__dirname + "/models"],
});

// const sequelize = new Sequelize({
//     name: process.env.DEV_DB_NAME,
//     username: process.env.DEV_DB_USERNAME,
//     password: process.env.DEV_DB_PASSWORD,
// },
//   {
//     host: process.env.DEV_DB_HOST,
//     dialect: "mariadb",
//     sync: true,
//   }
// );

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection with Mariadb has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

connect();

module.exports = sequelize;
