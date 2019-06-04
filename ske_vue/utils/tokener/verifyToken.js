const jwt = require('jsonwebtoken')
const {secretOrPrivateKey} =require('../../config');

/**
 * @param token string 如 _id _password
 */
module.exports = (token) => {
  return jwt.verify(token, secretOrPrivateKey)
}