const express = require('express');
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.get('/', (req, res) => {
    res.send("test")
})

app.listen(5000, () => console.log(`Server started on 5000`))
