import express from 'express'
import cors from 'cors'
import Connect from './db/connection.js'
import dotenv from 'dotenv'
import AuthRouter from './routes/auth.js'

dotenv.config(); // Load environment variables from .env file

const app = express()

app.use(cors())
app.use(express.json())

app.use('/chat/user', AuthRouter) // Register route

app.listen(process.env.PORT, () => {
    Connect()
    console.log("server is running on port 2000....");  
})