import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: "journaldb",
  username: "venkat",
  password: "123456",
});

sequelize.sync();

export const testConnection = async () => {
  return sequelize.authenticate();
};
