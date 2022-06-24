const express = require("express");

const router = express.Router();
const {Book,validateBooks} = require("../models/Books")
//Post: creating a new book

router.post('/', async(req, res) => {
   const message =  await validateBooks(req.body);
    
   if(message) res.status(400).send(message)
   
   const book = new Book({
        name: req.body.bookName,
        author: {
            name: req.body.authorName,
            age: req.body.authorAge
        },
        genre: req.body.genre
    });

    book
    .save()
    .then((book) => {
         res.send(book) 
        })
        .catch((error) => {
            res.status(500).send("Book was not stored in the data base")
        })

})


module.exports = router;