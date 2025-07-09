import express from 'express'
import cors from 'cors'
import Connect from './db/connection.js'
import dotenv from 'dotenv'
import AuthRouter from './routes/auth.js'

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/chat/user', AuthRouter)

app.use('/public', express.static('public'))

app.listen(process.env.PORT, () => {
    Connect()
    console.log(`Server is running on port ${process.env.PORT}....`);  
})
