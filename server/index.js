const express = require("express")
const path = require("path")
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser:true, useUnifiedTopology:true}).then(() => {
    console.log("CONNECTION OPEN")
}).catch(err => {
    console.log("OHH NO", err)
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get("/dog", (req, res) => {
    res.send("WOLF")
})

app.listen(3000, () => {
    console.log("APP IS LISTENING")
})