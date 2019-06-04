const bcrypt = require('bcrypt')
const {saltRounds} = require('../../config');

module.exports = {
  // 异步的加密函数
  async encrypt(password){
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  // other
}