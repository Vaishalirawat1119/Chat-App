import express from 'express'
import { register, login, upload } from '../controllers/registerController.js';

const router = express.Router()

router.post('/register',upload.single('image'), register)

router.post('/login', login)


export default router;