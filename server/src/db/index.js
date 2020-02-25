/**
 * Database connector
 */

const UserSchema = require('./User')
const mongoose = require('mongoose')

/**
 * Establishes the database connection
 * @param {String} conn - connection string for the database
 * @returns the database connection 
 */
const db = (conn) => {
    return mongoose.connect(conn, { 
        autoIndex: process.env.NODE_ENV === 'development' ? true : false,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => {
        console.log('📗 Successfully connected to MongoDB... \n')
    })
}

module.exports = {
    UserSchema,
    db
}