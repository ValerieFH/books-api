const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const bookRoutes = require('./controllers/books')
const PORT = process.env.PORT || 8080
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/books', bookRoutes)

app.listen(PORT, () => console.log(`live and worldwide on port ${PORT}`))