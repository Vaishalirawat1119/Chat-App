import multer from 'multer'
import UserModel from '../model/User.js';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

// File Upload Config
export const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(
            null, file.fieldname + '_' + Date.now() + path.extname(file.originalname)
        )
    }
});

export const upload = multer({ storage });


// Register Controller
export async function register(req, res) {
    try {
        const { username, email, password } = req.body;
        const file = req.file?.filename;

        if (!username || !email || !password || !file) {
            return res.status(400).json({ msg: "All fields are required." });
        }

        const userExist = await UserModel.findOne({ 
            $or: [{ username }, { email }] 
        });

        if (userExist) {
            return res.status(400).json({ msg: "User already exists." });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            username,
            email,
            password: hashPassword,
            image: file,
        });

        await newUser.save();
        return res.status(200).json({ msg: "success" });

    } catch (err) {
        console.log("Register Error:", err);
        return res.status(500).json({ msg: "Internal Server Error", error: err.message });
    }
}

export async function login(req, res) {
    try {
        const { username, password } = req.body;

        const userExist = await UserModel.findOne({ username });

        if (!userExist) {
            return res.status(400).json({ msg: "User does not exist." });
        }

        const matchPassword = await bcrypt.compare(password, userExist.password);
        if (!matchPassword) {
            return res.status(400).json({ msg: "Incorrect password" });
        }

        const token = jwt.sign({ id: userExist._id }, process.env.JWT, {
            expiresIn: '1h',
        });

        return res.status(200).json({
            msg: "Login successful",
            token,
            user: {
                _id: userExist._id,
                username: userExist.username
            }
        });

    } catch (err) {
        console.log("Login Error:", err);
        return res.status(500).json({
            msg: "Internal Server Error",
            error: err.message
        });
    }
}