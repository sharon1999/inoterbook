import mongoose from 'mongoose'


const UserSchema = new Schema({
    name:{
        type:String,
        required:True
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:True
    },
    date:{
        type:Date,
        default:Date.now
    }
  });

  module.exports = mongoose.model('user',UserSchema)