import { sequelize } from "../index.js";
import { DataTypes } from "sequelize";
import { User } from "./user.js";

const Topic = sequelize.define("Topic", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Topic.belongsTo(User, {
  foreignKey: {
    allowNull: false,
    field: "user_id",
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(Topic);

export { Topic };
