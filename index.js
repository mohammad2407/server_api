const express = require("express");
const mongoose = require("mongoose");
const app = express()
require('dotenv').config();
const booksRoute = require("./Routes/books")

const PORT = process.env.PORT || 3005

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/books',booksRoute)

//connect to mongo db atlas
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true }
)
    .then(() => {
        console.log("Connected mongo atlas")
    })
  .catch(error => {
    console.log("Some error occured",error)
  })
app.listen(PORT, () => {
    console.log("port is running at", PORT)
})