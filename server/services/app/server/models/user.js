'use strict';
const bcrypt = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Item, {foreignKey: 'authorId'})
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
        unique: {
          msg: "Email must be unique"
        },
        validate: {
          notNull: {
            msg: "Email is required"
          },
          notEmpty: {
            msg: "Email is required"
          },
          isEmail: {
            msg: "Must be in email format"
          }
        }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 5,
          msg: "Password length must more than 5 characters"
        },
        notNull: {
          msg: "Password is required"
        },
        notEmpty: {
          msg: "Password is required"
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    const salt = bcrypt.genSaltSync(7)
    const hash = bcrypt.hashSync(user.password, salt)

    user.password = hash
    user.role = "admin"
  })

  return User;
};