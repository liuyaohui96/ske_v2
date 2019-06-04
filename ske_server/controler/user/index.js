const loginControler = require('./login')
const registerControler = require('./register')
const activeEmailControler = require('./activeEmail')
const changePswControler = require('./changePsw')
const forgetPswControler = require('./forgetPsw')
const resetPswAuthControler = require('./resetPswAuth')
const resetPswControler = require('./resetPsw')

const changeUsernameControler = require('./changeUsername')
const changeProfileControler = require('./changeProfile')

// --------- collectioins
const getCollectionsControler = require('./getCollections')
const manageCollectionsControler = require('./manageCollections')

// ---------- resources 上传资源
const getResourcesControler = require('./getResources')

// -------- 用户全部信息
const getUserInfoControler = require('./getUserInfo')

module.exports = {
  // ------ 基本信息
  loginControler,
  registerControler,
  activeEmailControler,
  changePswControler,
  forgetPswControler,
  resetPswAuthControler,
  resetPswControler,

  // --------个人中心信息
  changeUsernameControler,
  changeProfileControler,

  // ---------收藏
  getCollectionsControler,
  manageCollectionsControler,

  // --------- 上传资源
  getResourcesControler,

  // --------- 获取所有用户信息
  getUserInfoControler
}
