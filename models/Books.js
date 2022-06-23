const mongoose = require("mongoose");
const Author  = require("./Author")
//Books schema

const Books_Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    author: Author.schema,
    genre:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    }
})

module.exports = new mongoose.model("Book", Books_Schema)