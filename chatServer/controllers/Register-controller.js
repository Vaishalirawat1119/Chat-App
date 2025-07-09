import multer from 'multer'
import UserModel from '../model/User.js';
import path from 'path';
import bcrypt from 'bcrypt';

// File Upload Config
const storage = multer.diskStorage({
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
async function Register(req, res) {
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

export default Register;
