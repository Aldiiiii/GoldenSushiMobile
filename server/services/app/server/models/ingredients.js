'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingredients.belongsTo(models.Item, {foreignKey: 'itemId'})
    }
  }
  Ingredients.init({
    itemId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Items",
        key: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name is required"
        },
        notEmpty: {
          msg: "Name is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Ingredients',
  });
  return Ingredients;
};