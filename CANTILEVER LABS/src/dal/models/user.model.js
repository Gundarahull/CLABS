const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    //accountId  be google Id,
    accountId: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
    },
    photoURL: {
      type: String,
    },
    provider: {
      type: String,
    },
    requests:[{type:ObjectId,ref:"User"}]
  
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
