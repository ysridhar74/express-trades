const express = require('express');
const connectDB = require('./config/db')
const port = process.env['PORT']
connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.get('/', (req, res) => {
    res.send("test")
})

app.listen(port, () => console.log(`Server started on port ${port}`))
