const jwt = require('jsonwebtoken')
const {secretOrPrivateKey, expiresIn} = require('../../config')


module.exports = createToken = (playload) =>{
  return jwt.sign(playload, secretOrPrivateKey, {expiresIn})
}

