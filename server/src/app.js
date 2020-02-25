const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { db } = require('./db')

// init environment variables from .env file
dotenv.config()
const PORT = process.env.PORT
const CROSS_ORIGIN = process.env.CROSS_ORIGIN
const DB_CONNECTION = process.env.DB_CONNECTION

const app = express()

// init Mongo DB
db(DB_CONNECTION)

// middleware
// TODO: Add error handler for not found / and general
app.use(morgan('common'))
app.use(express.json())
app.use(cors({
    origin: CROSS_ORIGIN
}))

// Routes
const userRouter = require('./routes/userRouter')
userRouter(app)

app.listen(PORT, () => {
    console.log(`Server up ⬆️  and running on port ${PORT} \n`)
})
