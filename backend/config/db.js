const os = require('os')
const mongoose = require('mongoose')
const mongourl = process.env['MONGO_URI']
console.log(mongourl)
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongourl)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB