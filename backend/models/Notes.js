import mongoose from 'mongoose'


const NotesSchema = new Schema({
    title:{
        type:String,
        required:True
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default: "General"
    },
    date:{
        type:Date,
        default:Date.now
    }
  });

  module.exports = mongoose.model('notes',NotesSchema)