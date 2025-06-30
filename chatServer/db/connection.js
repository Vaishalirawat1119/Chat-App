import mongoose from "mongoose";

const Connect = async() => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected successfully");
    } catch(err){
        console.log(err);
    }
}

export default Connect;