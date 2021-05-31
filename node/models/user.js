const crypto = require('crypto');
const mongoose = require('mongoose'),

Schema = mongoose.Schema;

const schema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  score: {
    type: Number,
    default: 0
  },
  hashedPassword: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

schema.methods.encryptPassword = function(password) { 
  return crypto.createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
};

schema.methods.checkPassword = function(password) { 
  return this.encryptPassword(password) === this.hashedPassword 
};

schema.virtual('password')
  .set(function(password) {
    this._plainPassword = password;
    this.salt = Math.random() + '';
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() { return this._plainPassword });

exports.User = mongoose.model('User', schema, 'users');