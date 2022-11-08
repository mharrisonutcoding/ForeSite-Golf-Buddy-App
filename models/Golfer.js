const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Golfer extends Model {}

Golfer.init(
  {
    golfer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    austin_area: {
      type: DataTypes.BOOLEAN,
    },
    competetive_game: {
      type: DataTypes.BOOLEAN,
    },
    relaxed_game: {
      type: DataTypes.BOOLEAN,
    },
    drinking: {
      type: DataTypes.BOOLEAN,
    },
 },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Golfer',
  }
);

module.exports = Golfer;