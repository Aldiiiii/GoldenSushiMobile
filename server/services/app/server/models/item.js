'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.User, {foreignKey: 'authorId'})
      Item.belongsTo(models.Category, {foreignKey: 'categoryId'})
      Item.hasMany(models.Ingredients, {foreignKey: 'itemId'})
    }
  }
  Item.init({
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
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description is required"
        },
        notEmpty: {
          msg: "Description is required"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: 5000,
          msg: "Price must more than 5000"
        },
        notNull: {
          msg: "Price is required"
        },
        notEmpty: {
          msg: "Price is required"
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "ImageURL is required"
        },
        notEmpty: {
          msg: "ImageURL is required"
        }
      }
    },
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Categories",
        key: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};