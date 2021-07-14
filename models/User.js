const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,  // 문자 사이에 공간이 없도록 하는 것
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {         //유효성 검사에 사용
    type: String,
  },
  toeknExp: {      //토큰의 기한
    type: Number,
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }