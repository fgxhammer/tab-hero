const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const db = require('./db')

// init environment variables from .env file
dotenv.config()
const PORT = process.env.PORT
const CROSS_ORIGIN = process.env.CROSS_ORIGIN
const DB_CONNECTION = process.env.DB_CONNECTION

// init Mongo DB
db(DB_CONNECTION)

const app = express()

// middleware
app.use(morgan('common'))
app.use(express.json())
app.use(cors({
    origin: CROSS_ORIGIN
}))

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}, your user was registerd!`
    })
})

app.listen(PORT, () => {
    console.log(`Server up ⬆️  and running on port ${PORT}`)
})
