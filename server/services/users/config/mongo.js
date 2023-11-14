const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://amrinaldirizki:wlaC0UHAk1FdEGs0@golden.upevhd3.mongodb.net/?retryWrites=true&w=majority";

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
