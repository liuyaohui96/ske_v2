const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  /**
   * @first 基本信息
   * @second 个人中心
   * @third 用户收藏资源
   * @fourth 用户贡献
   */

  // 基本信息
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    default: 0
  },
  reset_password_token: {
    type: String
  },
  reset_password_expires: {
    type: Date
  },

  // 用户中心信息
  avatar: {
    type: String
  },
  gender: {
    type: Number,
    default: 0 // 0 为man
  },
  age: {
    type: String,
    default: ''
  },
  birthday: {
    type: [String],
    default: []
  },
  location: {
    type: String,
    default: ''
  },
  mtto: {
    type: String,
    default: ''
  },
  introduction: {
    type: String,
    default: ''
  },
  private: {
    type: Boolean,
    default: 0
  },

  // 用户收藏资源
  collections: {
    type: [String],
    default: []
  },

  // 用户贡献资源
  resources: {
    type: [String],
    default: []
  },

  // 创建时间
  create_time: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', UserSchema)
