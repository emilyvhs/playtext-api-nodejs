require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db')
const playRoutes = require('./routes/play-routes')
const userRoutes = require('./routes/user-routes')

const app = express()

const PORT = process.env.PORT 

connectToDB()

app.use(express.json())
app.use('/api/plays', playRoutes)
app.use('/api/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is connected at ${PORT}`)
})