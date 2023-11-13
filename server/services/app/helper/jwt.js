const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

function createToken(payload){
    return jwt.sign(payload, SECRET)
}

function verifyToken(access_token){
    return jwt.verify(access_token, SECRET)
}

module.exports = {
    createToken,
    verifyToken
}