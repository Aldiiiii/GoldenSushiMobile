const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

let db = {};

async function connect() {
  try {
    await client.connect();
    db = client.db("golden-sushi");
    return db;
  } catch (error) {
    console.log("Failed to connect config/mongo.js:", error);
  }
}

function getDb() {
  return db;
}

module.exports = { connect, getDb };
