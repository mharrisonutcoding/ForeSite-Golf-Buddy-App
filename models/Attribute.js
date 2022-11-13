const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attribute extends Model {};

Attribute.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  competitive_game: {
    type: DataTypes.BOOLEAN,
  },
  relaxed_game: {
    type: DataTypes.BOOLEAN,
  },
  gender: {
    // male is true, female is false
    type: DataTypes.STRING,
  },
  handicap: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 0,
      max: 36,
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "attribute",
});

module.exports = Attribute;
