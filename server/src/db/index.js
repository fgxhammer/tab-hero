/**
 * Database connector
 */

const mongoose = require('mongoose')

module.exports = (conn) => {
    return mongoose.connect(conn, { 
        autoIndex: process.env.NODE_ENV === 'development' ? true : false,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => {
        console.log('📗 Successfully connected to MongoDB...')
    })
}