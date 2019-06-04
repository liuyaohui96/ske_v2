const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ResourceSchema = new Schema({
  classification: {
    type: Number,
    default: 0
  },
  author_id: {
    type: String
  },
  author_name: {
    type: String
  },
  last_update_time: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  like_counts: {
    type: Number,
    default: 0
  },
  read_counts: {
    type: Number,
    default: 0
  },
  collection_counts: {
    type: Number,
    default: 0
  },
  comments: {
    type: [
      {
        commenter_id: String,
        commenter_name: String,
        commenter_avatar: String,
        comment_time: Date,
        comment: String
      }
    ]
  }
})

module.exports = mongoose.model('Resource', ResourceSchema)
