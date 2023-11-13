const Redis = require("ioredis");
const redis = new Redis({
  port: 17626, // Redis port
  host: "redis-17626.c252.ap-southeast-1-1.ec2.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: "ehOuoUqUpc8Fb4UK64i307b0uMg2E2A3",
});

module.exports = redis;