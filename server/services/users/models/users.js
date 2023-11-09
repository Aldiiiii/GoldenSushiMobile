const { getDb } = require("../config/mongo");
const bcrypt = require("bcryptjs");
const { ObjectId } = require("mongodb");

class User {
  static connectDb() {
    const collection = getDb().collection("users");
    return collection;
  }

  static async findAll() {
    try {
      const users = await this.connectDb().find().toArray();

      return users;
    } catch (error) {
      throw error;
    }
  }

  static async create({
    username,
    email,
    password,
    role,
    phoneNumber,
    address,
  }) {
    try {
      const salt = bcrypt.genSaltSync(7);
      const hash = bcrypt.hashSync(password, salt);
      password = hash;

      const newUser = await this.connectDb().insertOne({
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      });

      return newUser;
    } catch (error) {
      throw error;
    }
  }

  static async findOne(id) {
    try {
        const findUser = await this.connectDb().findOne({_id: new ObjectId(id)})
        return findUser
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
