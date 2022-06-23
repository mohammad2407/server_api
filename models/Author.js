const mongoose = require("mongoose");

// Author schema;

const AuthorSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        minlength:3,
        maxlength:40
    },
    age:{
        type:String,
        min:10,
        max:150
    }
});

module.exports = new mongoose.model("Author",AuthorSchema)