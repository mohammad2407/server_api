const mongoose = require("mongoose");
const Author  = require("./Author")
const yup = require("yup")
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

const validateBooks = (book) =>{
    const schema = yup.object().shape({
        bookName :  yup.string().required().min(3).max(50),
        authorName: yup.string().required().min(3).max(30),
        authorAge: yup.number().required().min(10).max(120),
        genre: yup.string().required().min(3).max(30),
    })

    return schema
    .validate(book)
    .then((book) => book)
    .catch((error) => {
        return{
            message : error.message
        }
    })
    
}

exports.Book = new mongoose.model("Book", Books_Schema);
exports.validateBooks =  validateBooks