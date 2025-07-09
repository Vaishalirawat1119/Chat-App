import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true}, 
    image: {type: String}
})

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;