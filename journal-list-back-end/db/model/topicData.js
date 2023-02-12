import { sequelize } from "../index.js";
import { DataTypes } from "sequelize";
import { Topic } from "./topic.js";

const TopicData = sequelize.define("TopicData", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

TopicData.belongsTo(Topic, {
  foreignKey: {
    allowNull: false,
    field: "topic_id",
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Topic.hasMany(TopicData);

export { TopicData };
