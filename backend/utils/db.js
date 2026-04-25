import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();  // ✅ THIS LINE IS MISSING

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connected successfully!");
        
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;