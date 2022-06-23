const express = require("express");
const mongoose = require("mongoose");
const app = express()
require('dotenv').config();


const PORT = process.env.PORT || 3005

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